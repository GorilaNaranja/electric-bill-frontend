<template>
  <div>
    <h1>Hello Vue Page</h1>

    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#editor"
    >
      Create Bill
    </button>

    <div
      class="modal fade"
      id="editor"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <BillEditor :bill="bill" @submitBill="submitBill($event)"></BillEditor>
      </div>
    </div>

    <BillsList
      :bills="bills"
      @editBill="editBill($event)"
      @deleteBill="deleteBill($event)"
    ></BillsList>
  </div>
</template>

<script>
import BillsList from "../components/BillsList.vue";
import BillEditor from "../components/BillEditor.vue";
import axios from "axios";
// import { mapActions, mapGetters } from "vuex";

const config = { headers: { "Content-Type": "application/json" } };
const url = "http://localhost:3000/bill";

export default {
  components: { BillsList, BillEditor },
  data() {
    return {
      bills: [],
      bill: {},
    };
  },
  // computed: {
  //   ...mapGetters(["bills"]),
  // },
  methods: {
    // ...mapActions(["getBills"]),
    async getBills() {
      const response = await axios.get(url, config);
      this.bills = response.data.data;
    },
    async submitBill(bill) {
      if (bill._id) {
        await axios.put(url + `/${bill._id}`, bill, config);
      } else {
        await axios.post(url, bill, config);
      }
      this.getBills();
    },
    editBill(bill) {
      this.bill = bill;
      console.log("EDIT", bill);
    },
    async deleteBill(id) {
      await axios.delete(url + `/${id}`, config);
      this.getBills();
    },
  },
  async mounted() {
    this.getBills();
  },
};
</script>

<style>
</style>

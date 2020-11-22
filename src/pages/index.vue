<template>
  <div>
    <div class="card" style="background: #f3f3f3">
      <div class="mx-auto mt-5">
        <button
          type="button"
          class="btn btn-info btn-rounded btn-lg mr-1"
          data-toggle="modal"
          data-target="#editor"
        >
          Create Bill
        </button>

        <button
          type="button"
          class="btn btn-info btn-rounded btn-lg"
          data-toggle="modal"
          data-target="#chart"
        >
          Show Chart
        </button>
      </div>

      <div
        class="modal fade"
        id="chart"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <BillChart v-if="bills.length != 0" :bills="bills"></BillChart>
        </div>
      </div>
      <div
        class="modal fade"
        id="editor"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <BillEditor
            :bill="bill"
            @submitBill="submitBill($event)"
          ></BillEditor>
        </div>
      </div>

      <div class="card m-5">
        <BillsList
          :bills="bills"
          @editBill="editBill($event)"
          @deleteBill="deleteBill($event)"
        ></BillsList>
      </div>
    </div>
  </div>
</template>

<script>
import BillsList from "../components/BillsList.vue";
import BillEditor from "../components/BillEditor.vue";
import BillChart from "../components/BillChart.vue";
import axios from "axios";

// import { mapActions, mapGetters } from "vuex";

const config = { headers: { "Content-Type": "application/json" } };
const url = "http://localhost:3000/bill";

export default {
  components: { BillsList, BillEditor, BillChart },
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
  mounted() {
    this.getBills();
  },
};
</script>

<style>
</style>

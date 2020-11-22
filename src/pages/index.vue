<template>
  <div>
    <div class="card" style="background: #f3f3f3">
      <div class="mx-auto mt-5">
        <button
          type="button"
          class="btn btn-info btn-rounded btn-lg mr-1"
          data-toggle="modal"
          data-target="#editor"
          @click="createBill()"
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
        <div class="modal-dialog" role="document" style="max-width: 700px">
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
import { mapGetters } from "vuex";

export default {
  components: { BillsList, BillEditor, BillChart },
  data() {
    return {
      bills: [],
      bill: {},
    };
  },
  computed: {
    ...mapGetters(["config", "url"]),
  },
  methods: {
    createBill() {
      this.bill = {};
    },
    async getBills() {
      try {
        const response = await axios.get(this.url, this.config);
        this.bills = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async submitBill(bill) {
      console.log(bill);
      try {
        if (bill._id) {
          await axios.put(this.url + `/${bill._id}`, bill, this.config);
        } else {
          await axios.post(this.url, bill, this.config);
        }
        this.getBills();
      } catch (error) {
        console.log(error);
      }
    },
    editBill(bill) {
      this.bill = bill;
    },
    async deleteBill(id) {
      try {
        await axios.delete(this.url + `/${id}`, this.config);
        this.getBills();
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getBills();
  },
};
</script>

<style>
</style>

<template>
  <div>
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Bill</h5>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label>Date</label>
            <div
              id="datepicker"
              class="md-form md-outline input-with-post-icon datepicker"
            >
              <input
                v-model="bill.date"
                placeholder="Select date"
                type="date"
                class="form-control"
              />
            </div>
          </div>
          <div class="form-group">
            <label>Hour</label>
            <input
              v-model="bill.hour"
              type="number"
              placeholder="Hour"
              class="form-control bfh-number"
              min="0"
              max="23"
            />
          </div>
          <div class="form-group">
            <label>Consumption</label>
            <input
              v-model="bill.consumption"
              type="number"
              placeholder="Consumption"
              class="form-control bfh-number"
            />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input
              v-model="bill.price"
              type="number"
              placeholder="Price"
              class="form-control bfh-number"
            />
          </div>
          <div class="form-group">
            <label>Cost</label>
            <input
              v-model="bill.cost"
              type="number"
              placeholder="Cost"
              class="form-control bfh-number"
            />
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">
          Close
        </button>
        <button
          type="button"
          class="btn btn-info"
          @click="submit()"
          data-dismiss="modal"
        >
          OK
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  components: {},
  data() {
    return {};
  },
  props: {
    bill: {
      type: Object,
      required: false,
      default: () => {
        return {
          date: moment(),
          hour: 0,
          consumption: 0,
          price: 0,
          cost: 0,
        };
      },
    },
  },
  computed: {
    // formatDate() {
    //   // return new Date();
    //   return moment(this.bill.date).format("DD/MM/YYYY");
    // },
  },
  methods: {
    submit() {
      console.log("SUBMIT: ", this.bill);
      this.$emit("submitBill", this.bill);
    },
  },
  created() {},
  mounted() {},
};
</script>

<style>
</style>

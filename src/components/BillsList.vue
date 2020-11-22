<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Date</th>
          <th scope="col">Hour</th>
          <th scope="col">Consumption (Wh)</th>
          <th scope="col">Price (€/kWh)</th>
          <th scope="col">Cost (€)</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody v-for="bill in bills" :key="bill.id">
        <tr>
          <td>{{ bill._id }}</td>
          <td>{{ bill.date | format }}</td>
          <td>{{ bill.hour }}</td>
          <td>{{ bill.consumption }}</td>
          <td>{{ bill.price }}</td>
          <td>{{ bill.cost }}</td>
          <td>
            <button
              @click="editBill(bill)"
              data-toggle="modal"
              data-target="#editor"
              class="btn btn-outline-info"
              style="margin-right: 10px"
            >
              Edit
            </button>
            <button
              @click="deleteBill(bill._id)"
              class="btn btn-outline-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {};
  },
  props: {
    bills: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  filters: {
    format: function (value) {
      if (!value) return "";
      return moment(value).format("DD/MM/YYYY");
    },
  },
  methods: {
    editBill(bill) {
      this.$emit("editBill", bill);
    },
    deleteBill(id) {
      this.$emit("deleteBill", id);
    },
  },
  created() {},
  mounted() {},
};
</script>

<style>
</style>

<template>
  <div>
    <h1>Bills list</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Date</th>
          <th scope="col">Hour</th>
          <th scope="col">Consumption</th>
          <th scope="col">Price</th>
          <th scope="col">Cost</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody v-for="bill in bills" :key="bill.id">
        <tr>
          <td>{{ bill._id }}</td>
          <td>{{ bill.date }}</td>
          <td>{{ bill.hour }}</td>
          <td>{{ bill.consumption }}</td>
          <td>{{ bill.price }}</td>
          <td>{{ bill.cost }}</td>
          <td>
            <button
              @click="editBill(bill)"
              data-toggle="modal"
              data-target="#editor"
              class="btn btn-primary"
              style="margin-right: 10px"
            >
              Edit
            </button>
            <button @click="deleteBill(bill._id)" class="btn btn-secondary">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
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

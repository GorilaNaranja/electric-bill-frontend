<template>
  <div>
    <div class="modal-content">
      <div class="modal-body">
        <div class="small">
          <line-chart :chart-data="datacollection"></line-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "../charts/LineChart.js";
import moment from "moment";

export default {
  components: { LineChart },
  data() {
    return {
      datacollection: {},
      labels: [],
      consumption: [],
    };
  },
  props: {
    bills: {
      type: Array,
      required: true,
    },
  },

  mounted() {
    this.bills.forEach((bill) => {
      this.labels.push(moment(bill.date).format("DD/MM/yyyy"));
      this.consumption.push(bill.consumption);
    });

    this.datacollection = {
      labels: this.labels,
      datasets: [
        {
          label: "Consumption kWh / day",
          backgroundColor: "#f87979",
          data: this.consumption,
        },
      ],
    };
  },
};
</script>

<style>
</style>

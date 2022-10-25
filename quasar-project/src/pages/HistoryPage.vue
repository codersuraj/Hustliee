<template>
  <div class="history">
    <OverallStatusVue :data="OverallStatus" />
    <div class="q-mt-lg semidark-bg scroll" style="border-radius: 5px; padding: 20px 25px 0 25px;">
      <div v-if="OverallStatus.total != 0">
        <div v-for="item in all" :key="item" class="box-shadow">
          <HistoryCard :item="item" />
        </div>
      </div>
      <div v-else>
        <div
          class="black-r-bg br-secondary q-mb-md text-white"
          style="padding-block: 20px; padding-inline: 25px; height: 100px"
        >
          <p style="text-align: center">The list is empty!</p>
        </div>
      </div>
    </div>
     
  </div>
</template>

<script>
import OverallStatusVue from "src/components/OverallStatus.vue";
import HistoryCard from "../components/HistoryCard.vue";

export default {
  components: { OverallStatusVue, HistoryCard },
  data() {
    return {
      OverallStatus: { total: 10, accepted: 5, pending: 2, rejected: 4 },
      all: [
        {
          name: "Hariharan C",
          rollno: "21EE038",
          period: "2nd to 3rd",
          purpose: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.", 
          date: 1666615858736,
          status: 2,
        },
        {
          name: "Pavan S",
          rollno: "21EC078",
          period: "2nd to 3rd",
          purpose: "Placement training",
          date: 1666615858736,
          status: 0,
        },
        {
          name: "Sanraj C",
          rollno: "21EE038",
          period: "2nd to 3rd",
          purpose: "Placement training",
          date: 1666615858736,
          status: 1,
        },
        {
          name: "Suraj S",
          rollno: "21EC078",
          period: "2nd to 3rd",
          purpose: "Placement training",
          date: 1666615858736,
          status: 0,
        },
      ],
    };
  },
};
</script>

<style></style>

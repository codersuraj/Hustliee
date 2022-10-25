<template>
  <div
    :class="cardstyle(item.status)"
    class=" black-r-bg color_card text-white"
    style="padding-block: 20px; padding-inline: 25px"
  >
    <!-- <p style="text-align: end" class="font-xsm q-mb-sm">
      {{ relaticeDate(item.date) }}
    </p> -->
    <div class="flex">
      <div class="left">
        <div class="flex q-mb-sm">
          <div class="name-holder">
            <p class="font-xsm">Name-</p>
          </div>
          <div class="box">
          <p class="fw-semibold t-shadow font-small">
            {{ item.name }}
          </p>
          </div>
        </div>
        <div class="flex q-mb-sm">
          <div class="name-holder">
            <p class="font-xsm">Rollno-</p>
          </div>
          <div class="box">
          <p class="fw-semibold t-shadow font-small">
            {{ item.rollno }}
          </p>
          </div>
        </div>
        <div class="flex q-mb-sm">
          <div class="name-holder">
            <p class="font-xsm">Purpose-</p>
          </div>
          <div class="box">
            <p class="fw-semibold t-shadow font-small">
              {{ item.purpose }}
            </p>
          </div>
        </div>
        <div class="flex q-mb-sm">
          <div class="name-holder">
            <p class="font-xsm">Period/Hr-</p>
          </div> 
          <div class="box">
          <p class="fw-semibold t-shadow font-small">
            {{ item.period }}
          </p>
          </div>
        </div>
      </div>
      <div class="right flex items-center" style="position:relative; left:20px">
        <div>
          <div class="flex column items-center" style="height:42px;">
            <q-avatar
            size="35px"
            font-size="22px"
              :color="colorName(item.status)"
              text-color="blue-grey-9"
              :icon="iconName(item.status)"
            />
          </div>
          <p class="font-xxsm" style="text-align:center;">{{ statusName(item.status) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDistance } from "date-fns";
export default {
  name: "HistoryCard",
  props: {
    item: Object,
  },
  methods: {
    cardstyle(status) {
      let className = "";
      if (status == 0) {
        className = "pending_card";
      } else if (status == 1) {
        className = "accepted_card";
      } else {
        className = "rejected_card";
      }
      return className;
    },
    statusName(status) {
      let statusName = "";
      if (status == 0) {
        statusName = "Expired";
      } else if (status == 1) {
        statusName = "Accepted";
      } else {
        statusName = "Rejected";
      }
      return statusName;
    },
    iconName(status) {
      let iconName = "";
      if (status == 0) {
        iconName = "las la-exclamation-triangle";
      } else if (status == 1) {
        iconName = "las la-check-square";
      } else {
        iconName = "las la-minus-square";
      }
      return iconName;
    },
    colorName(status) {
      let colorName = "";
      if (status == 0) {
       colorName = "orange-5";
      } else if (status == 1) {
        colorName= "green-5";
      } else {
        colorName = "red-6";
      }
      return colorName;
    },
  },
  computed: {
    relaticeDate(v) {
      return (v) => {
        return formatDistance(v, new Date(), { addSuffix: true });
      };
    },
  },
};
</script>

<style scoped>
.left {
  width: 70%;
}

.right {
  width: 30%;
}

.box{
  width: 45%;
}
.name-holder {
  width: 70px;
  height: fit-content;
}


.color_card {
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 20px 25px;
}


.t-shadow {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>

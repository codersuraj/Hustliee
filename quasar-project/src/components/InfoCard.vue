<template>
  <div
    :class="cardstyle(item.status)"
    style="padding-block: 20px; padding-inline: 25px"
  >
    <p style="text-align: end" class="font-xsm q-mb-sm">
      {{ relaticeDate(item.date) }}
    </p>
    <div class="">
      <div class="flex q-mb-sm">
        <div class="name-holder">
          <p class="font-xsm">Name-</p>
        </div>
        <p class="fw-semibold t-shadow font-small">
          {{ item.name }}
        </p>
      </div>
      <div class="flex q-mb-sm">
        <div class="name-holder">
          <p class="font-xsm">Class-</p>
        </div>
        <p class="fw-semibold t-shadow font-small">
          {{ item.class }}
        </p>
      </div>
      <div class="flex q-mb-sm">
        <div class="name-holder">
          <p class="font-xsm">Rollno-</p>
        </div>
        <p class="fw-semibold t-shadow font-small">
          {{ item.rollno }}
        </p>
      </div>
      <div class="flex q-mb-sm">
        <div class="name-holder">
          <p class="font-xsm">Period/Hr-</p>
        </div>
        <p class="fw-semibold t-shadow font-small">
          {{ item.period }}
        </p>
      </div>
      <div class="flex q-mb-sm">
        <div class="name-holder">
          <p class="font-xsm">Purpose-</p>
        </div>
        <div style="width: 55%">
          <p class="fw-semibold t-shadow font-small">
            {{ item.purpose }}
          </p>
        </div>
      </div>
      <div class="flex justify-between q-mt-lg" v-if="item.status == 0">
        <q-btn
          padding="5px 29px"
          size="12px"
          v-model="otp"
          class="box-shadow semidark-bg fw-medium br-primary"
          text-color="white"
          label="Accept"
          no-caps
        />
        <q-btn
          padding="5px 31.5px"
          size="12px"
          v-model="otp"
          class="box-shadow semidark-bg fw-medium br-primary"
          text-color="white"
          label="Reject"
          no-caps
        />
      </div>
    </div>
  </div>
</template>

<script>
import { formatDistance } from "date-fns";
export default {
  name: "InfoCard",
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
.name-holder {
  width: 80px;
  height: fit-content;
}

.pending_card {
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 20px 25px;
  background: linear-gradient(180deg, #fdc087 0%, #feae63 63.02%, #ffa44f 100%);
}

.pending_card p:nth-child(odd) {
  color: #40464a;
}

.pending_card p:nth-child(even) {
  color: #1f2123;
}

.rejected_card {
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 20px 25px;
  background: linear-gradient(180deg, #ff4b4b 0%, #ff4e4e 100%);
}

.rejected_card p {
  color: #2a2e31;
}

.accepted_card {
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 20px 25px;
  background: linear-gradient(
    180deg,
    #52d371 0%,
    rgba(82, 211, 113, 0.65) 100%
  );
}

.accepted_card p:nth-child(odd) {
  color: #40464a;
}

.accepted_card p:nth-child(even) {
  color: #1f2123;
}

.t-shadow {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>

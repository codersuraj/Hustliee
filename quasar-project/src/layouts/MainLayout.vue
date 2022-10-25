<template>
  <div class="page dark-bg" style="padding: 25px">
    <div class="navbar">
      <div class="logout-bar flex">
        <q-btn round>
          <q-avatar size="38px">
            <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
          </q-avatar>
        </q-btn>
        <q-space />
        <q-btn>
          <div class="flex column">
            <span class="ham"></span>
            <span class="ham1"></span>
          </div>
          <q-badge rounded class="bg-prime" />
          <q-popup-proxy>
            <q-banner style="height: 80vh; width: 100%" class="black-r-bg">
              <template v-slot:avatar> </template>
            </q-banner>
          </q-popup-proxy>
        </q-btn>
      </div>
      <div class="namebar" v-if="this.tab == 'home'">
        <h1 class="text-white font-xxl title-text q-mt-sm">
          Hello,<span class="fg-prime fw-semibold"> Hari!</span>
        </h1>
        <p class="text-white font-xsm">Have a wonderful day!</p>
      </div>
      <div class="namebar" v-else-if="this.tab == 'history'">
        <h1 class="text-white font-xxl title-text q-mt-sm">
          Your <span class="fg-prime fw-semibold">OD</span> history
        </h1>
        <p class="text-white font-xsm">Have a wonderful day!</p>
      </div>
    </div>

    <div class="space">
      <router-view />
    </div>
    <q-tabs v-model="tab" align="justify" class="q-my-md">
      <q-tab name="history"
        ><img
          src="../assets/diagram.svg"
          :class="{ active: this.tab == 'history' }"
          alt="History"
      /></q-tab>
      <q-tab name="home"
        ><img
          src="../assets/home.svg"
          :class="{ svg, active: this.tab == 'home' }"
          alt="Home"
      /></q-tab>
      <q-tab name="settings"
        ><img
          src="../assets/setting.svg"
          :class="{ svg, active: this.tab == 'settings' }"
          alt="Settings"
      /></q-tab>
    </q-tabs>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    let isActive = false;
  },
  setup() {
    return {
      tab: ref("home"),
    };
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.title-text {
  line-height: 1.5;
  letter-spacing: normal;
}
.navbar {
  height: 130px;
}

.logout-bar {
  height: 45px;
}
.namebar {
  height: 65px;
}

.space {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
}
.space::-webkit-scrollbar {
  display: none;
}

.lines {
  width: 50px;
  height: 100%;
}
:deep(.q-tab__indicator) {
  height: 4px !important;
  width: 25px;
  margin-inline: auto;
  background-color: #52d371;
  border-radius: 10px 10px 0 0;
}

.footer-tab {
  position: relative;
  bottom: 0px;
}

.q-btn {
  padding: 0px !important;
  display: block;
  top: 5px;
  box-shadow: none;
}

.active {
  transition: transform 0.3s all;
  width: 40px;
  position: relative;
  bottom: 5px;
  transition: transform 1s all;
}

.ham {
  position: relative;
  top: 0;
  right: 0px;
  height: 4px;
  width: 30px;
  background-color: white;
}

.ham1 {
  position: relative;
  top: 6px;
  left: 10px;
  right: 0px;
  height: 4px;
  width: 20px;
  background-color: white;
}

.page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>

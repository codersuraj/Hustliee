<template>
  <div class="page dark-bg" style="padding: 25px">
    <div class="navbar">
      <div class="logout-bar flex">
        <q-btn round>
          <q-avatar size="38px">
            <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
          </q-avatar>
          <q-popup-proxy>
            <q-banner
              style="height: inherit; width: 100%"
              class="black-r-bg justify-center"
            >
              <template v-slot:avatar>
                <div
                  class="justify-center column items-center"
                  style="height: 20vh; width: 300px"
                >
                  <div>
                    <q-avatar size="38px">
                      <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                    </q-avatar>
                  </div>
                  <div>
                    <p class="text-white q-mt-md text-center">
                      You are logged in as 21ee038@kpriet.ac.in
                    </p>
                    <q-btn
                      label="Logout"
                      padding="12px 0px"
                      size="18px"
                      class="bg-prime fw-bold button q-mt-lg"
                      text-color="black"
                      @click="signOut()"
                    ></q-btn>
                  </div>
                </div>
              </template>
            </q-banner>
          </q-popup-proxy>
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
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
    <q-tabs v-model="tab" align="justify" class="q-my-md">
      <div>
        <router-link to="/history" style="text-decoration: none">
          <q-tab name="history">
            <img
              src="../assets/diagram.svg"
              :class="{ active: this.tab == 'history' }"
              alt="History"
            />
          </q-tab>
        </router-link>
      </div>
      <div>
        <router-link to="/staff/home" style="text-decoration: none">
          <q-tab name="home">
            <img
              src="../assets/home.svg"
              :class="{ svg, active: this.tab == 'home' }"
              alt="Home"
            />
          </q-tab>
        </router-link>
      </div>
      <router-link to="/staff/home" style="text-decoration: none">
        <q-tab name="settings"
          ><img
            src="../assets/setting.svg"
            :class="{ svg, active: this.tab == 'settings' }"
            alt="Settings"
        /></q-tab>
      </router-link>
    </q-tabs>
  </div>
</template>

<script>
import { route } from "quasar/wrappers";
import router from "src/router";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { db, auth } from "../../firestore/firestore";

export default {
  data() {
    let isActive = false;
    return {
      dense: true,
    };
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
    async signOut() {
      await auth
        .signOut()
        .then((result) => {
          this.$router.push("/");
          console.log("Signout Succesfull");
        })
        .catch((err) => {
          console.log("Signout Failed");
        });
    },
  },
  beforeRouteLeave(to, from, next) {
    if (to === "/history") {
      this.tab = "history";
    } else if (to === "/staff/home") {
      this.tab = "home";
    }
    next();
  },
  beforeMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        console.log("sign in");
        this.$router.push("/user/home");
      } else {
        // No user is signed in.
        this.$router.push("/");
        console.log("signout");
      }
    });
  },
};
</script>

<style scoped>
/* route transition */

.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.title-text {
  line-height: 1.5;
  letter-spacing: normal;
}
.navbar {
  height: 130px;
}

.button {
  width: 100%;
  display: flex;
  align-items: center;
}

.logout-bar {
  height: 45px;
}
.namebar {
  height: 65px;
}

:deep(.q-tabs__content) {
  display: flex;
  margin-inline: 25px;
  justify-content: space-between;
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

:deep(.q-tab__indicator) {
  height: 4px !important;
  width: 25px;
  margin-inline: auto;
  background-color: #52d371;
  border-radius: 10px 10px 0 0;
}

:deep(.q-tab .q-ripple) {
  appearance: none;
  display: none;
}

:deep(.q-focus-helper) {
  background: transparent;
  opacity: 0;
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

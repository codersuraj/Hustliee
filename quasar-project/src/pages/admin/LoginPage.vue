<template>
  <q-layout class="dark-bg">
    <q-page-container>
      <q-page class="ma-y-40 vertical-align">
        <q-card class="my-card semidark-bg br-primary pa-interior">
          <q-card-section class="q-pa-none">
            <p
              class="fw-semibold text-center text-white"
              style="font-size: 30px; top: -10px; position: relative"
            >
              SIGN UP
            </p>
            <p class="font-regular grey-fg text-center q-mt-md">Department</p>
            <div class="q-mt-md q-px-md">
              <q-btn-dropdown
                padding="6px 0px"
                size="18px"
                class="grey-bg button font-semi-medium shadow-6"
                no-caps
                align="center"
                :label="this.dept"
                icon=""
                dropdown-icon="none"
              >
                <q-list separator class="br-primary">
                  <q-item
                    clickable
                    v-close-popup
                    @click="onItemClick"
                    class="button"
                    v-for="item in dept_list"
                    :key="item"
                  >
                    <q-item-section>
                      <q-item-label>{{ item }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
            <p
              class="font-regular grey-fg text-center"
              style="margin-top: 18px"
            >
              Name
            </p>
            <div class="q-mt-md q-px-md">
              <q-btn-dropdown
                padding="6px 0px"
                size="18px"
                class="grey-bg button font-semi-medium shadow-6"
                no-caps
                align="center"
                :label="this.name"
                icon=""
                dropdown-icon="none"
              >
                <q-list separator class="br-primary">
                  <q-item
                    clickable
                    v-close-popup
                    @click="onItemClick"
                    class="button"
                    v-for="item in dept"
                    :key="item"
                  >
                    <q-item-section>
                      <q-item-label>{{ item }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
            <p class="font-regular grey-fg text-center q-mt-md">Email</p>
            <div class="q-mt-md">
              <div
                class="q-px-sm grey-bg input br-secondary font-semi-medium q-pb-xl shadow-6"
              >
                <q-input
                  ref="inputRef"
                  :rules="[myRule]"
                  :dense="dense"
                  borderless
                  v-model="email"
                  class="fw-semibold"
                >
                </q-input>
              </div>
            </div>

            <!-- <p class="font-regular grey-fg text-center q-mt-md">Set Password</p>
            <div class="q-mt-md">
              <div class="q-px-md grey-bg input br-secondary q-pb-xl">
                <q-input
                  :dense="dense"
                  borderless
                  v-model="password"
                  :type="isPwd ? 'password' : 'text'"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
              </div>
            </div> -->

            <p
              class="text-red-4 q-mt-sm text-center"
              style="position: relative; bottom: -10px"
              v-show="alert"
            >
              *All Fields Are Required
            </p>

            <div style="margin-top: 46px" class="q-px-lg">
              <!-- <router-link to="/staff/signin" style="text-decoration: none"> -->
              <q-btn
                padding="6px 0px"
                size="20px"
                class="bg-prime fw-bold button"
                text-color="black"
                label="NEXT"
                @click="
                  submitForm();
                  status();
                "
              />
              <!-- </router-link> -->
            </div>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { db, auth } from "../../../firestore/firestore";
import firebase from "firebase";
const actionCodeSettings = {
  url: "https://router.vuejs.org/guide/advanced/navigation-guards.html",
  handleCodeInApp: true,
};

export default defineComponent({
  name: "LoginPage",
  setup() {
    return {
      isPwd: ref(true),
      myRule(val) {
        // simulating a delay

        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(!!val || "");
          }, 500);
        });
      },
    };
  },

  data() {
    return {
      v$: useVuelidate(),
      name: "a",
      dept: "",
      dept_list: ["EEE", "ECE", "CSE", "CE", "CH", "AD", "BME", "MECH"],
      email: "",
      password: "",
      alert: false,
    };
  },
  validations() {
    return {
      name: { required },
      dept: { required },
      email: { required },
    };
  },

  methods: {
    onItemClick(e) {
      this.dept = e.target.innerHTML;
    },
    submitForm() {
      this.v$.$validate();
      if (this.v$.$error) {
        this.alert = true;
      } else {
        this.alert = false;
      }
    },
    status() {
      console.log(this.email);
      firebase
        .auth()
        .sendSignInLinkToEmail(this.email, actionCodeSettings)
        .then(() => {
          console.log("The link was successfully sent");
          window.localStorage.setItem("emailForSignIn", email);
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          console.log("Not working");
        });
    },
  },
});
</script>

<style scoped>
.my-card {
  width: 100%;
  height: 100%;
  /* max-width: 250px; */
}

.vertical-align {
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-center {
  text-align: center;
}

.button {
  width: 100%;
  display: flex;
  align-items: center;
}

.q-item {
  padding: 0px;
  min-height: 0px;
}
.q-item__label {
  height: 30px;
  padding: 6px;
}

.q-field {
  position: relative;
  font-size: 14px;
  top: -4px;
}
.input {
  width: 100%;
  height: 42px;
}

.text-center {
  text-align: center;
}
</style>

<template>
  <q-layout class="dark-bg">
    <q-page-container>
      <q-page class="ma-y-40 vertical-align">
        <q-card class="my-card semidark-bg br-primary pa-interior">
          <q-card-section class="q-pa-none">
            <div>
              <p
                v-show="this.denied"
                class="text-center text-red-4 font-regular q-mb-md"
              >
                {{ issue }}
              </p>
            </div>
            <p
              class="fw-semibold text-center text-white"
              style="font-size: 30px; top: -10px; position: relative"
            >
              SIGN UP
            </p>
            <p class="font-regular grey-fg text-center q-mt-md">Name</p>
            <div class="q-mt-md">
              <div class="q-px-md grey-bg input br-secondary q-pb-xl">
                <q-input
                  ref="inputRef"
                  :rules="[myRule]"
                  :dense="dense"
                  borderless
                  v-model="name"
                >
                </q-input>
              </div>
            </div>
            <div style="width: 100%; height: 100%" class="flex">
              <div>
                <p
                  class="font-regular grey-fg text-center"
                  style="margin-top: 18px"
                >
                  Roll No
                </p>
                <div class="q-mt-md q-pr-md">
                  <div
                    class="q-px-md grey-bg input br-secondary q-pb-xl center"
                  >
                    <q-input
                      ref="inputRef"
                      :rules="[myRule]"
                      borderless
                      v-model="roll_no"
                      :dense="this.dense"
                      autofocus
                      mask="##AA###"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p
                  class="font-regular grey-fg text-center"
                  style="margin-top: 18px"
                >
                  Section
                </p>
                <div class="q-mt-md q-pr-md">
                  <div
                    class="q-px-md grey-bg input br-secondary q-pb-xl center"
                  >
                    <q-input
                      ref="inputRef"
                      :rules="[myRule]"
                      borderless
                      v-model="section"
                      :dense="this.dense"
                      autofocus
                      mask="A"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex">
              <div class="input-2">
                <p
                  class="font-regular grey-fg text-center"
                  style="margin-top: 18px"
                >
                  Year
                </p>
                <div class="q-mt-md q-pr-md">
                  <div
                    class="q-px-md grey-bg input br-secondary q-pb-xl center"
                  >
                    <q-input
                      ref="inputRef"
                      :rules="[myRule]"
                      borderless
                      v-model="year"
                      :dense="this.dense"
                      autofocus
                      mask="#"
                    />
                  </div>
                </div>
              </div>

              <div class="input-2 q-mb-xl">
                <p
                  class="font-regular grey-fg text-center"
                  style="margin-top: 18px"
                >
                  Dept
                </p>
                <div class="q-mt-md">
                  <q-btn-dropdown
                    padding="6px 0px"
                    size="16px"
                    class="grey-bg button font-semi-medium shadow-6 dept-btn"
                    no-caps
                    :label="this.dept_name_item"
                    icon=""
                    dropdown-icon="none"
                    ref="inputRef"
                    :rules="[myRule]"
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
              </div>
              <div style="width: 100%" class="q-mt-md">
                <p
                  class="font-regular grey-fg text-center"
                  style="margin-top: 18px"
                >
                  Email
                </p>
              </div>
              <div class="q-mt-md q-pr-md">
                <div class="q-px-md grey-bg input br-secondary q-pb-xl center">
                  <q-input
                    ref="inputRef"
                    :rules="[myRule]"
                    borderless
                    v-model="roll_no"
                    :dense="this.dense"
                    autofocus
                    suffix="@kpriet.ac.in"
                    mask="##AA###"
                  />
                </div>
              </div>
            </div>

            <div style="margin-top: 100px" class="q-px-lg">
              <p
                class="text-red-4 q-mt-md q-mb-md text-center"
                style=""
                v-show="alert"
              >
                *All Fields Are Required
              </p>
              <q-btn
                icon="fa-brands fa-google"
                padding="12px 0px"
                size="18px"
                class="bg-prime fw-bold button shadow-6"
                text-color="black"
                label="Sign up"
                @click="sendOTP()"
              />
              <p class="grey-fg text-center font-small q-mt-lg">
                Already have an account?
              </p>
              <q-btn
                icon="fa-brands fa-google"
                padding="12px 0px"
                size="18px"
                class="grey-bg fw-bold button shadow-6 q-mt-md"
                text-color="black"
                label="Sign in"
                @click="SignIn()"
              />
            </div>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

import { db, auth } from "../../../firestore/firestore";
import firebase from "firebase";
import { collection, addDoc } from "firebase/firestore";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

import axios from "axios";

import router from "src/router";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const inputRef = ref(null);
    return {
      inputRef,

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
      dept_name_item: "",
      dept_list: ["EEE", "ECE", "CSE", "CE", "CH", "AD", "BME", "MECH"],
      name: "",
      roll_no: "",
      model: "",
      year: "",
      denied: false,
      dept_name: "",
      alert: false,
      dense: true,
      issue: "",
      section: "",
    };
  },
  validations() {
    return {
      name: { required },
      dept_name_item: { required },
      roll_no: { required },
      section: { required },
      year: { required },
    };
  },
  methods: {
    onItemClick(e) {
      this.dept_name_item = e.target.innerHTML;
    },

    submitForm() {
      this.v$.$validate();
      if (this.v$.$error) {
        this.alert = true;
      } else {
        this.alert = false;
      }
    },

    sendOTP() {
      email = this.roll_no + "@kpriet.ac.in";
      console.log(email);

      this.axios
        .post("http://localhost:8000/yourPostApi", {
          name: this.name,

          email: email,
        })

        .then(function (response) {
          console.log(response.data);
          currentObj.output = response.data;
        })

        .catch(function (error) {
          console.log(error);
          currentObj.output = error;
        });
    },
  },

  beforeUnmount() {
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

.input {
  width: 100%;
  height: 42px;
}

.input-2 {
  width: 50%;
  height: 42px;
}

.q-field {
  position: relative;
  /* top: -4px; */
  font-size: 14px;
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

.dept-btn {
  min-height: 48px !important;
}
</style>

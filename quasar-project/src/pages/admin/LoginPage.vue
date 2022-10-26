<template>
  <q-layout class="dark-bg">
    <q-page-container>
      <q-page class="ma-y-40 vertical-align">
        <q-card class="my-card semidark-bg br-primary pa-interior">
          <q-card-section class="q-pa-none">
            <p class="font-regular text-white text-center">Department</p>
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
              class="font-regular text-white text-center"
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
            <p class="font-regular text-white text-center q-mt-md">Email</p>
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

            <p class="font-regular text-white text-center q-mt-md">
              Set Password
            </p>
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
            </div>

            <div style="margin-top: 46px">
              <router-link to="/staff/signin" style="text-decoration: none">
                <q-btn
                  :disabled="isDisable"
                  padding="8px 0px"
                  size="25px"
                  class="bg-prime fw-bold button"
                  text-color="black"
                  label="NEXT"
                />
              </router-link>
            </div>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

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
      name: "Choose",
      dept: "Choose",
      dept_list: ["EEE", "ECE", "CSE", "CE", "CH", "AD", "BME", "MECH"],
      email: "",
      password: "",
      isDisable: "false",
    };
  },

  methods: {
    onItemClick(e) {
      this.dept = e.target.innerHTML;
    },
    isDisabled() {
      if (
        this.name == "Choose" ||
        this.dept == "Choose" ||
        this.email == "" ||
        this.password == ""
      ) {
        this.isDisable = "false";
      } else {
        this.isDisable = "true";
      }
      return this.isDisable;
    },
  },
});
</script>

<style scoped>
.my-card {
  width: 100%;
  height: 550px;
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

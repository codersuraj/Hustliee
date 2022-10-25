<template>
  <q-layout class="dark-bg">
    <q-page-container>
      <q-page class="ma-y-40 vertical-align">
        <q-card class="my-card semidark-bg br-primary pa-interior">
          <q-card-section class="q-pa-none">
            <p class="font-regular text-white text-center">Name</p>
            <div class="q-mt-md q-px-md">
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
            <p
              class="font-regular text-white text-center"
              style="margin-top: 18px"
            >
              Roll No
            </p>
            <div class="q-mt-md q-px-md">
              <div class="q-px-md grey-bg input br-secondary q-pb-xl center">
                <q-input
                  ref="inputRef"
                  :rules="[myRule]"
                  borderless
                  v-model="rollno"
                  :dense="dense"
                  autofocus
                  mask="#-#-A-A-#-#-#"
                />
              </div>
            </div>
            <div class="flex">
              <div class="input-2">
                <p
                  class="font-regular text-white text-center"
                  style="margin-top: 18px; margin-left: 10px"
                >
                  Year
                </p>
                <div class="q-mt-md q-pl-md q-pr-sm">
                  <div
                    class="q-px-md grey-bg input br-secondary q-pb-xl center"
                  >
                    <q-input
                      ref="inputRef"
                      :rules="[myRule]"
                      borderless
                      v-model="year"
                      :dense="dense"
                      autofocus
                      mask="#"
                    />
                  </div>
                </div>
              </div>

              <div class="input-2">
                <p
                  class="font-regular text-white text-center"
                  style="margin-top: 18px; margin-right: 15px"
                >
                  Dept
                </p>
                <div class="q-mt-md q-px-md">
                  <q-btn-dropdown
                    padding="6px 0px"
                    size="18px"
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
            </div>
            <div style="margin-top: 90px">
              <q-btn
                icon="fa-brands fa-google"
                padding="15px 0px"
                size="18px"
                v-model="otp"
                class="bg-prime fw-bold button"
                text-color="black"
                label="Sign in"
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

export default defineComponent({
  name: "LoginPage",
  setup() {
    const inputRef = ref(null);
    return {
      name: ref(""),
      rollno: ref(""),
      model: ref(""),
      year: ref(""),
      dept_name: ref(""),
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
      dept_name_item: "",
      dept_list: ["EEE", "ECE", "CSE", "CE", "CH", "AD", "BME", "MECH"],
    };
  },
  methods: {
    onItemClick(e) {
      this.dept_name_item = e.target.innerHTML;
    },
  },
});
</script>

<style scoped>
.my-card {
  width: 100%;
  height: 450px;
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
  font-size: 18px;
  top: -4px;
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

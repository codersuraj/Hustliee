<template>
  <div>
    <p class="text-white q-mt-lg">Apply for an OD</p>
    <q-card class="my-card semidark-bg q-mt-md br-primary">
      <q-card-section style="padding: 20px 25px">
        <p class="font-xsm fw-medium text-white text-start">Name</p>
        <div class="q-mt-sm">
          <div class="q-px-md black-r-bg input br-secondary">
            <q-input
              ref="inputRef"
              :rules="[myRule]"
              :dense="dense"
              borderless
              v-model="name"
              readonly
            >
            </q-input>
          </div>
        </div>
        <p class="font-xsm fw-medium text-white text-start q-mt-md">Rollno</p>
        <div class="q-mt-sm">
          <div class="q-px-md black-r-bg input br-secondary">
            <q-input
              ref="inputRef"
              :rules="[myRule]"
              :dense="dense"
              borderless
              v-model="rollno"
              readonly
            >
            </q-input>
          </div>
        </div>
        <p class="font-xsm fw-medium text-white text-start q-mt-md">Class</p>
        <div class="q-mt-sm">
          <div class="q-px-md black-r-bg input br-secondary">
            <q-input
              ref="inputRef"
              :rules="[myRule]"
              :dense="dense"
              borderless
              v-model="this.class"
            >
            </q-input>
          </div>
        </div>
        <div class="q-pa-md">
          <div class="q-gutter-y-md" style="max-width: 350px">
            <q-option-group
              v-model="panel"
              inline
              class="text-white"
              color="orange-5"
              :options="[
                { label: 'Less than 1 Day', value: 'less_than' },
                { label: '> 1 Day', value: 'greater_than' },
              ]"
            />

            <q-tab-panels
              v-model="panel"
              animated
              class="shadow-2 rounded-borders"
              swipeable
              style="background-color: transparent"
            >
              <q-tab-panel
                name="less_than"
                class="semidark-bg"
                style="overflow-y: hidden"
              >
                <p class="font-xsm fw-medium text-white text-start q-mt-md">
                  Period/Hr
                </p>
                <div class="q-mt-sm">
                  <div class="black-r-bg input br-secondary">
                    <q-input
                      ref="inputRef"
                      :rules="[myRule]"
                      :dense="dense"
                      borderless
                      v-model="this.period"
                      class="q-ml-md"
                    >
                    </q-input>
                  </div>
                </div>
              </q-tab-panel>

              <q-tab-panel name="greater_than">
                <div class="q-pa-md">
                  <q-input
                    filled
                    v-model="qdate.to"
                    class="black-r-bg br-secondary"
                  >
                    <template v-slot:prepend>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                          cover
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <div class="q-pa-md" style="text-align: center">
                            <div class="q-pb-sm">Model: {{ qdate }}</div>

                            <q-date
                              v-model="qdate"
                              range
                              dark
                              color="orange-5"
                            />
                          </div>
                        </q-popup-proxy>
                      </q-icon>
                      <p
                        class="q-ml-md font-small text-white"
                        style="margin-top: 1px"
                      >
                        Till
                      </p>
                    </template>
                  </q-input>
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </div>
        </div>
        <p class="font-xsm fw-medium text-white text-start q-mt-md">Purpose</p>
        <div class="q-mt-sm">
          <div class="q-px-md black-r-bg input br-secondary">
            <q-input
              ref="inputRef"
              :rules="[myRule]"
              :dense="dense"
              borderless
              v-model="this.purpose"
            >
            </q-input>
          </div>
        </div>
        <p class="font-xsm fw-medium text-white text-start q-mt-md">Mentor</p>
        <div class="q-mt-md">
          <q-btn-dropdown
            padding="0px 0px"
            size="18px"
            class="black-r-bg button font-semi-medium text-white dept-btn"
            no-caps
            :label="this.mentor"
            icon=""
            dropdown-icon="none"
            ref="inputRef"
            :rules="[myRule]"
            style="padding-inline: auto"
          >
            <q-list separator class="br-primary">
              <q-item
                clickable
                v-close-popup
                @click="onItemClick"
                class="button"
                v-for="item in faculty_list"
                :key="item"
              >
                <q-item-section>
                  <q-item-label>{{ item }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
        <p class="font-xsm fw-medium text-white text-start q-mt-md">
          Chief Mentor
        </p>
        <div class="q-mt-md">
          <q-btn-dropdown
            padding="0px 0px"
            size="18px"
            class="black-r-bg button font-semi-medium text-white dept-btn"
            no-caps
            :label="this.chief_mentor"
            icon=""
            dropdown-icon="none"
            ref="inputRef"
            :rules="[myRule]"
            style="padding-inline: auto"
          >
            <q-list separator class="br-primary">
              <q-item
                clickable
                v-close-popup
                @click="onItemClick"
                class="button"
                v-for="item in faculty_list"
                :key="item"
              >
                <q-item-section>
                  <q-item-label>{{ item }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
        <q-btn
          padding="5px 29px"
          size="12px"
          v-model="otp"
          class="box-shadow bg-prime fw-medium br-primary"
          style="margin-top: 35px"
          text-color="black"
          label="Accept"
          no-caps
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { format } from "date-fns";

export default {
  data() {
    return {
      class: "",
      period: "",
      purpose: "",
      mentor: "",
      chief_mentor: "",
      faculty_list: ["EEE", "ECE", "CSE", "CE", "CH", "AD", "BME", "MECH"],
    };
  },
  setup() {
    const inputRef = ref(null);
    return {
      name: ref("Hariharan C"),
      rollno: ref("21EE038"),
      model: ref(""),
      year: ref(""),
      dept_name: ref(""),
      inputRef,
      panel: ref("less_than"),
      date: ref(1666682832151),
      qdate: ref({ from: "2022/07/08", to: "2022/07/17" }),
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
  computed: {
    formatDate(v) {
      return (v) => {
        return format(v, new Date());
      };
    },
  },
  methods: {
    onItemClick(e) {
      this.mentor = e.target.innerHTML;
    },
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  height: 30px;
}

:deep(.q-field__native) {
  line-height: normal;
  height: fit-content;
  color: white;
}

:deep(.q-field__append) {
  height: 30px;
}

:deep(.q-field--filled .q-field__control) {
  height: 30px;
}

:deep(.q-field__prepend) {
  height: 30px;
}

.button {
  width: 100%;
  min-height: 0px;
  padding: 0px;
}
.q-item__label {
  height: 30px;
  padding: 6px;
}

/* .dept-btn {
  min-height: 48px !important;
} */
</style>

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
              borderless
              v-model="data.name"
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
              borderless
              v-model="data.roll_no"
              readonly
            >
            </q-input>
          </div>
        </div>
        <p class="font-xsm fw-medium text-white text-start q-mt-md">Class</p>
        <div class="q-mt-sm">
          <div class="q-px-md black-r-bg input br-secondary">
            <q-input
              :rules="[myRule]"
              borderless
              v-model="section"
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
          <div class="q-px-md black-r-bg br-secondary q-mt-md">
            <q-input
              ref="inputRef"
              :rules="[myRule]"
              borderless
              autogrow
              v-model="this.purpose"
            >
            </q-input>
          </div>
        </div>
        <p class="font-xsm fw-medium text-white text-start q-mt-md">Mentor</p>
        <div class="q-mt-md">
          <q-btn-dropdown
            padding="4px 0px"
            size="14px"
            class="black-r-bg button fw-xsm text-white dept-btn"
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
                @click="mentorClick"
                class="button"
                v-for="item in faculty_list"
                :key="item"
              >
                <q-item-section class="fw-xsm">
                  <q-item-label>{{ item.name }}</q-item-label>
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
            padding="4px 0px"
            size="14px"
            class="black-r-bg button text-white dept-btn"
            no-caps
            :label="this.chiefMentor"
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
                @click="chiefMentorClick"
                class="button"
                v-for="item in faculty_list"
                :key="item"
              >
                <q-item-section>
                  <q-item-label>{{ item.name }}</q-item-label>
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
import {db, auth } from "../../../firestore/firestore";
import { ref } from "vue";
import firebase from "firebase";
import { format } from "date-fns";

export default {
  data() {
    return {
      name: "",
      rollno: "",
      data: "",
      section: "",
      expiresIn:null,
      chief_mentor: "",
      faculty_list: [],
      mentor: "",
      chiefMentor:"",
    };
  },
  setup() {
    const inputRef = ref(null);
    return {
      model: ref(""),
      year: ref(""),
      dept_name: ref(""),
      inputRef,
      panel: ref("less_than"),
      date: ref(Date.now()),
      qdate: ref({ from: "", to: "" }),
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
  watch: {
    qdate(newDate, oldDate) {
      if (newDate) {
        this.Dateformat(newDate)
      } else {
        this.Dateformat(oldDate)
      }
    },

  },
  methods: {
    mentorClick(e) {
      this.mentor = e.target.innerHTML;
    },
    chiefMentorClick(e) {
      this.chiefMentor = e.target.innerHTML;
    },
    async getUserData() {
      var docRef = db.collection("students").doc(firebase.auth().currentUser.uid);

      await docRef.get().then((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            this.data = doc.data()
            this.section = this.data.dept + "-" + this.data.section
            console.log(this.data);
              this.getMentors()
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });
    },
    Dateformat(date) {
      console.log(date.to);
      let Todate = date.to
      const mydate = Todate.split("/");
      let newDate = `${mydate[0]}-${mydate[1]}-${mydate[2]} 0:0:0.0`
      var millis = Date.parse(newDate);
      this.expiresIn = millis - Date.now()
      console.log(this.expiresIn);
      if (this.expiresIn < 0) {
        
      }
      setTimeout(this.odExpired(), this.expiresIn);
      

    },
    getMentors() {
      this.faculty_list = []
      db.collection("staffs").where("dept", "==", "EEE")
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            var mentor = { id: doc.id, name: doc.data().name }
          
          this.faculty_list.push(mentor);
          
          });
        console.log(this.faculty_list);
    });
    }
  },
  mounted: function mounted() {
    
      if(this.data != "") {
        
    }
  },
  beforeMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        console.log(user.displayName != null);
        if (user.displayName == null) {
          this.getUserData()
          console.log("st home");
          this.$router.push("/user/home")
        } else {
          this.$router.push("/staff/home")
        }
          
      } else {
        // No user is signed in.
        this.$router.push("/")
        console.log("signout");
      }
    });
  }
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

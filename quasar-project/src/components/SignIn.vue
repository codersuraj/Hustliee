<template>
  <div>
    <div>
      <p
        v-show="this.denied"
        class="text-center text-red-4 font-regular q-mb-md"
      >
        {{ issue }}
      </p>
    </div>

    <q-card class="my-card semidark-bg br-primary pa-interior">
      <q-card-section class="q-pa-none">
        <div v-if="show">
          <p
            class="font-regular text-white text-center"
            style="margin-top: 18px"
          >
            Name
          </p>
          <div class="q-mt-md q-px-md q-mb-lg">
            <div class="q-px-md grey-bg input br-secondary q-pb-xl center">
              <q-input borderless v-model="name" autofocus />
            </div>
          </div>
          <p class="font-regular text-white text-center">Email</p>
          <div class="q-mt-md q-px-md">
            <div class="q-px-md grey-bg input br-secondary q-pb-xl">
              <q-input
                borderless
                suffix="@kpriet.ac.in"
                v-model="email"
                autofocus
                mask="##aa###"
              >
              </q-input>
            </div>
          </div>
        </div>
        <div v-else>
          <p class="font-regular text-white text-center" style="margin-top: ">
            Enter OTP
          </p>
          <div class="q-mt-md q-px-md">
            <div class="q-px-md grey-bg input br-secondary q-pb-xl center">
              <q-input borderless v-model="otp" autofocus mask="#-#-#-#-#-#" />
            </div>
          </div>
        </div>
        <div style="margin-top: 46px">
          <q-btn
            padding="8px 0px"
            size="25px"
            v-model="otp"
            class="bg-prime fw-bold button"
            text-color="black"
            :label="buttonText"
            @click="submitForm()"
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import axios from "axios";
export default {
  name: "SignIn",
  props: ["authorized"],
  setup() {
    const $store = useStore();

    // console.log($store.state.verfied);

    return {};
  },
  data() {
    return {
      //   v$: useVuelidate(),
      name: "",
      email: "",
      otp: "",
      buttonText: "Send OTP",
      issue: "",
      denied: false,
      show: true,
      data: "",
    };
  },

  methods: {
    submitForm() {
      if (this.name == "" || this.name.length < 4) {
        this.denied = true;
        this.issue = "Enter your name";
      } else if (this.email == "" || this.email.length < 7) {
        this.denied = true;
        this.issue = "Enter your email";
      } else {
        this.denied = false;

        if (this.buttonText == "Send OTP") {
          this.$emit("clicked", this.email + "@kpriet.ac.in");
          if (this.authorized != true) {
            console.log(this.authorized);
            this.denied = true;
            this.show = true;
            this.issue = "You are not Authorized!";
          } else {
            console.log(this.authorized);
            this.show = false;
            this.sendOTP();
          }
        } else if (this.buttonText == "SIGN IN") {
        }
      }
    },
    sendOTP() {
      this.email = this.email + "@kpriet.ac.in";
      console.log("sendotp", this.email);
      this.buttonText = "SIGN IN";
      axios
        .post(
          "http://localhost:3000/sendotp",
          {
            name: this.name,
            email: this.email.toLowerCase(),
          },
          { headers: { "Content-Type": "application/json" } }
        )

        .then((response) => {
          console.log(response.data);
          this.buttonText = "SIGN IN";
          // this.output = response.data;
        })

        .catch((error) => {
          console.log(error.response.data);
          if (Object.keys(error.response.data).length <= 2) {
            this.denied = true;
            // this.issue = error.response.data.error;
          }

          // currentObj.output = error;
        });
    },
  },
  verifyOTP() {
    this.email = this.email + "@kpriet.ac.in";
    console.log(this.email);
    axios
      .post(
        "http://localhost:3000/verifyotp",
        {
          email: this.email.toLowerCase(),
          otp: this.otp,
        },
        { headers: { "Content-Type": "application/json" } }
      )

      .then((response) => {
        console.log(response.data);
        this.output = response.data;
      })

      .catch((error) => {
        console.log(error.response.data);
        if (Object.keys(error.response.data).length <= 2) {
          this.denied = true;
          this.issue = error.response.data.error;
        }

        // currentObj.output = error;
      });
  },
};
</script>

<style scoped>
.my-card {
  width: 100%;
  min-height: 200px;
  height: 100%;
  max-height: 420px;
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

.q-field {
  position: relative;
  font-size: 18px;
  top: -4px;
}
</style>

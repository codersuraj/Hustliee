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
        <p class="font-regular text-white text-center" style="margin-top: ">
          Enter OTP
        </p>
        <div class="q-mt-md q-px-md">
          <div class="q-px-md grey-bg input br-secondary q-pb-xl center">
            <q-input borderless v-model="otp" autofocus  />
          </div>
        </div>
        <div style="margin-top: 46px">
          <q-btn
            padding="8px 0px"
            size="25px"
            class="bg-prime fw-bold button"
            text-color="black"
            label="Verify OTP"
            @click="submitForm()"
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { db, auth } from "../../firestore/firestore";

import axios from "axios";
export default {
  name: "SignIn",
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
      //   v$: useVuelidate(),
      name: "",
      otp: "",
      issue: "",
      denied: false,
      show: true,
      formatEmail: "",
      password: "12345678",
      formatOtp: "",
      // obj: {email: "", otp:""}
    };
  },

  methods: {
    submitForm() {
      if ((this.otp == "" || this.otp.length < 6)) {
        this.denied = true;
        this.issue = "Invalid OTP";
      } else {
        this.denied = false;
        console.log(this.otp);
        this.verifyOTP();
      }
    },

    verifyOTP() {
      console.log(this.data);
      this.formatEmail = this.data.email;
      console.log(this.formatEmail.toLowerCase());
      // this.formatOtp = this.otp.toString()
      // if (typeof this.formatEmail === 'string') {
      //   console.log(this.otp);
      //   console.log("yeah");
      // }

      axios
        .post(
          "http://localhost:3000/verify",
          {
            email: this.data.email,
            otp: this.otp,
          },
          { headers: { "Content-Type": "application/json" } }
        )

        .then((response) => {
          console.log(response.data);
          this.CreateAccount(this.data.email, this.password)
          // this.$router.push("/user/home");
          // this.output = response.data;
        })
        .catch((error) => {
          // this.$router.push("/");
          console.log(error.response.data);
          if (Object.keys(error.response.data).length <= 2) {
            this.denied = true;
            this.issue = error.response.data.error;
          }

          // currentObj.output = error;
        });
    },
    async signIn(email, password) {
       await auth.signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
          // Signed in
          console.log("inside");
          var user = userCredential.user;
          // ...
          })
            .catch((error) => {
              console.log("outside");
            console.log(error);
            var errorCode = error.code;
            var errorMessage = error.message;
          });
    },
    async CreateAccount(email, password) {
     await  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      console.log(userCredential);
      var user = userCredential.user;
      // ...
    })
       .catch((error) => {
         console.log(error);

         console.log(error.code);
         if (error.code == "auth/email-already-in-use") {
            this.signIn(this.data.email, this.password)
      }
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
    }
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

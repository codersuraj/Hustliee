<template>
  <div class="dark-bg page q-px-lg">
    <SignIn @clicked="emailVerify" :authorized="verified" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import SignIn from "../../components/SignIn.vue";
import firebase from "firebase";
// import { db, auth } from "firebase/firestore";
import { collection, query, where } from "firebase/firestore";

export default defineComponent({
  name: "LoginPage",
  components: { SignIn },
  setup() {
    return {
      isPwd: ref(true),
      otp: ref(null),
    };
  },
  data() {
    return {
      verified: false,
    };
  },

  methods: {
    onItemClick(e) {
      this.dept = e.target.innerHTML;
    },
    async emailVerify(email) {
      const db = firebase.firestore();
      db.collection("staffs")
        .where("email", "==", email)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            console.log("hello", email, this.verified);
            this.verified = true;
            console.log("hello", this.verified);
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
  },
});
</script>

<style scoped>
.page {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

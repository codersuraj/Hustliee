<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import { db, auth } from "../firestore/firestore";

export default defineComponent({
  name: "App",
  beforeMount() {
    if (auth.currentUser) {
      this.$router.push("/");
    } else {
      this.$router.push("/user/home");
    }
  },
});
</script>

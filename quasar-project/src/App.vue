<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import router from "src/router";
import { db, auth } from "../firestore/firestore";


export default defineComponent({
  name: "App",

});
</script>

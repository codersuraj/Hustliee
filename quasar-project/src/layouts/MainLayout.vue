<template>
  <div class="page" style="padding:25px">
    <div class="navbar">
      <div class="logout-bar flex">
        <q-btn round>
          <q-avatar size="38px">
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
          </q-btn>
          <q-space/>
          <q-btn>
          <div class="flex column">
              <span class="ham"></span>
              <span class="ham1"></span>
            </div>
              <q-badge rounded class="bg-prime" />
              </q-btn>
      </div>
      <div class="namebar" >
        <h1 class="text-white font-xxl title-text q-mt-lg">Hello,<span class="fg-prime fw-semibold"> Hari!</span></h1>
        <p class="text-white font-xsm">Have a wonderful day!</p>
      </div>
    </div>

      <div class="space">
        <router-view/>
      </div>
    <q-tabs
        v-model="tab"
        align="justify"
        narrow-indicator
        class="q-mb-md vertical-bottom"
        vertical-bottom
        
      >
        <q-tab name="alarms" tabindex="0"  ><img src="../assets/diagram.svg" :class="{active : this.tab == 'alarms'}"></q-tab>
        <q-tab name="movies" tabindex="1" ><img src="../assets/home.svg" :class="{svg ,active : this.tab == 'movies'}" ></q-tab>
        <q-tab name="mails" tabindex="2"><img src="../assets/setting.svg" :class="{svg ,active : this.tab == 'mails'}" ></q-tab>
      </q-tabs>
  </div>

</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      tab: ref('mails'),

    }
  },

}
</script>

<style scoped>

.title-text{
  line-height: 1.5;
  letter-spacing: normal;

}
.navbar{
  height: 130px;
}

.logout-bar{
  height: 45px;
}
.namebar{
  height: 65px;
}

.space{
  height: 100%;
  width: 100%;
}

.lines{
  width: 50px;
  height: 100%;
}
:deep(.q-tab__indicator) {
    height: 4px !important;
    width: 25px;
    margin-inline: auto;
    background-color: #52D371;
    border-radius: 10px 10px 0 0;
}

.footer-tab{
  position: relative;
  bottom: 0px;
}

.q-btn{
  padding: 0px !important;
  display: block;
  top: 5px;
}

.active{
  transition: transform 0.3s all;
  width: 40px;
  position: relative;
  bottom: 5px;
  transition: transform 1s all;
}

.ham{
  position: relative;
  top: 0;
  right: 0px;
  height: 4px;
  width: 30px;
  background-color: white;
}

.ham1{
  position: relative;
  top: 6px;
  left: 10px;
  right: 0px;
  height: 4px;
  width: 20px;
  background-color: white;
}



.page{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color:  black;
}


</style>

<template>
  <div class="q-pa-md page">
    <div >

      <div class="q-gutter-y-sm">
        <router-view/>
      </div>
    </div>
    <q-tabs
        v-model="tab"
        align="justify"
        narrow-indicator
        class="q-mb-lg vertical-bottom"
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



.active{
  transition: transform 0.3s all;
  width: 40px;
  position: relative;
  bottom: 5px;
  transition: transform 1s all;
}



.page{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color:  black;
}


</style>

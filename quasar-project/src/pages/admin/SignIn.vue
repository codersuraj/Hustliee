<template>
<q-layout class="dark-bg">
  <q-page-container>
    <q-page  class="ma-y-40  vertical-align" >
      <q-card class="my-card semidark-bg br-primary pa-interior">
      <q-card-section class=" q-pa-none">
        <p class="font-regular text-white text-center ">Set Password</p>
        <div class="q-mt-md q-px-md ">
          <div class="q-px-md grey-bg input br-secondary q-pb-xl" >
                <q-input  borderless v-model="text" :dense="dense" autofocus  type="password" fill-mask="*" unmasked-value="true"/>
          </div>
          </div>
        <p class="font-regular text-white text-center"  style="margin-top:18px;" >Enter OTP</p>
         <div class="q-mt-md q-px-md ">
          <div class="q-px-md grey-bg input br-secondary q-pb-xl" >
                <q-input borderless v-model="text" :dense="dense" autofocus  type="password" fill-mask="*" unmasked-value="true"/>
          </div>
          </div>
          <div style="margin-top:46px;">
            <q-btn padding="8px 0px" size="25px" class="bg-prime fw-bold button"  text-color="black" label="SIGN IN" />
          </div>

      </q-card-section>
    </q-card>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>


import { defineComponent } from 'vue'



export default defineComponent({
  name: 'LoginPage',
  data() {
    return {

    }
  },

  methods :{
    onItemClick(e) {
          this.dept = e.target.innerHTML
      }
  }


})
</script>


<style scoped>

.my-card{
  width: 100%;
  height: 353px;
  /* max-width: 250px; */
}

.vertical-align{
  display: flex;
  align-items: center;
  justify-content: center;
}


.text-center{
  text-align: center;
}

.button{
  width: 100%;
  display: flex;
  align-items: center;

}

.input{
  width: 100%;
  height: 42px;
}

</style>

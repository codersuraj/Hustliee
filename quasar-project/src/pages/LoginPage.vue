<template>
<q-layout class="dark-bg">
  <q-page-container>
    <q-page  class="ma-y-40  vertical-align" >
      <q-card class="my-card semidark-bg br-primary pa-interior">
      <q-card-section class=" q-pa-none">
        <p class="font-regular text-white text-center">Department</p>
          <div class="q-mt-md">
            <q-btn-dropdown padding="6px 0px" size="18px" class="grey-bg button font-semi-medium shadow-6 " no-caps  align="center" label="Choose" icon="" dropdown-icon='none'>
              <q-list separator bordered class="br-primary">
                <q-item clickable v-close-popup @click="onItemClick" class="button">
                  <q-item-section>
                    <q-item-label>Photos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Videos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Articles</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        <p class="font-regular text-white text-center" style="margin-top:18px;" >Name</p>
          <div class="q-mt-md ">
            <q-btn-dropdown padding="6px 0px" size="18px" class="grey-bg button font-semi-medium shadow-6" no-caps  align="center" label="Choose" icon="" dropdown-icon='none' >
              <q-list separator bordered class="br-primary">
                <q-item clickable v-close-popup @click="onItemClick" class="button">
                  <q-item-section>
                    <q-item-label>Photos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Videos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Articles</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <div style="margin-top:46px;">
            <q-btn padding="8px 0px" size="25px" class="bg-prime fw-bold button"  text-color="black" label="NEXT" />
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
  setup () {
    return {
      onItemClick () {
        // console.log('Clicked on an Item')
      }
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



</style>

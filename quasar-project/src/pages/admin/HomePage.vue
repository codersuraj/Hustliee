<template>
  <div class="home">
      <OverallStatus/>
       <div class="q-gutter-y-md q-mt-md">
      <q-card>
        <q-tabs
          v-model="option"
          align="justify"
          indicator-color="transparent"
        >
          <q-tab name="all" label="All" no-caps class="fw-semibold" indicator-color="transparent" :class="{all : option=='all'}"/>
          <q-tab name="accepted" label="Accepted" no-caps :class="{accepted : option=='accepted'}"/>
          <q-tab name="pending" label="Pending" no-caps :class="{pending : option=='pending'}"/>
          <q-tab name="rejected" label="Rejected" no-caps :class="{rejected : option=='rejected'}"/>
        </q-tabs>

        <q-separator />
        <div class="q-mt-lg semidark-bg scroll" style=" border-radius: 5px;">
        <q-tab-panels v-model="option" animated class="br-secondary" swipeable>
          <q-tab-panel name="all" class="text-white semidark-bg" style="padding:20px 20px 0 20px" >
            <div class="black-r-bg br-secondary q-mb-md" style="padding-block:20px; padding-inline:25px;" v-for="item in all" :key="item">
              <p style="text-align: end;" class="font-xsm q-mb-sm">{{ relaticeDate(item.date)}}</p>
              <div class="">
                <div class="flex q-mb-sm">
                  <div class="name-holder">
                    <p class="font-xsm">Name-</p>
                  </div>
                  <p class="fw-semibold t-shadow font-small" >{{item.name}}</p>
                </div>
                <div class="flex q-mb-sm">
                  <div class="name-holder">
                    <p class="font-xsm">Class-</p>
                  </div>
                  <p class="fw-semibold t-shadow font-small">{{item.class}}</p>
                </div>
                <div class="flex q-mb-sm">
                  <div class="name-holder">
                    <p class="font-xsm">Rollno-</p>
                  </div>
                  <p class="fw-semibold t-shadow font-small">{{item.rollno}}</p>
                </div>
                <div class="flex q-mb-sm">
                  <div class="name-holder">
                    <p class="font-xsm">Period/Hr-</p>
                  </div>
                  <p class="fw-semibold t-shadow font-small">{{item.period}}</p>

                </div>   
                <div class="flex q-mb-sm">
                  <div class="name-holder">
                    <p class="font-xsm">Purpose-</p>
                  </div>
                  <p class="fw-semibold t-shadow font-small">{{item.purpose}}</p>
                </div> 
                <div class="flex justify-between q-mt-lg">
                   <q-btn padding="5px 32px" size="12px" v-model="otp"  class="box-shadow bg-secon black-r-fg fw-medium button br-primary" text-color="black" label="Accept" no-caps/>
                  <q-btn padding="5px 32px" size="12px" v-model="otp" class="box-shadow bg-red black-r-fg fw-medium button br-primary" text-color="black" label="Reject" no-caps />
                </div>                                                            
              </div>
            </div>
                       
          </q-tab-panel>
        

          <q-tab-panel name="accepted" class="text-white semidark-bg" style="padding:20px 20px 0 20px" >
            <div 
            class="q-px-lg q-py-md br-secondary q-mb-md" 
            style="background: linear-gradient(180deg, #52D371 0%, rgba(82, 211, 113, 0.65) 100%);"
            v-for="item in accepted" :key="item"
            >
              <p style="text-align: end;" class="font-xsm black-r-fg">{{relaticeDate(item.date)}}</p>
              <div class="">
                <div class="flex q-mb-sm">
                  <div class="name-holder">
                    <p class="black-r-fg font-xsm">Name-</p>
                  </div>
                  <p class="fw-semibold t-shadow dark-fg font-small">{{item.name}}</p>
                </div>
                <div class="flex q-mb-sm">
                  <div class="name-holder">
                    <p class="black-r-fg font-xsm">Class-</p>
                  </div>
                  <p class="fw-semibold t-shadow dark-fg font-small">{{item.class}}</p>
                </div>
                <div class="flex q-mb-sm">
                  <div class="name-holder">
                    <p class="black-r-fg font-xsm">Rollno-</p>
                  </div>
                  <p class="fw-semibold t-shadow dark-fg font-small">{{item.rollno}}</p>
                </div>
                <div class="flex q-mb-sm">
                  <div class="name-holder">
                    <p class="black-r-fg font-xsm">Period/Hr-</p>
                  </div>
                  <p class="fw-semibold t-shadow dark-fg font-small">{{item.period}}</p>

                </div>   
                <div class="flex q-mb-sm">
                  <div class="name-holder">
                    <p class="black-r-fg font-xsm">Purpose-</p>
                  </div>
                  <p class="fw-semibold t-shadow dark-fg font-small">{{item.purpose}}</p>

                </div>                                                             
              </div>
            </div>
            
          </q-tab-panel>

          <q-tab-panel name="pending">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="rejected">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
        </div>
      </q-card>

    </div>
  </div>
</template>

<script>

import OverallStatus from "../../components/OverallStatus.vue"
import { ref } from 'vue'
import { formatDistance } from 'date-fns'

export default {
  components: { OverallStatus },
  data() {
    return {
      all: [
        {
          name: 'Hariharan C',
          class: 'EEE-A',
          rollno: '21EE038',
          period: '2nd to 3rd',
          purpose: 'Placement training',
          date:1666615858736
        },
        {
          name: 'Pavan S',
          class: 'ECE-A',
          rollno: '21EC078',
          period: '2nd to 3rd',
          purpose: 'Placement training',
          date:1666615858736
        }        
      ],
      accepted: [
        {
          name: 'Hariharan C',
          class: 'EEE-A',
          rollno: '21EE038',
          period: '2nd to 3rd',
          purpose: 'Placement training',
          date:1666615858736
        },
                {
          name: 'Pavan S',
          class: 'ECE-A',
          rollno: '21EC078',
          period: '2nd to 3rd',
          purpose: 'Placement training',
          date:1666615858736
        }   
      ]
    }
  },
  setup () {
    return {
      option: ref('all')
    }
  },
  computed:{
      relaticeDate(v){
        return (v)=>{
          return formatDistance(v, new Date(), { addSuffix: true })
          }
        }
  }
}
</script>

<style scoped>

.home{
  height: inherit;
  width: 100%;
}


:deep(.q-tab__label,){
  color: #ffffff;
  font-weight: 600;
  padding-inline: 9px;
  border-radius: 10px;
}

.all :deep(.q-tab__label){
  background-color: #40464A;
}   

.accepted :deep(.q-tab__label){
  background-color: #52D371;
  color: #2A2E31;
}  

.pending :deep(.q-tab__label){
  background-color: #FFA44F;
  color: #2A2E31;
}  

.rejected :deep(.q-tab__label){ 
  background-color: #FF4B4B;
  color: #2A2E31;
}  

.q-tab{
  padding: 0 0px;
}
.q-tabs__content--align-justify .q-tab {
    flex:none;
}
:deep(.q-tab__content){
  padding: 0 3px;
}

.q-card{
  background:transparent ;
}
:deep(.q-tabs__content){
  justify-content: center;
}

.q-tab-panels {
    background: none;
}

.name-holder{
  width: 80px;
  height: fit-content;
}

.panel-color{
  background-color: #2A2E31;
}

.t-shadow{
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.scroll{
  overflow-y: scroll;
}

</style>
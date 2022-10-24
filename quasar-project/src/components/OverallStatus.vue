<template>
  <div class="box semidark-bg br-secondary q-mt-md text-white">
    <h2 class="font-medium " style="text-align:center; line-height: 3.2rem;">Overall status</h2>
    <div class="flex justify-evenly q-mb-md">
      <div>
        <div>
          <p class="font-small" style="text-align:center;" >Total</p>
        </div>
        <div class="card br-secondary dark-bg">
          <p class="font-medium fw-semibold">10</p>
        </div>
      </div>
      <div>
        <div>
          <p class="font-small" style="text-align:center;">Accepted</p>
        </div>
        <div class="card br-secondary bg-secon">
          <p class="font-medium fw-semibold">10</p>
        </div>
      </div>
      <div>
        <div>
          <p class="font-small" style="text-align:center;">Pending</p>
        </div>
        <div class="card br-secondary bg-prime">
          <p class="font-medium fw-semibold">10</p>
        </div>
      </div>
      <div>
        <div>
          <p class="font-small" style="text-align:center;">Rejected</p>
        </div>
        <div class="card br-secondary bg-red">
          <p class="font-medium fw-semibold">10</p>
        </div>
      </div>
  
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.box{
  height: 150px;
  width: 100%;
}

.card{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  width: 50px;
  margin: 10px auto auto auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

</style>
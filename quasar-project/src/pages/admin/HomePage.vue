<template>
  <div class="home">
      <OverallStatus/>
  </div>
</template>

<script>

import OverallStatus from "../../components/OverallStatus.vue"

export default {
  components: { OverallStatus },
}
</script>

<style scoped>

.home{
  height: inherit;
  width: 100%;
}

</style>
<template>
  <div>
    <div class="row justify-content-center p-4 d-none d-lg-block">
      <div class="col-12 text-center">
        <h2 class="display-3 font-weight-bold">{{ header }}</h2>
        <p class="body">{{ body }}</p>
      </div>
    </div>
    <div class="row justify-content-center pt-4 pt-lg-4 d-block d-lg-none">
      <div class="col-11 text-center ">
        <h2 class="display-4 font-weight-bold">{{ header }}</h2>
        <p class="body-mobile">{{ body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextBox',
  props: ['header', 'body'],
};
</script>

<style scoped>

.body {
  font-size: 2rem;
}

.body-mobile {
  font-size: x-large;
}
</style>

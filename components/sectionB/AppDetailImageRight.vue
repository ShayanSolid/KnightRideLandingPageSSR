<template>
  <div class="row pt-5 pb-5">

    <div class="col-lg-5 pb-sm-5 pt-sm-5 my-auto mx-auto auto d-none d-lg-block">
      <h2 class="text-body p-2 pb-4"> {{ header }}</h2>
      <h4 class="text-body p-1"> {{ body }}</h4>
    </div>

    <div class="col-lg-5 col-sm-8 my-auto mx-auto">
      <picture>
        <source :srcset="require(`@/assets/${imageName}.webp`)"
                type="image/webp">
        <source :srcset="require(`@/assets/${imageName}.png`)"
                type="image/png">
        <img :id='id' :src="require(`@/assets/${imageName}.png`)"
             class="img-fluid" :alt='id'>
      </picture>
    </div>

    <div class="col-lg-5 pb-sm-5 pt-sm-5 my-auto mx-auto d-block d-lg-none">
      <h2 class="text-body p-2 pb-4"> {{ header }}</h2>
      <h4 class="text-body p-1"> {{ body }}</h4>
    </div>
  </div>


</template>

<script>
export default {
  name: 'AppDetailImageRight',
  props: ['header', 'body', 'imageName', 'id'],
};
</script>

<style scoped>
 {

}
</style>

<template>
  <div>
    <div class="row justify-content-center p-4 d-none d-lg-block">
      <div class="row justify-content-center ">
        <div class="col-lg-9 text-left">
          <h4 class="display-1 font-weight-bold">{{ $t('sectionC.knight.name') }}</h4>
          <p class="body">{{ $t('sectionC.knight.description') }}</p>
        </div>
      </div>

      <div class="row justify-content-center pt-4 pt-lg-4">
        <div class="col-lg-9 text-left">
          <h2 class="display-1 font-weight-bold">{{ $t('sectionC.rider.name') }}</h2>
          <p class="body">{{ $t('sectionC.rider.description') }} </p>
        </div>
      </div>
    </div>


    <div class="row justify-content-center pt-4 pt-lg-4 d-block d-lg-none">
      <div class="col-lg-9 text-left">
        <h4 class="display-3 font-weight-bold">{{ $t('sectionC.knight.name') }}</h4>
        <p class="body-mobile">{{ $t('sectionC.knight.description') }}</p>
      </div>

      <div class="col-9 text-left">
        <h2 class="display-3 font-weight-bold">{{ $t('sectionC.rider.name') }}</h2>
        <p class="body-mobile">{{ $t('sectionC.rider.description') }} </p>
      </div>
    </div>

    <DownloadButton/>

  </div>
</template>

<script>


export default {
  name: 'SectionC',
  data () {
    return {}
  },
}
</script>

<style scoped>
.body {
  font-size: 2rem;
}

.body-mobile {
  font-size: x-large;
}

</style>

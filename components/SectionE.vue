<template>
  <div class="container pt-5">

    <div class="row">

      <div class="w-75 col-lg-5 pt-sm-5 float-lg-left justify-content-lg-center">
        <h1 id="header" class="text-white"> {{ $t('sectionE.header') }}</h1>
      </div>
      <div class="col-lg-5 pt-sm-5 float-lg-left justify-content-lg-center">
        <h1 id="header-small" class="text-white"> {{ $t('sectionE.header_small') }} </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionE',
}
</script>

<style scoped>
#header {
  font-size: 7vh;
  font-weight: bold;
  text-align: left;
}

#header-small {
  display: none;
}

@media only screen and (max-width: 600px) {
  #header-small {
    display: block;
    font-size: 7vh;
    font-weight: bold;
    text-align: left;
  }

  #header {
    display: none;
  }
}
</style>

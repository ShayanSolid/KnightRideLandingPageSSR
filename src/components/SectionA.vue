<template>
  <div class="container pt-3">

    <div class="row">
      <div class="col-lg-5  pt-4 my-auto mx-auto">
        <picture>
          <source srcset="~/assets/logo-head-text.webp"
                  type="image/webp">
          <source srcset="~/assets/logo-head-text.png"
                  type="image/png">
          <img id="knightride-logo-type" class="img-fluid pb-4"
               src="~/assets/logo-head-text.png"
             alt="knightride-logo-type">
        </picture>
        <h3 class="text-body pb-4 text-left"> {{ $t('sectionA.short_description') }}</h3>

        <div class="container-fluid align-content-end">
          <DownloadIcons/>
        </div>
      </div>

      <div class="col-lg-6 pt-4 pr-5">
        <picture>
          <source srcset="~/assets/Group-838_2x.webp"
                  type="image/webp">
          <source srcset="~/assets/Group-838_2x.png"
                  type="image/png">
          <img id="ride-feed-img" class="img-fluid"
               src="~/assets/Group-838_2x.png"
               alt="ride-feed-img">
        </picture>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'SectionA',
  data () {
    return {
      short_description: 'Du wirst jetzt mitgenommen\n' +
        'und kannst noch einfacher \n' +
        'Mitnehmen als je zuvor.\n' +
        'Mit dem Bus. Mit der Bahn.\n' +
        'Probier es aus.',
      register_text: 'Bekommst es mit sobald wir launchen!',
    }
  },
}
</script>

<style scoped>

#ride-feed-img {
  max-height: 90vh;
}

#knightride-logo-type {
  width: 100%;
}
</style>

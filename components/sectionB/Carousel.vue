<template>
  <div class="container-fluid" id="carousel-background">

      <hooper :settings="hooperSettings" class="h-100">

        <slide v-for=" item in carouselItems" v-bind:key="item.image_name" class="">
          <div class="row align-items-center p-3">
            <div class="col-sm-6">
              <picture>
                <source :srcset="require(`~/assets/carousel/${item.image_name}.webp`)"
                        type="image/webp">
                <source :srcset="require(`~/assets/carousel/${item.image_name}.png`)"
                        type="image/png">
                <img :src="require(`~/assets/carousel/${item.image_name}.png`)"
                     class="img-fluid" :alt='item.image_name'
                     :width='item.width ? item.width : "700px"'>
              </picture>
            </div>

            <div class="col-sm-6 text-left d-lg-block d-none">
              <h2 class="display-4 font-weight-bold pb-4"> {{ item.head }}</h2>
              <h5 class="text-body p-1"> {{ item.body }}</h5>
            </div>

            <div class="col-sm-6 text-left d-md-block d-lg-none d-none">
              <h2 class="display-4 font-weight-bold pb-4"> {{ item.head }}</h2>
              <h5 class="text-body p-1"> {{ item.body }}</h5>
            </div>

            <div class="col-sm-6 text-center pb-4 d-lg-none d-md-none d-block">
              <h2 class="font-weight-bold pt-4"> {{ item.head }}</h2>
              <h5 class="text-body p-1"> {{ item.body }}</h5>
            </div>

          </div>
        </slide>

        <hooper-navigation slot="hooper-addons"></hooper-navigation>
        <hooper-pagination class="rounded"
                           slot="hooper-addons"></hooper-pagination>

      </hooper>

    </div>
</template>

<script>

import { Hooper, Navigation as HooperNavigation, Pagination as HooperPagination, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'Carousel',
  // props: ['carouselItems'],
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination,
  },
  data() {
    return {
      carouselItems: [
        {
          image_name: 'create-ride',
          head: this.$t('sectionB.create_ride.head'),
          body: this.$t('sectionB.create_ride.body'),
        },
        {
          image_name: 'ride-take',
          head: this.$t('sectionB.accept_ride.head'),
          body: this.$t('sectionB.accept_ride.body'),
        },
        {
          image_name: 'chat',
          head: this.$t('sectionB.chat.head'),
          body: this.$t('sectionB.chat.body'),
        },
        {
          image_name: 'profile',
          head: this.$t('sectionB.profile1.head'),
          body: this.$t('sectionB.profile1.body'),
        },
        {
          image_name: 'profile2',
          head: this.$t('sectionB.profile2.head'),
          body: this.$t('sectionB.profile2.body'),
          width: '750px',
        },
        {
          image_name: 'profile3',
          head: this.$t('sectionB.profile3.head'),
          body: this.$t('sectionB.profile3.body'),
        },
      ],
      // image_name: 'create-ride',
      hooperSettings: {
        wheelControl: false,
      },
    };
  },
};
</script>

<style lang="scss">

.hooper-indicator {
  background-color: #7A3CEF ;
  width: 16px;
  height: 8px;
}

.hooper-indicator.is-active{
  background-color: #FFCC00 ;
  //opacity: 100%;
}


</style>

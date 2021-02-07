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
          head: 'Sei ein Held und \n' +
            'nimm mit.',
          body: 'Du bist schneller durch als du\n' +
            'denkst.\n' +
            'In nur Sekunden hast du auf \n' +
            'Knightride einen Ride angeboten.',
        },
        {
          image_name: 'ride-take',
          head: 'Schnelle Kommunikation\n' +
            'und Zugang zu Rides',
          body: 'Du hast den passenden Ride für dich \n' +
            'gefunden? Dann schreib den Knight\n' +
            'einfach mit “    „ an und fangt an\n' +
            'zu chatten um alles weitere zu klären.\n' +
            'Geht tausend Mal schneller als auf eine\n' +
            'Anfrage zu warten',
        },
        {
          image_name: 'chat',
          head: 'Messaging on Top',
          body: 'Man könnte es einen kleinen Messenger  \n' +
            'nennen. Mit unserer implementierten\n' +
            'Chatfunktion wirst du umgehend von uns \n' +
            'benachrichtigt wenn du eine Nachricht\n' +
            'von deinem Knight oder Rider empfängst.\n' +
            'So bist du immer up to date und \n' +
            'verpasst keine wichtigen Mitteilungen\n' +
            'über deinen Ride.\n',
        },
        {
          image_name: 'profile',
          head: 'Knight oder Rider\n' +
            'checken',
          body: 'Und natürlich ist man manchmal auch einfach nur neugierig oder möchte' +
            'auf Nummer sicher gehen. Mach dir ein umfangreiches Bild von \n' +
            'deinem Knight oder Rider. Wie wurde er bewertet? Wie oft war \n' +
            'er/sie/es schon Knight oder ist mitgefahren? Falls eine Bio hinterlassen worden\n' +
            'ist um so besser.\n',
        },
        {
          image_name: 'profile2',
          head: 'Alle deine Rides\n' +
            'easy im Blick behalten',
          body: 'Du kannst ganz einfach sehen\n' +
            'wo du jemanden mitnehmen wirst,\n' +
            'bei welchem Ride du selbst\n' +
            'mitfährst, sehen wen du mitnimmst \n' +
            'oder bei wem du mitfährst und vieles\n' +
            'mehr.',
          width: '750px',
        },
        {
          image_name: 'profile3',
          head: 'Aufrufe im Blick haben \n' +
            'und reagieren',
          body: 'Sieh wer sich für deinen Ride interessiert \n' +
            'und reagiere mit einer Nachricht.',
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
  opacity: 100%;
}


</style>

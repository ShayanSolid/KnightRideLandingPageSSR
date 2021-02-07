<template>
  <div>
    <div class="row justify-content-center ">
      <div class="col-lg-9 text-left">
        <h4 class="display-1 font-weight-bold"> Der Knight</h4>
        <p class="body">Der Knight besitzt eine Abo-Karte oder eine gekaufte Karte
          der Verkehrsbetriebe mit dieser er berechtigt ist, je nach Bundesland eine oder mehrere
          Personen an Wochentagen ab 19Uhr und am Wochenende ganztägig
          mitzunehmen.
          Der Knight ist großzügig und warmherzig. Wenn er gebraucht wird fühlt er
          sich richtig. Unser/e Ritter/in in der goldenen Rüstung eben.</p>
      </div>
    </div>

    <div class="row justify-content-center pt-4 pt-lg-4">
      <div class="col-lg-9 text-left">
        <h2 class="display-1 font-weight-bold"> Der Rider</h2>
        <p class="body">Der Rider sucht nach einer Mitfahrgelegenheit und ist kommunikativ.
          Sein Ziel ist es meistens so günstig und schnell wie möglich von A nach B
          zu kommen. </p>
      </div>
    </div>

    <DownloadButton/>

  </div>
</template>

<script>


export default {
  name: 'SectionC',
  data() {
    return {};
  },
};
</script>

<style scoped>
.body {
  font-size: 2rem;
}

</style>

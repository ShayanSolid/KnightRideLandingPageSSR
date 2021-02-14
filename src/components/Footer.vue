<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2">
          <h5
            class="text-uppercase mb-4 mt-3 font-weight-bold
            footer-header text-lg-left text-center"
          >
            Unternehmen
          </h5>
          <ul class="nav flex-column text-lg-left">
            <li class="nav-item">
              <NuxtLink to="/#sectionB" class="nav-link" href="#">
                {{ $t('navbar.app') }}
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/#sectionC" class="nav-link" href="#">
                {{ $t('navbar.KnightAndRider') }}
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/#sectionD" class="nav-link" href="#">
                {{ $t('navbar.aboutUs') }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col-lg-2">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold footer-header">
            {{ $t('navbar.help') }}
          </h5>
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link" href="mailto:info@knightride.app">
                {{ $t('navbar.contact') }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <div class="row pt-2 pb-2 justify-content-center">
        <div class="  pl-1 pr-1">
          <a href="https://www.facebook.com/knightrideapp">
            <img src="../assets/social-network-icons/facebook.png" alt="facebook-logo">
          </a>
        </div>

        <div class=" pl-1 pr-1">
          <a href="https://instagram.com/knightrideapp?igshid=11rjcau358cqw">
            <img src="../assets/social-network-icons/instagram.png" alt="instagram-logo">
          </a>
        </div>
      </div>
    </div>

    <div class="copyright row vw-100 py-2 justify-content-center">
      <div class="col-12 p-0">
        <div>
          <a class="link" download="" href="/public/AGB_&_DATENSCHUTZ.pdf"> AGB’s & Nutzungsbedingungen </a>
          |
          &copy; 2021 Copyright: <a class="link" href="https://www.knighride.app"> knightride.app </a>
        </div>
      </div>
<!--      <div class="col-3 p-0">-->
<!--        <div class="text-center">-->
<!--          <div>-->
<!--            &copy; 2021 Copyright: <a class="link" href="https://www.knighride.app"> knightride.app </a>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer-header {
  color: #7A3CEF;
}

.nav-link {
  color: #080808;
}

.link {
  color: white;
}

.copyright {
  font-size: 0.8em;
  background-color: black;
  color: white;

}
</style>

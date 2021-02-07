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
                Die App
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/#sectionC" class="nav-link" href="#">
                Knight & Rider
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/#sectionD" class="nav-link" href="#">
                Über uns
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col-lg-2">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold footer-header">
            Hilfe
          </h5>
          <ul class="nav flex-column">
            <li class="nav-item">
              <NuxtLink to="/#sectionB" class="nav-link" href="#">
                Kontakt
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <div class="row pt-2 pb-2 justify-content-center">
        <div class=" social-icons pl-1 pr-1">
          <a class=" " href="">
            <img src="../assets/social-network-icons/facebook.svg" alt="facebook-logo">
          </a>
        </div>

        <div class=" social-icons pl-1 pr-1">
          <a class=" " href="">
            <img src="../assets/social-network-icons/instagram.svg" alt="facebook-logo">
          </a>
        </div>

        <div class=" social-icons pl-1 pr-1">
          <a class=" " href="">
            <img src="../assets/social-network-icons/twitter.svg" alt="facebook-logo">
          </a>
        </div>
      </div>
    </div>

    <div class="copyright row vw-100 py-3">
      <div class="col-12 p-0">
        <div class="text-center">
          <div>
            &copy; 2021 Copyright: <a class="link" href="https://www.knighride.app"> knightride.app </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
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
  color: #2c3e50;
}

.social-icons {
  width: 50px;
}

.copyright {
  background-color: #FECC2F;
}
</style>

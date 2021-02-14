<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
      <b-navbar-brand href="#">
        <div class="container">
          <picture>
            <source
              srcset="../assets/knightride-logo.webp"
              type="image/webp"
            >
            <source
              srcset="../assets/knightride-logo.png"
              type="image/png"
            >
            <img
              id="knightride_logo"
              class=" d-inline-block align-top pr-2"
              width="30"
              src="../assets/Group-838_2x.png"
              alt="Logo"
            >
          </picture>
          Knightride
        </div>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/#sectionB" class="nav-link">{{ $t('navbar.app') }}</b-nav-item>
          <b-nav-item href="/#sectionC" class="nav-link">{{ $t('navbar.KnightAndRider') }}</b-nav-item>
          <b-nav-item href="/#sectionD" class="nav-link">{{ $t('navbar.aboutUs') }}</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown :text="$t('lang')" right no-caret>
            <nuxt-link :to="switchLocalePath('en')" class="nav-link">English</nuxt-link>
            <nuxt-link :to="switchLocalePath('de')" class="nav-link">Deutsch</nuxt-link>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

#nav {
  background-color: #7A3CEF;
}
</style>

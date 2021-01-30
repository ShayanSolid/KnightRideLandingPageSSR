<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
    <a class="navbar-brand mx-auto pr-lg-2 pl-2 pr-sm-0" href="#">
      <a href="/#sectionA" class="container">
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
      </a>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto ">
        <li class="nav-item">
          <a href="/#sectionB" class="nav-link">Die App</a>
        </li>
        <li class="nav-item">
          <a href="/#sectionC" class="nav-link">Knight & Rider</a>
        </li>
        <li class="nav-item">
          <a href="/#sectionD" class="nav-link">Über uns</a>
        </li>
      </ul>
    </div>
  </nav>
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

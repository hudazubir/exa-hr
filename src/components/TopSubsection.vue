<template>
  <div class="top-subsection">
    <header class="header">
      <div class="left">
        <Logo class="logo-line" />
      </div>

      <div class="menu">
        <div class="item">
          <div class="text-wrapper">Home</div>
        </div>

        <div class="div-wrapper">
          <div class="div">Discover</div>
        </div>

        <div class="div-wrapper">
          <div class="div">Portfolio</div>
        </div>

        <div class="div-wrapper">
          <div class="div">Service</div>
        </div>

        <div class="div-wrapper">
          <div class="div">Client</div>
        </div>
      </div>

      <Button
        class="button-instance"
        color="primary"
        icon
        :override="() => h(ArrowRight, { class: 'arrow-right', color: '#3E97FF' })"
        size="large"
        state="default"
        text="Login"
        type="light"
      />
    </header>
  </div>
</template>

<script>
// import { ArrowRight } from "./ArrowRight";
// import { Button } from "./Button";
// import { Logo } from "./Logo";

export default {
  name: "TopSubsection",
  components: {
    // ArrowRight,
    // Button,
    // Logo
  }
};
</script>

<style>
.top-subsection {
  /* Add your styles here */
}

.header {
  /* Add your styles here */
}

.left {
  /* Add your styles here */
}

.menu {
  /* Add your styles here */
}

.item {
  /* Add your styles here */
}

.text-wrapper {
  /* Add your styles here */
}

.div-wrapper {
  /* Add your styles here */
}

.div {
  /* Add your styles here */
}

.button-instance {
  /* Add your styles here */
}
</style>

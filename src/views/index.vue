<template>
  <div class="landing-page-exa">
    <div class="frame-4">
      <TopSubsection />
      <FrameSubsection />
    </div>
  </div>
</template>

<script>
import TopSubsection from "@/components/TopSubsection.vue"
import FrameSubsection from "@/components/FrameSubsection.vue"

export default {
  name: 'LandingPageExa',
  components: {
    TopSubsection,
    FrameSubsection
  }
};
</script>

<style>
.landing-page-exa {
  align-items: center;
  background-color: var(--white-darkwhite);
  display: flex;
  flex-direction: column;
  gap: 80px;
  height: 1324px;
  padding: 45px 20px;
  position: relative;
}

.landing-page-exa .frame-4 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 1234px;
  position: relative;
  width: 100%;
}
</style>

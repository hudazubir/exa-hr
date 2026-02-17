<template>
  <div :class="['component', property1, className]">
    <div v-if="property1 === 'widget-3'" class="exa-helpdesk">
      Exa <br />
      Helpdesk
    </div>

    <img v-if="property1 === 'widget-3'" class="line" alt="Line" :src="line1" />

    <p v-if="property1 === 'widget-3'" class="text-wrapper">
      A help desk system is a digital platform that helps organizations
      manage customer support requests
    </p>

    <!-- <img v-if="property1 === 'image-fx-1'" class="image-fx" alt="Image fx" :src="imageFx1" /> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
// import imageFx1 from "./image-fx-1.png";
// import line1 from "./line-1.svg";

export default defineComponent({
  name: "Component",
  props: {
    property1: {
      type: String,
      validator: function (value) {
        return ["widget-3", "image-fx-1"].indexOf(value) !== -1;
      },
    },
    className: {
      type: String,
      default: "",
    },
  },
  setup() {
    return {
      // imageFx1,
      line1: '',
    };
  },
});
</script>

<style>
.component {
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  height: 232px;
  position: relative;
  top: 20px;
  width: 383px;
}

.component .exa-helpdesk {
  align-self: stretch;
  color: var(--graygray-500);
  font-family: "Inter-ExtraBold", Helvetica;
  font-size: 40px;
  font-weight: 800;
  letter-spacing: -0.40px;
  line-height: 48px;
  margin-top: -1.00px;
  position: relative;
}

.component .line {
  align-self: stretch;
  height: 1px;
  object-fit: cover;
  position: relative;
  width: 100%;
}

.component .text-wrapper {
  align-self: stretch;
  color: var(--graygray-700);
  font-family: "Inter-Light", Helvetica;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: -0.14px;
  line-height: 20px;
  position: relative;
}

.component .image-fx {
  flex: 1;
  height: 232.28px;
  object-fit: cover;
}

.component.image-fx-1 {
  left: 427px;
}

.component.widget-3 {
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
  left: 20px;
  overflow: hidden;
  padding: 32px;
}
</style>

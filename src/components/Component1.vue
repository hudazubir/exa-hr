<template>
  <div :class="['component', property1, className]">
    <div v-if="property1 === 'widget-3'" class="exa-doms">
      Exa <br />
      Doms
    </div>

    <img v-if="property1 === 'widget-3'" class="line" alt="Line" :src="line1" />

    <p v-if="property1 === 'widget-3'" class="text-wrapper">
      An archive system is a digital tool that helps organizations store,
      organize, and preserve important documents and records.
    </p>

    <!-- <img v-if="property1 === 'image-fx-1'" class="image-fx" alt="Image fx" :src="imageFx1" /> -->
  </div>
</template>

<!-- <script>
import { defineProps } from 'vue';
// import imageFx1 from './image-fx-1.png';
// import line1 from './line-1.svg';

export default {
  name: 'Component',
  setup() {
    const props = defineProps({
      property1: {
        type: String,
        validator: (value) => ['widget-3', 'image-fx-1'].includes(value),
      },
      className: {
        type: String,
        default: '',
      },
    });

    return {
      ...props,
      // imageFx1,
      line1: '',
    };
  },
};
</script> -->

<script setup>
// import line1 from './line-1.svg';

defineProps({
  property1: {
    type: String,
    validator: (value) => ['widget-3', 'image-fx-1'].includes(value),
  },
  className: {
    type: String,
    default: '',
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

.component .exa-doms {
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
  margin-bottom: -19.00px;
  position: relative;
}

.component .image-fx {
  flex: 1;
  object-fit: cover;
  width: 383.28px;
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

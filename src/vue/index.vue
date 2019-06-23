<template>
  <div>
    <div>vue</div>
    <div>{{ env }}</div><!-- NODE_ENVの確認 -->
    <div>{{ lodash }}</div><!-- Externalsの確認に使用 -->
    <div>{{ chunk }}</div><!-- Externalsの確認に使用 -->
    <div class="parent"><!-- sass-loaderの確認に使用 -->
      <div class="parent__child">child</div><!-- sass-loaderの確認に使用 -->
    </div>
  </div>
</template>

<script>
import lodash from "lodash"; //Externalsの確認に使用 Webpackのexternalsに紐づいている
import chunk from "chunk"; //Externalsの確認に使用 Webpackのexternalsに紐づいている

export default {
  name: "vue",
  data() {
    return {
      env: process.env.NODE_ENV,
      lodash: lodash.chunk([1, 2, 3, 4], 2), //Externalsの確認に使用
      chunk: chunk([1, 2, 3, 4], 2), //Externalsの確認に使用
    };
  },
};
</script>

<style lang="scss" scoped>
.parent{
  background-color: bisque;
  padding: 10px;
  &__child{
    margin: auto auto;
  }
}
</style>

<template>
  <div>
    <div>vue</div>
    <div>{{ env }}</div><!-- NODE_ENVの確認 -->
  </div>
</template>

<script>
export default {
  name: "vue",
  data() {
    return {
      env: process.env.NODE_ENV,
    };
  },
};
</script>

<style scoped></style>

<template>
  <div>
    <typeNav />
    <h1>params参数------{{ $route.params.keyword }}=========={{ keyword }}</h1>
    <h1>query参数-------{{ $route.query.k }}=================={{ k }}</h1>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["keyword", "k"],
};
</script>

<style lang="less" scoped>
</style>
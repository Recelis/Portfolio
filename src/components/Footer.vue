<template>
  <div class="d-flex justify-content-center">
    Created by Jacky with Vue and fun ❤️. Hosted on Github Pages. ©
    {{ currentYear }}
  </div>
</template>

<script>
export default {
  //name: 'component-name',
  //parent: '',
  components: {},
  directives: {},
  filters: {},
  mixins: [],
  props: {},
  data: function () {
    return {};
  },
  computed: {
    currentYear: () => new Date().getFullYear(),
  },
  watch: {},
  beforeCreate: function () {},
  created: function () {},
  beforeMount: function () {},
  mounted: function () {},
  beforeUpdate: function () {},
  updated: function () {},
  activated: function () {},
  deactivated: function () {},
  beforeDestroy: function () {},
  destroyed: function () {},
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>
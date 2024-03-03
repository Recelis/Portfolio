<template>
  <div class="container-xxl bd-gutter mt-3 my-md-4 bd-layout">
    <h4 id="home" class="page">Home</h4>
    <p>...</p>
    <h4 id="about" class="page">About</h4>
    <p>...</p>
    <h4 id="projects" class="page">Projects</h4>
    <p>...</p>
    <h4 id="blogs" class="page">Blogs</h4>
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
  computed: {},
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
.page {
  height: 90vh;
  min-height: 90vh;
  background-color: red;
  &:not(:first-child) {
    padding-top: 6rem;
  }
}
</style>

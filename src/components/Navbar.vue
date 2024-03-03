<template>
  <nav id="navbarScroll" class="navbar navbar-expand-lg sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Jacky</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#blogs">Blogs</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
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
  mounted: function () {
    console.log("mounting");
  },
  beforeUpdate: function () {},
  updated: function () {},
  activated: function () {},
  deactivated: function () {},
  beforeDestroy: function () {},
  destroyed: function () {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>

<template>
  <Header class="layout-header-bar">
      <Icon @click.native="collapsedSider" :class="rotateIcon" type="navicon-round" size="24"></Icon>
      <layoutBreadcrumb class="breadcrumb"/>
  </Header>
</template>
<script>
  import layoutBreadcrumb    from './Breadcrumb.vue'
  export default {
    name: 'cvi-header',
    components: {
      layoutBreadcrumb,
    },
    props: {
      isCollapsed: {
          type: Boolean,
          default: false
      }
    },
    computed: {
        rotateIcon () {
            return [
                'menu-icon',
                this.isCollapsed ? 'rotate-icon' : ''
            ];
        }
    },
    methods: {
      collapsedSider () {
        this.$emit('on-collapsed-sider');
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import  './../../assets/sass/mixin.scss';
  .layout-header-bar{
      padding: 0;
      background: #fff;
      box-shadow: 0 1px 1px rgba(0,0,0,.1);
      display: -webkit-flex; /* Safari */
      display: flex;
  }
  .menu-icon{
      margin: 20px 20px 20px;
      transition: all .3s;
  }
  .rotate-icon{
      transform: rotate(-90deg);
  }
  @media (max-width: $md) {
    /* 屏幕小的时候自动隐藏 breadcrumb */
    .breadcrumb{
      display: none;
    }
  }
</style>

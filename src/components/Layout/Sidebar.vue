<template>
    <Menu theme="dark" width="auto"  :class="menuitemClasses" @on-select="changeMenu">
        <template v-for="item in menuList">
            <MenuItem v-if="!item.children" :name="item.name" :key="'menuitem' + item.name">
                <i :class="item.icon"></i>
                <span :key="'title' + item.name">{{item.title}}</span>
            </MenuItem>
            <Submenu v-if="item.children" :name="'submenu' +item.name" :key="item.name">
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span>{{item.title}}</span>
                </template>
                <template v-for="child in item.children">
                    <MenuItem :name="child.name" :key="'menuitem' + child.name">
                        <i :class="child.icon"></i>
                        <span :key="'title' + child.name">{{child.title}}</span>
                    </MenuItem>
                </template>
            </Submenu>
        </template>
    </Menu>
</template>
<script>
  export default {
    name: 'cvi-sidebar',
    props: {
      menuList: {
          type: Array,
          default: ''
      },
      isCollapsed: {
          type: Boolean,
          default: false
      }
    },
    computed: {
        menuitemClasses () {
            return [
                'menu-item',
                this.isCollapsed ? 'collapsed-menu' : ''
            ]
        }
    },
    methods: {
      changeMenu (active) {
          this.$emit('on-change', active);
      }
    }
  }
</script>
<style lang="scss">
  i{
    width: 24px;
    height: 24px;
    text-align: center;
    line-height: 24px!important;
  }
  .menu-item span{
      display: inline-block;
      overflow: hidden;
      width: 69px;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: bottom;
      transition: width .2s ease .2s;
  }
  .menu-item i{
      transform: translateX(0px);
      transition: font-size .2s ease, transform .2s ease;
      vertical-align: middle;
      font-size: 16px;
  }
  .ivu-layout-sider{
    overflow: visible!important;
  }
  .collapsed-menu {
    .ivu-menu-submenu-title-icon{
      display: none;
    }
    .ivu-menu-submenu{
      &:hover{
        ul{
          margin-top: -73px;
          display: block!important;
        }
      }
    }
    >.ivu-menu-submenu ul{
       display: none;
       position: absolute;
       width: 200px;
       margin-left: 78px;
       background: #1c2438;
       border-top-right-radius: 4px;
       border-bottom-right-radius: 4px;
       overflow: hidden;
       >li{
         >span{
           margin-left: 7px;
           overflow: visible;
         }
       }
    }
  }
  .collapsed-menu span{
      width: 0px;
      transition: width .2s ease;
  }
  .collapsed-menu i{
      transform: translateX(5px);
      transition: font-size .2s ease .2s, transform .2s ease .2s;
      vertical-align: middle;
      font-size: 22px;
  }
</style>

<template>
    <Menu active-name="1-2" theme="dark" width="auto"  :class="menuitemClasses" :open-names="['1']">
        <template v-for="item in menuList">
            <MenuItem v-if="!item.children" :name="item.name" :key="'menuitem' + item.name">
                <i :class="item.icon"></i>
                <span :key="'title' + item.name">{{item.title}}</span>
            </MenuItem>
            <Submenu v-if="item.children" :name="item.name" :key="item.name">
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
    }
  }
</script>
<style scoped>
    .layout{
        background: #f5f7f9;
        position: relative;
        overflow: hidden;
        height: 100%;
    }
    .ivu-layout{
        height: 100%;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
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

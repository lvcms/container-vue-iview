<template>
      <Menu active-name="1-2" theme="dark" width="auto"  :class="menuitemClasses" :open-names="['1']">
        <Submenu name="1">
            <template slot="title">
                <Icon type="ios-navigate"></Icon>
                <span>Item 1</span>
            </template>
            <MenuItem name="1-1">Option 1</MenuItem>
            <MenuItem name="1-2">Option 2</MenuItem>
            <MenuItem name="1-3">Option 3</MenuItem>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-keypad"></Icon>
                <span>Item 2</span>
            </template>
            <MenuItem name="2-1">Option 1</MenuItem>
            <MenuItem name="2-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                <span>Item 3</span>
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                <span>Item 3</span>
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                <span>Item 3</span>
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                <span>Item 3</span>
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                <span>Item 3</span>
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                <span>Item 3</span>
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                <span>Item 3</span>
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                <span>Item 3</span>
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                <span>Item 3</span>
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                <span>Item 3</span>
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                <span>Item 3</span>
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                <span>Item 3</span>
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                <span>Item 3</span>
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>

        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                <span>Item 3</span>
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu><Submenu name="3">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                <span>Item 3</span>
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                <span>Item 3</span>
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>
    </Menu>
</template>
<script>
  export default {
    name: 'cvi-sidebar',
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

<template>
  <div class="avator">
    <div class="user-dropdown-menu-con">
          <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
              <Dropdown transfer trigger="click" @on-click="handleClickUserDropdown">
                  <a href="javascript:void(0)">
                      <span class="main-user-name">超级管理</span>
                      <Icon type="arrow-down-b"></Icon>
                  </a>
                  <DropdownMenu slot="list">
                      <DropdownItem name="cache">清除缓存</DropdownItem>
                      <DropdownItem name="ownSpace">个人中心</DropdownItem>
                      <DropdownItem name="loginout" divided>退出登录</DropdownItem>
                  </DropdownMenu>
              </Dropdown>
              <Avatar style="background: #619fe7;margin-left: 10px;"></Avatar>
          </Row>
      </div>
  </div>
</template>
<script>
  import Cache from 'lf-cache'
  export default {
    name: 'cvi-avator',
    methods: {
      handleClickUserDropdown (name) {
          if (name === 'ownSpace') {
              // util.openNewPage(this, 'ownspace_index');
              // this.$router.push({
              //     name: 'ownspace_index'
              // });
          } else if (name === 'loginout') {
              // // 退出登录
              // this.$store.commit('logout', this);
              // this.$store.commit('clearOpenedSubmenu');
              // this.$router.push({
              //     name: 'login'
              // });
          } else if (name === 'cache') {
              // 清除前端缓存
              Cache.flush()
          }
      },
    }
  }
</script>
<style lang="scss" scoped>
  .avator{
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    padding-right: 1vh;
  }
</style>

<template>
  <div class="layout">
    <Layout>
        <Sider ref="side" breakpoint="md" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
          <layoutSidebar
            :menuList="sidebar"
            :isCollapsed="isCollapsed"
            @on-change="handleChange"
          />
        </Sider>
        <Layout class="layout-left">
            <layoutHeader
              :isCollapsed="isCollapsed"
              @on-collapsed-sider="collapsedSider"
            />
            <layoutContent/>
        </Layout>
    </Layout>
  </div>
</template>
<script>
  import layoutSidebar    from './Layout/Sidebar.vue'
  import layoutHeader    from './Layout/Header.vue'
  import layoutContent    from './Layout/Content.vue'

  import { mapActions } from 'vuex'
  import Cache from 'lf-cache'
  import gql from 'graphql-tag'
  export default {
    name: 'cvi-layout',
    components: {
      layoutSidebar,
      layoutHeader,
      layoutContent,
    },
    created () {
      this.initSidebar()
    },
    data () {
      return {
          sidebar: [],
          isCollapsed: false
      }
    },
    methods: {
        ...mapActions([
            'eventSidebar',
            'graphqlError',
        ]),
        collapsedSider () {
            this.$refs.side.toggleCollapse();
        },
        initSidebar () {
          Cache.remember(this.$config.package + ':sidebar', async () => {
            let apollo = await this.$apollo.query({
              query: gql`query ($package: String!) {
                sidebar(package: $package){
                  title
                  name
                  icon
                  children
                }
              }`,
              variables: {
                package: this.$config.package
              }
            })
            return apollo.data.sidebar
          } , 60*24*7).then((sidebar) => {
            this.sidebar = sidebar
            this.eventSidebar(sidebar)
          }).catch((error) => {
            this.graphqlError(error).then( message => {
              this.$Message.error(message)
            })
          })
        },
        handleChange (name) {
          this.$router.push({
              name: name
          });
        }
    }
  }
</script>
<style lang="scss" scoped>
    @import  './../assets/sass/mixin.scss';
    .layout{
        background: #f5f7f9;
        overflow: hidden;
        height: 100%;
    }
    .ivu-layout{
        height: 100%;
    }
    .layout-left{
        overflow-x:hidden!important;
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    /* 自定义样式 */
    .ivu-layout-sider{
      overflow:auto;
      @include scrollBar;//修复 win 侧栏样式
    }
</style>

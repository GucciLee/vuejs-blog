<template>
  <footer class="footer">
    <div class="container">
      <div class="row footer-top">
        <div class="col-sm-3 col-lg-3">
          <h4 class="padding-top-xsm">{{ description }}</h4>

          <div class="text-md">
            <a v-for="item in contacts" v-title="item.title" :href="item.link" :style="contactStyle" target="_blank">
              <i :class="`fa fa-${item.icon}`"></i>
            </a>
          </div>

          <br>

          <span v-html="designer"></span>
        </div>

        <div class="col-sm-9 col-lg-9">
          <div class="row">
            <div class="col-sm-3">
              <h4>{{ response.title }}</h4>

              <ul class="list-unstyled">
                <li v-for="item in response.list">
                  <a :href="item.link" target="_blank">
                    <span>{{item.title}}</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div class="col-sm-3">
              <h4>{{ sponsor.title }}</h4>

              <ul class="list-unstyled">
                <li v-for="item in sponsor.list">
                  <a :href="item.link" target="_blank">
                    <span>{{item.title}}</span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-sm-3">
              <h4>{{ statistics.title }}</h4>

              <ul class="list-unstyled">
                <li v-for="item in statistics.list">{{ item.title }}: {{ item.description }}</li>
              </ul>
            </div>

            <div class="col-sm-3">
              <h4>{{ other.title }}</h4>

              <ul class="list-unstyled">
                <li v-for="item in other.list">
                  <a :href="item.link" :title="item.title" target="_blank">
                    <i :class="`fa fa-${item.icon}`"></i> {{ item.title }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
// 引入 title.js 的默认值
import title from '@/directives/title'

export default {
  name: 'TheFooter',
  // 添加 directives 选项，并注册 title
  directives: {
    title
  },
  data() {
    return {
      description: '生命不息，分享不止',
      contacts: [
        {
          icon: 'envelope',
          title: '反馈问题',
          link: 'mailto:guccilee@163.com'
        },
        {
          icon: 'qq',
          title: '加QQ群 831174706',
          link: '//shang.qq.com/wpa/qunwpa?idkey=0b42857f3c9527bca4212a059168178044a892271938b75c99d779fcfd8b7968'
        },
        {
          icon: 'weixin',
          title: '加我微信',
          link: '/contact'
        }
      ],
      contactStyle: {
        paddingRight: '8px'
      },
      designer: `
        <span style="font-size:0.9em">Designed by
          <span style="color: #e27575;font-size: 14px;">❤</span>
          <a href="https://github.com/guccilee"target="_blank"style="color:inherit">Ben</a>
        </span>
        <br/><br/>
        <a href="http://beian.miit.gov.cn/" rel="nofollow" target="_blank">粤ICP备12040635号</a>
      `,
      response: {
        title: '资源推荐',
        list: [
          {
            title: '~',
            link: 'javascript:;'
          },
        ]
      },
      sponsor: {
        title: '友情链接',
        list: [
          {
            title: 'Laravel 中文社区',
            link: 'https://learnku.com'
          },
          {
            title: 'Nginx 中文手册',
            link: 'http://www.nginx.cn/doc/index.html'
          },
        ]
      },
      statistics: {
        title: '统计信息',
        list: [
          {
            title: '社区会员',
            description: '22889'
          },
          {
            title: '话题数',
            description: '7397'
          },
          {
            title: '评论数',
            description: '39375'
          }
        ]
      },
      other: {
        title: '其他信息',
        list: [
          {
            icon: 'thumbs-up',
            title: '软件外包服务',
            link: '/contact'
          },
          {
            icon: 'globe',
            title: '推荐网站',
            link: '/sites'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.footer{background-color: #1b1c1d;}
a:hover, a:focus { color: #e27575; transition: color .15s;}
</style>
# vue.learnku.net

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## GitHub Pages
https://guccilee.github.io/vuejs-blog/dist/


## 依赖
```
yarn add pug-plain-loader
yarn add pug     [pug 模板引擎](https://github.com/pugjs/pug)

yarn add sass-resources-loader [加载公共 scss 文件使用](https://www.npmjs.com/package/sass-resources-loader)
yarn add bootstrap-sass --save [版本3.x ](https://v3.bootcss.com/) 、[版本4.x](https://v4.bootcss.com/)

yarn add font-awesome --save    [Font Awesome 图标](http://www.fontawesome.com.cn/faicons/)
```

## 语法
```
:class="`fa fa-${item.icon}`"
:class="{ active: index === activeNavIndex }
:class="['collapse', 'navbar-collapse', { in: showCollapsedNav }]"

:style="contactStyle"

this.$nextTick

this.$store.state.user
this.$store.dispatch('login', user)
```
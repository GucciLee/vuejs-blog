
## Vue 语法
```
:class="`fa fa-${item.icon}`"
:class="{ active: index === activeNavIndex }
:class="['collapse', 'navbar-collapse', { in: showCollapsedNav }]"

:style="contactStyle"

# 等待 dom 更新完毕
this.$nextTick
```

## Vuex
http://www.learnku.net/course/1/articles/65
```
# 项目约定：vuex 模块名使用全大写
# $user 是 vuex 的一个模块
# $methodName 是一个方法名
# $params 是函数需要的参数

State    ------ this.$store.state.xxxx           ------ mapState 取值
State    ------ this.$store.state.$user.xxxx     ------ mapState 取值

Getter   ------ this.$store.getters.xxxx         ------ mapGetters 取值
Getter   ------ this.$store.getters.$user.xxxx   ------ mapGetters 取值

Mutation ------ this.$store.commit('$methodName')       ------ mapMutations 赋值
Mutation ------ this.$store.commit('$user/$methodName') ------ mapMutations 赋值

Action   ------ this.$store.dispatch('$methodName', $params)       ------ mapActions 赋值
Action   ------ this.$store.dispatch('$user/$methodName', $params) ------ mapActions 赋值
```

## 表单验证
https://baianat.github.io/vee-validate/guide/rules.html
```
# 用法【组件形式，推荐】
<FormGroup label="邮箱" :error="errors.first('email')">
    <input type="email" class="form-control" placeholder="请填写邮箱"
           name="email"
           v-model.trim="form.email"
           v-validate="'required|email'" >
</FormGroup>
```
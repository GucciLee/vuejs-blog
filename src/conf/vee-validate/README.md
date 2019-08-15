## vee-validate 表单验证插件

[官网](https://baianat.github.io/vee-validate/guide/rules.html)
[快速入门](https://blog.happyhack.cn/2018/08/veevalidate-custom-validation-rules.html)

```
# 用法【组件形式，推荐】
<FormGroup label="邮箱" :error="errors.first('email')">
    <input type="email" class="form-control" placeholder="请填写邮箱"
           name="email"
           v-model.trim="form.email"
           data-vv-as="自定义名"
           v-validate="'required|email'" >
</FormGroup>
```

### 1.1 使用自定义规则
```
# 注意：规则 required 是必须的
# 假设：规则 phone 是我们自定义的规则
<input type="phone" name="phone" v-model.trim="phone" v-validate="'required|phone'" >
```

### 1.2 表单提交（验证）
```
// https://baianat.github.io/vee-validate/api/validator.html#api
this.$validator.validateAll().then((result) => {
    if (result) {
        // 验证成功操作
    }
});
```
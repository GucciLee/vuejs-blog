<template>
    <div class="row">
        <div class="col-md-4 col-md-offset-4 floating-box">
            <!-- 消息组件 -->
            <Message :show.sync="msgShow" :type="msgType" :msg="msg"/>

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">请注册</h3>
                </div>

                <form  @submit.prevent="validateBeforeSubmit">
                    <div class="panel-body">
                        <FormGroup label="手机号码" :error="errors.first('phone')">
                            <input type="text" class="form-control" placeholder="请填写手机号码"
                                   name="phone"
                                   v-model="form.phone"
                                   v-validate="'required|phone'" >
                        </FormGroup>

                        <FormGroup label="用户名" :error="errors.first('username')">
                            <input type="text" class="form-control" placeholder="请填写用户名"
                                   name="username"
                                   v-model.trim="form.username"
                                   v-validate="'required|min:6|max:12'" >
                        </FormGroup>
                        <FormGroup label="邮箱" :error="errors.first('email')">
                            <input type="email" class="form-control" placeholder="请填写邮箱"
                                   name="email"
                                   v-model.trim="form.email"
                                   v-validate="'required|email'" >
                        </FormGroup>
                        <FormGroup label="密码" :error="errors.first('password')">
                            <input type="password" class="form-control" placeholder="请填写密码"
                                   name="password"
                                   v-model.trim="form.password"
                                   v-validate="'required|min:6|max:16'" >
                        </FormGroup>
                        <FormGroup label="确认密码" :error="errors.first('password_confirmation')">
                            <input type="password" class="form-control" placeholder="请填写确认密码"
                                   name="password_confirmation"
                                   v-model.trim="form.cpassword"
                                   v-validate="'required|confirmed:password'" >
                        </FormGroup>
                        <FormGroup label="验证码" :error="errors.first('captcha')">
                            <input type="text" class="form-control" placeholder="图片验证码"
                                   name="captcha"
                                   v-model.trim="form.captcha"
                                   v-validate="'required'" >
                        </FormGroup>
                        <div class="thumbnail" title="点击图片重新获取验证码" @click="getCaptcha">
                            <div class="captcha vcenter" v-html="captchaTpl"></div>
                        </div>
                        <button type="submit" class="btn btn-lg btn-success btn-block">
                            <i class="fa fa-btn fa-sign-in"></i> 注册
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import createCaptcha from '@/utils/createCaptcha'
    import ls from '@/utils/localStorage'

    export default {
        name: 'Register',
        data() {
            return {
                form: {
                    phone: '', // 用户名
                    username: '', // 用户名
                    email: '', // 邮箱
                    password: '', // 密码
                    cpassword: '', // 确认密码
                    captcha: '', // 验证码
                },
                captchaTpl: '', // 验证码模板
                msg: '', // 消息
                msgType: '', // 消息类型
                msgShow: false // 是否显示消息，默认不显示
            }
        },
        methods: {
            formGroupClass(name){
                return 'form-group ' + (this.$validator.errors.has(name) && 'has-error')
            },
            getCaptcha() {
                const { tpl, captcha } = createCaptcha(6)

                this.captchaTpl = tpl
                this.localCaptcha = captcha
            },
            validateBeforeSubmit() {
                this.$validator.validateAll().then((result) => {
                    // 验证成功操作
                    if (result) {
                        this.submit()
                    }
                });
            },
            submit() {
                console.log('submit')
                return false;
                if (this.captcha.toUpperCase() !== this.localCaptcha) {
                    this.showMsg('验证码不正确')
                    this.getCaptcha()
                } else {
                    const user = {
                        name: this.username,
                        password: this.password,
                        avatar: `https://api.adorable.io/avatars/200/${this.username}.png`
                    }
                    // 从仓库获取用户信息
                    const localUser = this.$store.state.USER.infos

                    if (localUser) {
                        if (localUser.name === user.name) {
                            this.showMsg('用户名已存在')
                        } else {
                            this.login(user)
                        }
                    } else {
                        this.login(user)
                    }
                }
            },
            login(user) {
                // 分发 login 事件，以保存用户信息和登录
                this.$store.dispatch('USER/login', user)
                this.showMsg('注册成功', 'success')
            },
            showMsg(msg, type = 'warning') {
                this.msg = msg
                this.msgType = type
                this.msgShow = false

                this.$nextTick(() => {
                    this.msgShow = true
                })
            }
        }
    }
</script>

<style scoped>
    .thumbnail {
        width: 170px;
        margin-top: 10px;
        cursor: pointer;
    }

    .thumbnail .captcha {
        height: 46px;
        background: #E1E6E8;
    }

    .captcha {
        font-size: 24px;
        font-weight: bold;
        user-select: none;
    }
</style>
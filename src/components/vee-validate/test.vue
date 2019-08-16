<template>
    <form  @submit.prevent="submit">
        <div class="panel-body">
            <FormGroup label="文本框 input + 自定义规则" :error="errors.first('phone')">
                <input type="text" class="form-control" placeholder="手机号码"
                       name="phone"
                       v-model.trim="form.phone"
                       v-validate="'required|phone'" >
            </FormGroup>

            <FormGroup label="自定义规则 - 唯一性验证" :error="errors.first('unique')">
                <input type="text" class="form-control" placeholder="唯一性验证, 1-5 失败"
                       name="unique"
                       v-validate="uniqueRuler" >
            </FormGroup>

            <FormGroup label="单选 radio" :error="errors.first('sex')">
                <div>
                    <label class="radio-inline">
                        <input type="radio" name="sex" value="1" v-validate="'required'" v-model="form.sex"> 男
                    </label>
                    <label class="radio-inline">
                        <input type="radio" name="sex" value="2" v-validate="'required'" v-model="form.sex"> 女
                    </label>
                    <label class="radio-inline">
                        <input type="radio" name="sex" value="0" v-validate="'required'" v-model="form.sex"> 保密
                    </label>
                </div>
                <p>性别: {{ form.sexd }}</p>
            </FormGroup>

            <FormGroup label="复选框 checkbox" :error="errors.first('checkedNames')">
                <div>
                    <label class="checkbox-inline">
                        <input type="checkbox" name="checkedNames" value="Jack" v-validate="'required'" v-model="form.checkedNames"> Jack
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" name="checkedNames" value="John" v-validate="'required'" v-model="form.checkedNames"> John
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" name="checkedNames" value="Mike" v-validate="'required'" v-model="form.checkedNames"> Mike
                    </label>
                </div>
                <p>Checked names: {{ form.checkedNames }}</p>
            </FormGroup>

            <FormGroup label="下拉列表 select" :error="errors.first('selected')">
                <select class="form-control" name="selected" v-model="form.selected" v-validate="'required'">
                    <option disabled value="">请选择</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                    <option>E</option>
                </select>
                <span>Selected: {{ form.selected }}</span>
            </FormGroup>

            <FormGroup label="日期验证" :error="errors.first('date_between_field')">
                <input  type="date" v-validate="'required|date_format:yyyy-MM-dd|date_between:2019-08-01,2019-08-31'"
                        name="date_between_field"
                        v-model="form.date_between_field">
            </FormGroup>

            <FormGroup label="文件验证" :error="errors.first('image_ext_field')">
                <input v-validate="'image|ext:jpeg,jpg'"
                       data-vv-as="图片"
                       @change="upload"
                       name="image_ext_field" type="file">
            </FormGroup>

            <button type="submit" class="btn btn-lg btn-success btn-block">
                <i class="fa fa-btn fa-sign-in"></i> 确定
            </button>
        </div>
    </form>
</template>

<script>
    import axios from "axios";
    export default {
        name: "test",
        data(){
            return {
                uniqueAjaxUrl: 'http://wwww',
                form: {
                    phone: '',
                    unique: '',
                    sex: '',
                    checkedNames: [],
                    selected: '',
                    date: '',
                    date_between_field: '',
                    image_ext_field: ''
                }
            }
        },
        computed: {
            uniqueRuler(){
                /**
                 * 接口应返还数据结构为：
                 * { "message": "该邮箱已经存在 已经存在", "valid": false }
                 */
                let rtn, url = 'http://localhost:8888/v1/test/'
                let params = { id: '30' };
                rtn = 'required|unique:'+ url +',' + JSON.stringify(params);
                return rtn
            }
        },
        methods: {
            // 提交表单
            submit(){
                console.log(this.form)
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        console.log('表单验证成功')
                    }
                });
            },
            upload({target: {files}}){
                this.form.image_ext_field = files[0];
                console.log(files[0])
            }
        }
    }
</script>

<style scoped>

</style>
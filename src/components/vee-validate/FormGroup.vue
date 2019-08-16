<template>
    <div :class="['form-group', {'has-error': error}]">
        <label class="control-label">{{ label }}</label>
        <slot></slot>
        <span class="help-block" v-if="error">{{ error }}</span>
    </div>
</template>

<script>
    export default {
        name: "ValidatedInputField",
        props: {
            label: String,
            error: {
                type: String,
                default: null
            }
        },
    }
</script>

<style lang="scss" scoped>
    .control-label{color: $font-color;}
</style>
<template>
    <div class="navbar navbar-default topnav">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" @click="toggleNav">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <router-link to="/" class="navbar-brand">
                    <span class="title">{{ logo.title }}</span>
                    <img :src="logo.src" :alt="logo.title">
                </router-link>
            </div>

            <div id="top-navbar-collapse" :class="['collapse', 'navbar-collapse', { in: showCollapsedNav }]">
                <ul class="nav navbar-nav">
                    <li v-for="(item, index) in navList" :class="{ active: index === activeNavIndex }">
                        <a href="#" @click="changeNavIndex(index)">{{ item }}</a>
                    </li>
                </ul>

                <!-- 入口组件 -->
                <TheEntry/>
            </div>
        </div>
    </div>
</template>

<script>
    // 引入 TheEntry.vue 的默认值
    import TheEntry from "@/components/layouts/TheEntry";

    export default {
        name: 'TheHeader',
        data() {
            return {
                logo: {
                    src: `${this.uploadsUrl}sites/ByvFbNlQYVwhvTyBgLdqitchoacDNznN.jpg`,
                    title: 'VuejsCaff'
                },
                navList: ['博客', '教程', '关于本站'],
                activeNavIndex: 0,
                showCollapsedNav: false
            }
        },
        beforeCreate() {
            this.uploadsUrl = 'https://vuejscaffcdn.phphub.org/uploads/'
        },
        methods: {
            // 切换导航
            changeNavIndex(index) {
                this.activeNavIndex = index
            },
            // 小屏幕 - 下显示导航
            toggleNav() {
                this.showCollapsedNav = !this.showCollapsedNav
            }
        },
        components: {
            TheEntry
        }
    }
</script>

<style lang="scss" scoped>
    .title {
        display: none;
    }

    .navbar-default .navbar-nav > li.active > a {
        color: $active-color;
    }
</style>
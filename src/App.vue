<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="aaa">
        <RouterLink to="/">Go to Home</RouterLink> |
        <RouterLink to="/about">Go to About</RouterLink>
    </div>
    <RouterView />
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { getDemo } from '/@/api';

    export default defineComponent({
        name: 'App',
        setup() {
            getDemo().then((res) => {
                console.error('resr', res);
            });
        },
    });
</script>

<style lang="less">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

<template>
    <div class="index">首页</div>
    <div>用户名: {{ username }}</div>
    <button @click="changeName">改变名字</button>
</template>

<script lang="ts">
    import { defineComponent, computed } from 'vue';
    import { commonStore as store } from '/@/store/common';
    export default defineComponent({
        setup() {
            const username = computed(() => store.username);

            const changeName = () => {
                store.fetchUsername('aaaaa');
            };

            return { username, changeName };
        },
    });
</script>
<style></style>

<template>
    <div>
        <router-view />
    </div>
</template>

<script>
    import {useRoute, useRouter} from 'vue-router'
    export default {
        name: 'App',
        setup(){
            return {  }
        }
    }
</script>
<style lang="scss" >
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
</style>

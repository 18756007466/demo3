<template>
    <div class="order">
        <div class="header">
            <span>{{shop_name}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'Order',
    data(){
        return {
            shop_name:''
        }
    }
}
</script>

<style scope>
    .header{
        height: 45px;
        background-color: cadetblue;
        width: 100%;
    }
</style>
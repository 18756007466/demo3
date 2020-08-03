<template>
    <div class="home">
        <div class="head">
            <p>JRDスマートオーダー管理システム</p>
            <div class="head_img">
                <img src="../assets/image/menu.png" class="menu" @click="menushow">
                <img src="../assets/image/user.png" class="user" @click="logout">
            </div>
        </div>
        <div class="fixed" :style="'height:'+ shadowHeight" ref="fixed">
            <p>确认退出？</p>
            <div>
                <el-button type="warning" @click="shadowpush">确定</el-button>
                <el-button type="info" @click="shadowHidden">取消</el-button>
            </div>
        </div>
        <el-menu
        :class="show?'shows':'hidden'"
        :style="'height:'+asideHeight"
        background-color="#222D32"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-menu"></i>
                <span>注文在庫管理</span>
            </template>
            <el-menu-item :index="'1'+index" v-for="(item,index) in menus" :key="index" @click="rout(item.rout)">{{item.menu}}</el-menu-item>
        </el-submenu>
        </el-menu>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    name:'Home',
    data(){
        return {
            menus:'',
            asideHeight:'',
            show:false,
            shadowHeight:''
        }
    },
    mounted(){
        this.init();
        this.asideHeight = document.documentElement.clientHeight - 96 + 'px';
        this.shadowHeight = document.documentElement.clientHeight + 'px';
    },
    methods:{
        init(){
            this.$axios.get('../../static/menus.json')
            .then(res=>{
                if(res.status == 200){
                    this.menus = res.data;
                }else{
                    Toast({
                        message: '获取数据错误',
                        duration: 2000
                    });
                }
            })
            .catch(err=>{
                Toast({
                    message: '系统错误',
                    duration: 2000
                });
            })
        },
        menushow(){
            this.show = !this.show 
        },
        rout(code){
            this.show =!this.show;
            const Route={
                order:'Order',
                stock:'Stock'
            }
            this.$router.push({
                name:Route[code]
            })
        },
        logout(){
            this.show = false;
            this.$refs.fixed.style.display = 'block';
        },
        shadowpush(){
            sessionStorage.clear();
            this.$router.push({
                name:'Login'
            })
        },
        shadowHidden(){
            this.$refs.fixed.style.display = 'none';
        }
    }
}
</script>

<style scope>
    .head{
        width: 100%;
        /* position: relative; */
    }
    .head p{
        height: 48px;
        background-color: #367FA9;
        font-size: 13px;
        text-align: center;
        line-height: 48px;
        color: #fff;
    }
    .head_img{
        height: 48px;
        background-color: #3C8DBC;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .head_img .menu{
        width: 20px;
        margin-left: 15px;
    }
    .head_img .user{
        width: 28px;
        margin-right: 15px;
    }
    .el-menu{
        width: 200px;
        position: fixed;
        /* left: -200px; */
    }
    .shows{
        transition: .5s;
        transform: translate(0px);
    }
    .hidden{
        transition: .5s;
        transform: translate(-200px);
    }
    .fixed{
        display: none;
        position: fixed;
        width:100%;
        background: rgba(15, 15, 15, 0.527);
        left: 0;
        top: 0;
    }
    .fixed p{
        text-align: center;
        margin: 50% 0 20px;
        color: #fff;
        font-size: 17px;
    }
    .fixed div{
        text-align: center;
    }
</style>
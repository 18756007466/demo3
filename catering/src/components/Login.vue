<template>
    <div class="login" :style="'height:'+height_page">
        <div class="login_title">
            <img src="../assets/image/logo.png" alt="logo">
            <p class="login_title_japan">JRDスマートオーダー管理システム</p>
            <p>Shanghai jorudan share-catering management system</p>
        </div>
        <div class="login_from">
            <input type="text" placeholder="ID" v-model="data_from.username">
            <input type="password" placeholder="パスワード" v-model="data_from.password"> 
            <button @click="submit">ログインします</button>
        </div>
        <div>
            wgq
        </div>
    </div>
</template>

<script>
import { Toast,Indicator  } from 'mint-ui';
export default {
    name:'Login',
    data(){
        return {
            height_page:'',
            data_from:{
                username:'',
                password:''
            }
        }
    },
    mounted(){
        this.height_page = document.documentElement.clientHeight + 'px';        
    },
    methods:{
        submit(){
            if(this.data_from.username == ''){
                Toast({
                    message: '请输入用户id',
                    duration: 2000
                });
                return
            }
            if(this.data_from.username == '' || this.data_from.password.length<6){
                Toast({
                    message: '密码长度需要大于6位',
                    duration: 2000
                });
                return
            }
            Indicator.open()
            this.$axios.post('',this.data_from)
            .then(res=>{
                if(res.result == 1){
                    // 数据存储
                    Indicator.close()
                    window.sessionStorage.setItem('menus',JSON.stringify(res.menus))
                    this.$router.push({
                        name:'Home'
                    })
                }else{
                    Toast({
                        message: '没有数据',
                        duration: 2000
                    });
                }
            })
            .catch(err=>{
                Indicator.close()
                Toast({
                    message: '系统错误',
                    duration: 2000
                });
            })
        }
    }
}
</script>

<style scope>
    .login{
        background-color: cornflowerblue;
    }
    .login_title,.login_from{
        text-align: center;
    }
    img{
        margin-top: 70px;
        width: 120px;
    }
    p{
        color: #fff;
        margin-top: 10px;
    }
    .login_title_japan{
        font-size: 16px;
    }
    .login_from{
        margin-top: 20px;
    }
    input,button{
       margin-top: 10px;
       width: 70%;
       border: none;
       outline: none;
       height: 30px;
    }
    input{
        text-indent: 10px;
    }
    button{
       background: rgb(96, 221, 96);
       border-radius: 20px;
       color: #fff;
    }
</style>
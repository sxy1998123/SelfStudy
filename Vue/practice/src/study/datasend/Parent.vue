<template>
    <div id='Parent'>
         <Son1 :value='son1_name' @changeName='changeName'></Son1>
         <Son2></Son2>
    </div>
</template>

<script>
import Son1 from './Son1';
import Son2 from './Son2';
    export default {
        methods:{
            changeName(){
              this.son1_name = 'zss';
            }
        },
        data(){
            return {
                son1_name:'zs',
                son2_name:'ls'
            }
        },
        components:{
          Son1,
          Son2
        }
    }
</script>

<style scoped>

</style>
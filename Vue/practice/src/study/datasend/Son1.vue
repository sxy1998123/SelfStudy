<template>
    <div id='son1'>
        <div @click='change'>My name is {{value}}</div>
    </div>
</template>

<script>
    export default {
        props:{
           value:{
               type:String,
               default:'default'
           }
        },
        data(){
            return {
                name:'default'
            }
        },
        methods:{
            change(){
                console.log(this._events)
                this.$emit('changeName')
            }
        }
    }
</script>

<style scoped>

</style>
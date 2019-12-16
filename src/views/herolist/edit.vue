<template>
  <!-- 本模块是编辑功能 -->
   <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">英雄名字</label>
            <input type="text" v-model=' formData.name' class="form-control" id="exampleInputEmail1" placeholder="请输入英雄名字">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">性别</label>
            <input type="text" v-model=' formData.gender'  class="form-control" id="exampleInputPassword1" placeholder="请输入英雄性别">
          </div>
          <!-- <div class="form-group">
            <label for="exampleInputFile">File input</label>
            <input type="file" id="exampleInputFile">
            <p class="help-block">Example block-level help text here.</p>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox"> Check me out
            </label>
          </div> -->
          <button type="button" @click='edithero' class="btn btn-success">编辑</button>
        </form>
      </div>
</template>

<script>
import axios from'axios'
export default {
     data(){
      return{
        formData:{ name:'',
                   gender:'',
                   }
      }
  },
   methods:{
       loadhero(){
           var id = this.$route.params.id
            if(id){
               this.$axios.get('/heroes/'+id).then((res)=>
                {
                    this.formData=res.data
                })
            }

       },
       edithero(){
            if(this.formData.name.trim()&&this.formData.gender.trim()) {

              this.$axios.put(`/heroes/${this.formData.id}`,this.formData).then((res)=>{
                        this.$router.push('/hero')
               })
         }
       }
   },
   created(){
     this.loadhero()
   }
}
</script>

<style>

</style>
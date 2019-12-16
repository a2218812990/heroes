<template>
  <div>
                <h2 class="sub-header">英雄列表</h2>
                <router-link  class="btn btn-success" to='/hero/addHero'>添加</router-link>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>姓名</th>
                                <th></th>
                                <th></th>
                                <th>性别</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for='item in list' :key='item.id'>
                                <td>{{item.id}}</td>
                                <td>{{item.name}}</td>
                                <td></td>
                                <td>{{item.gender}}</td>
                                <td></td>
                                <td>
                                    <router-link :to="`/hero/editHero/${item.id}`">编辑</router-link>&nbsp;&nbsp;
                                    <a href='#' @click='delhero(item.id)'>删除</a>
                                </td>
                            </tr>
                
                        </tbody>
                    </table>
                </div>
            </div>
</template>

<script>
import axios from 'axios'
export default {

      data(){
          return{

              list:[]
          }
      },
      methods:{
          gethero(){

              this.$axios.get('/heroes').then((res)=>{
                    this.list=res.data
              })
          },
          delhero(id){
           this.$axios.delete(`/heroes/${id}`).then((res)=>{
                 if(confirm('你确定要删除吗？')){
                      this.gethero()
                 }
                    
              })
          },
          addhero(){

          }
      },
      created(){
          this.gethero()
      }
}
</script>

<style>

</style>
<template>
  <div>
    我是user
    <div class="user-list">
      <router-link style="padding: 0 20px;" :to="'/user/'+item.tip+'/'+item.id" key="index" v-for="(item,index) in userList">{{item.userName}}</router-link>
    </div>
    <div class="user-info" v-if="userInfo.userName" style="font-size: 20px">
      <p>姓名：{{userInfo.userName}}</p>
      <p>性别：{{userInfo.sex}}</p>
      <p>爱好：{{userInfo.hobby}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  let data = [
    {
      id: 1,
      tip: 'vip',
      userName: 'leo1',
      sex: '男',
      hobby: '写代码'
    },
    {
      id: 2,
      tip: 'vip',
      userName: 'leo2',
      sex: '男',
      hobby: '唱歌'
    },
    {
      id: 3,
      tip: 'common',
      userName: 'leo3',
      sex: '男',
      hobby: '读书'
    }
  ]
  export default {
    data () {
      return {
        userList: data,
        userInfo: {}
      }
    },
    mounted () {
      let id = this.$route.params.userId
      // alert(id)
      this.userInfo = this.userList.filter((item) => {
        return item.id === +id
      })[0]
      // for (let item of this.userList) {
      //   console.log(item.id)
      //   if (item.id === +id) {
      //     this.userInfo = item
      //   }
      // }
      console.log(this.userInfo)
    }
  }
</script>

<style>

</style>

<template>
  <div class="Index">
    <v-input v-model="inn" label="去去去我" label-location="left"></v-input>
    {{inn}}
    <v-select v-model="ins" :selectList='list' label="所得到的" label-location="left" @input="getInputAction"></v-select>
    当前选中的id{{ins}}
    <v-dialog
      :opendialog.sync="openDialog">
      <div slot="content">
        dddd
      </div>
      <!-- <span slot="footer">
        HHH
      </span> -->
    </v-dialog>
    <div style="margin-top:30px">
      <v-button @click="getInputAction" :disabled=true type="primary">点击</v-button>
      <v-button @click="getInputAction" type="success">点击</v-button>
      <v-button @click="getInputAction" type="warning">点击</v-button>
      <v-button @click="getInputAction" type="danger">点击</v-button>
      <v-button @click="getInputAction" :disabled=true >点击</v-button>
    </div>
  </div>
</template>

<script>
import VInput from '@/components/VInput/VInput';
import VSelect from '@/components/VSelect/VSelect';
import VDialog from '@/components/VDialog/VDialog';
import VButton from '@/components/VButton/VButton';

export default {
  name: 'Index',
  components:{
      "v-input": VInput,
      'v-select': VSelect,
      'v-dialog': VDialog,
      'v-button': VButton
  },
  data () {
    return {
      openDialog: false,
      ins:'',
      inn: '对对对',
      list: []
    } 
  },
  mounted () {
    setTimeout(()=>{
      this.ins = '2';
    },200)
    setTimeout(()=>{
      this.list = [{
          id:1,
          name:'hhh'
        },
        {
          id:2,
          name:'www'
        },
        {
          id:3,
          name:'ddd'
        },
        {
          id:4,
          name:'fff'
        },
        {
          id:5,
          name:'qqq'
        },
        {
          id:6,
          name:'fff'
        },
        {
          id:7,
          name:'hkk'
        }]
    },30)
  },
  methods:{
    getInputAction(event){
      this.openDialog = !this.openDialog;
    }
  }
}
</script>

<style>
</style>
<template>
  <div class="vSelectTemplate" :style="{ display :  labelLocation == 'left' ? 'flex' : 'block' }">
    <span class="vSelectLabel" v-if="label" :style="{ width : labelWidth, textAlign: labelTextAlgin}">{{label}}</span>
    <div class="vSelectBox" :style="{ width : width }" @keyup="keyupAction($event)">
      <input 
      class="vSelect"
      v-model="currentName"
      :placeholder="vPlaceholder"
      v-bind="$props"
      autocomplete="off"
      ref="input"
      readonly
      @input="inputAction($event)"
      @click="openSelectAction()"
     >
     <span class="iconSelectArrows" :class="iconArrowsActive ? 'active' : ''" @click="openSelectAction()"><i class="iconfont icon-xiajiantou"></i></span>
     <input class="vSelectNone" :value="currentValue" type="text">
     <div class="vSelectListBox" 
     :class="arrowsActive ? 'active' : ''"  
     ref='vSelectList'>
      <ul class="vSelectList">
        <li class="vSelectItem" 
          ref='vSelectItem'
          v-for="item in items" 
          :class="item.status ? 'active' : ''"
          :key="item[id]" 
          @preven = event.preventDefault()
          @click="setItemAction(item)">
          {{ item[name] }}
        </li>
      </ul>
     </div>
    </div>
  </div>
</template>
<script>
/**
  * auther: liudehua
  * createTime: 20180305
  * description: select ui element
  * newTime: 20180306
  */
export default {
  name: 'VSelect',
  data () {
    return {
      currentValue: this.value,
      currentName: '',
      iconArrowsActive: false,
      arrowsActive: false,
      items:[]
    }
  },
  props: {
      value: [String, Number],
      id: {
        type: String,
        default: 'id'
      },
      name: {
        type: String,
        default: 'name'
      },
      selectList: {
        type: Array,
        default: () => {
            return []
        }
      },
      label: String,
      labelWidth:{
        type: String,
        default: '5rem'
      },
      labelTextAlgin: {
        type: String,
        default: 'right'
      },
      labelLocation:{
        type: String,
        default: 'left'
      },
      width: {
        type: String,
        default: '10rem'
      },
      vPlaceholder: {
        type: String,
        default: '请输入'
      },
      vReadonly: {
        type: Boolean,
        default: false
      }
  },
  mounted () {    
    this.items = this.selectList;
  },
  methods: {
    inputAction (event) {
      
    },
    /**
     * 操作上下键位 选择select 
     */
    keyupAction (event){
      if(this.arrowsActive && event.keyCode == 38){
        if(this.items.length){
          let i = 0;
          this.items.forEach((element,index) => {
            if(element.status){
              if(index == 0){
                i = this.items.length - 1;
              }else{
                i = index - 1;
              }
            }
            element.status = false;
          });
          this.items[i].status = true;
          if(i == this.items.length - 1){
            this.$refs.vSelectList.scrollTop = i * 32; 
          }else{
            this.$refs.vSelectList.scrollTop = (i - 4) * 32; 
          }
        }
      }
      if(this.arrowsActive && event.keyCode == 40){
        event.stopPropagation();
        if(this.items.length){
          let i = 0;
          this.items.forEach((element,index) => {
            if(element.status){
              if(index == this.items.length - 1){
                i = 0;
              }else{
                i = index + 1;
              }
            }
            element.status = false;
          });
          this.items[i].status = true;
          if(this.$refs.vSelectItem[i].offsetTop > 132){
            this.$refs.vSelectList.scrollTop = (i - 4) * 32; 
          }
          if(i == 0){
            this.$refs.vSelectList.scrollTop = 0; 
          }
        }
      }
      if(this.arrowsActive && event.keyCode == 13){
        /**
         * 回车操作选中
         */
        this.items.forEach(item => {
          if(item.status){
            this.setItemAction(item);
          }
        });
      }
    },
    setInputAction(){
      
    },
    setItemAction(item = {}){
      if(this.value != item[this.id]){
        this.$emit('input', item[this.id]);
      }
      this.openSelectAction();
    },
    getInputValueAction(){
      if(this.items.length && this.value){
        this.items.forEach(element => {
          if(this.value == element[this.id]){
            this.currentName = element[this.name];
            element.status = true;
          }else{
            element.status = false;
          }
        });
      }
    },
    openSelectAction(){
      this.iconArrowsActive = !this.iconArrowsActive;
      this.arrowsActive = !this.arrowsActive;
    }
  },
  watch: {
    'value'(val, oldValue){
      this.getInputValueAction();
    },
    'selectList'(val, oldValue){
        this.items = this.selectList;
        if(this.items.length){
          this.items.forEach((e,i) => {
            this.$set( this.items[i], 'status', false );
          });
          this.getInputValueAction();
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .vSelectTemplate{
    display: flex;
    align-items: center;
    .vSelectBox{
      height: 2rem;
      line-height: 2rem;
      border: .0625rem solid #e4e7ed;
      border-radius: .1875rem;
      padding: 0 .75rem; 
      position: relative;
      cursor: pointer;
      .vSelect{
        border: 0;
        width: 100%;
        outline:medium;
        cursor: pointer;
        height: 1.6rem;
      }
      .iconSelectArrows{
        text-align: center;
        position: absolute;
        right: 0;
        top: 0;
        width: 2rem;
        height: 2rem;
        color: #c0c4cc;
        transform: rotate(0deg);
        transition: transform 300ms ease-in-out;
        i{
          font-size: .875rem;
        }
      }
      .iconSelectArrows.active{
        transform: rotate(180deg);
        transition: transform 300ms ease-in-out;
      }
    }
    .vSelectLabel{
      font-size: .75rem;
      display: block;
      height: 2rem;
      line-height: 2rem;
      margin-right: .5rem;
      color: #666;
    }
    .vSelectNone{
      display: none;
    }
    .vSelectListBox{
      max-height: 0;
      overflow-y: auto;
      min-width: 100%;
      position: absolute;
      left: 0;
      top: 2.1rem;
      transition: max-height 200ms ease-in-out;
      border-radius: 0 0 .25rem .25rem;
      background-color: #fff;
      box-shadow: 0 .125rem .75rem 0 rgba(0,0,0,.1);
      box-sizing: border-box;
    }
    .vSelectListBox.active{
      max-height: 10.5rem;
      transition: max-height 200ms ease-in-out;
    }
    .vSelectList{
      padding: .25rem 0; 
      background-color: #fff;
      box-shadow: 0 .125rem 0.75rem 0 rgba(0,0,0,.1);
      li{
        padding: 0 .75rem;
        height: 2rem;
        line-height: 2rem;
        font-size: 12px;
        cursor: pointer;
        user-select:none;
        text-align: left;
      }
      li.active{
        background: #f5f7fa;
        color: #409eff;
      }
      li:hover{
        background: #f5f7fa;
      }
    }
  }
</style>

<template>
  <div class="vInputTemplate" :style="{ display :  labelLocation == 'left' ? 'flex' : 'block' }">
    <span class="vInputLabel" v-if="label" :style="{ width : labelWidth, textAlign: labelTextAlgin}">{{label}}</span>
    <div class="vInputBox" :style="{ width : width }">
      <input 
      class="vInput"
      :type="type" 
      :value="currentValue"
      :placeholder="vPlaceholder"
      v-bind="$props"
      @input="inputAction"
      ref="input"
    >
    </div>
  </div>
</template>
<script>

export default {
  name: 'VInput',
  data () {
    return {
      currentValue: this.value,
    }
  },
  props: {
      value: [String, Number],
      label: String,
      labelWidth :{
        type: String,
        default: '5rem'
      },
      labelTextAlgin: {
        type: String,
        default: 'right'
      },
      labelLocation: {
        type: String,
        default: 'left'
      },
      width: {
        type: String,
        default: '10rem'
      },
      type: {
        type: String,
        default: 'text'
      },
      vPlaceholder: {
        type: String,
        default: '请输入'
      },
      beforeClose: Function,

  },
  mounted () {    

  },
  methods: {
    setValueAction(){

    },
    inputAction(event) {
      const value = event.target.value;
      this.$emit('input', value);
      this.beforeClose();
    },
  },
  watch: {
    'value'(val, oldValue){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import './../../assets/css/staticvrariable.scss';
  
  .vInputTemplate{
      display: flex;
      text-align: left;
      align-items: center;
      .vInputBox{
        height: 2rem;
        line-height: 2rem;
        border: .0625rem solid #e4e7ed;
        border-radius: .1875rem;
        padding: 0 .75rem; 
        .vInput{
          border: 0;
          width: 100%;
          height: 1.6rem;
          outline:medium;
        }
      }
      .vInputLabel{
        font-size: .75rem;
        display: block;
        height: 2rem;
        line-height: 2rem;
        margin-right: .5rem;
        color: #666;
      }
  }
</style>

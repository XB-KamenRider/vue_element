<template>
  <button 
    class="vButton"
    @click="clickAction"
    :class="`vButton${type} ${ disabled ? 'disabled' : '' }`"
    :disabled="disabled"
    :type="nativeType"
  >
    <i class="iconfont icon-loading" v-if="loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'VButton',
  data () {
    return {
      
    }
  },
  props: {
      loading: Boolean,
      disabled: Boolean,
      type:{
        type: String,
        default: 'text'
      },
      nativeType: {
        type: String,
        default: 'button'
      },
  },
  mounted () {    

  },
  methods: {
    setValueAction() {

    },
    clickAction(event) {
      if (this.disabled) {
          event.stopPropagation();
      }else{  
          this.$emit('click', event);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .vButton {
    border: .0625rem solid #dcdfe6;
    padding: .75rem 1.25rem;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    white-space: nowrap;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    font-size: .875rem;
    border-radius: .25rem;
    &:hover,&:focus {
      background: #ecf5ff;
      border-color: #b3d8ff;
      color: #409eff;
    }
    &.disabled{
      cursor: not-allowed;
      background: #fff;
      border-color: #ebeef5;
      color: #c0c4cc;
    }
  }
  .vButtonprimary {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
    &:hover,&:focus,&.disabled {
      background: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
  }
  .vButtonsuccess {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
    &:hover,&:focus,&.disabled {
      background: #85c161;
      border-color: #85c161;
      color: #fff; 
    }
  }
  .vButtonwarning {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
    &:hover,&:focus,&.disabled {
      background: #ebb563;
      border-color: #ebb563;
      color: #fff;
    }
  }
  .vButtondanger {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
    &:hover,&:focus,&.disabled {
      background: #f78989;
      border-color: #f78989;
      color: #fff;
    }
  }
</style>

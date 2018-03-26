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
  @import './../../assets/css/staticvrariable.scss';

  .vButton {
    border: .0625rem solid $grayColor;
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
      background: $defaultColor;
      border-color: $bdDefaultColor;
      color: $primaryColor;
    }
    &.disabled{
      cursor: not-allowed;
      background: $bgFColor;
      border-color: $bdGrayColor;
      color: $grayColor;
    }
  }
  .vButtonprimary {
    background: $primaryColor;
    border-color: $primaryColor;
    color: $fColor;
    &:hover,&:focus,&.disabled {
      background: lighten($primaryColor,5%);
      border-color: lighten($primaryColor,5%);
      color: $fColor;
    }
  }
  .vButtonsuccess {
    background: $successColor;
    border-color: $successColor;
    color: $fColor;
    &:hover,&:focus,&.disabled {
      background: lighten($successColor,5%);
      border-color: lighten($successColor,5%);
      color: $fColor; 
    }
  }
  .vButtonwarning {
    background: $warningColor;
    border-color: $warningColor;
    color: $fColor;
    &:hover,&:focus,&.disabled {
      background: lighten($warningColor,5%);
      border-color: lighten($warningColor,5%);
      color: $fColor;
    }
  }
  .vButtondanger {
    background: $dangerColor;
    border-color: $dangerColor;
    color: $fColor;
    &:hover,&:focus,&.disabled {
      background: lighten($dangerColor,5%);
      border-color: lighten($dangerColor,5%);
      color: $fColor;
    }
  }
</style>

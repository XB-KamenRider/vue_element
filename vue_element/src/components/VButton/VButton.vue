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
import './VButton.scss'

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
  
</style>

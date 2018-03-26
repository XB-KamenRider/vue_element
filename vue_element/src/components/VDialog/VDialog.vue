<template>
  <div class="vDialogShade" v-show="opendialog">
    <div class="vDialogWrapper" ref="vDialog" :style="{ 'width':width, 'margin-top':top }">
      <div class="vDialogHeader" v-if="isHeader">
        <span>{{title}}</span>
        <span class="vIcon" @click="closeDialogAction()">
          <i class="vCloseDialog iconfont icon-web-icon-"></i>
        </span>
      </div>
      <div class="vDialogContent">
        <slot name="content"></slot>
      </div>
      <div class="vDialogFooter" v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import './VDialog.scss'

export default {
  name: 'VDialog',
  data () {
    return {
      closed: false
    }
  },
  props:{
    opendialog:Boolean,
    isHeader:{
      type: Boolean,
      default: true
    },
    width:{
      type: String,
      default: '30rem'
    },
    title: {
      type: String,
      default: '标题'
    },
    top: {
      type: String,
      default: '15%'
    },
    beforeCloseAction: Function,
  },
  mounted () {
  },
  watch: {
    opendialog(val) {
      if (val) {
        this.closed = false;
        this.$nextTick(() => {
          this.$refs.vDialog.scrollTop = 0;
        });
      }
    }
  },
  methods:{
    getInputAction(event){
     
    },
    closeDialogAction(){
      if (typeof this.beforeCloseAction === 'function') {
          this.beforeCloseAction(this.setHideAction);
      } else {
        this.setHideAction();
      }
    },
    setHideAction(cancel) {
      if (cancel !== false) {
        this.$emit('update:opendialog', false);
        this.closed = true;
      }
    },
  },
  
}
</script>

<style lang="scss" scoped>
    
</style>
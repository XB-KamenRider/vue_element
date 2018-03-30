<template>
  <transition name="fadebox">
    <div v-if="opendialog">
      <div class="vDialogShade" @click="closeDialogAction()">
      
      </div>
      <div class="vDialogWrapper" ref="vDialog" 
        :style="{ 'width':width, 'top':top }">
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
  </transition>
</template>
<script>

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
          // 重启弹窗  使滚动条滚动到顶部
          this.$refs.vDialog.scrollTop = 0;
        });
      }else{
        
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
  errorHandler(err, vm, info){
    console.log(err, vm, info)
  },
  arnHandler(msg, vm, trace) {
    console.log(msg, vm, trace)
  }
}
</script>

<style lang="scss" scoped>
    @import './../../assets/css/staticvrariable.scss';

    .vDialogShade{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.2);
        z-index: 1994;
      }
      .vDialogWrapper{
        position: fixed;
        left: 0;
        right: 0;
        margin: 0 auto;
        background: #fff;
        border-radius: .125rem;
        box-shadow: 0 .0625rem .1875rem rgba(0,0,0,.3);
        box-sizing: border-box;
        z-index: 1995;
      }
      .vDialogHeader{
        height:3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .625rem;
        border-bottom: .0625rem solid #dfdfdf;
        color: #666;
      }
      .vDialogContent{
        padding: 1.25rem .625rem;
      }
      .vDialogFooter{
        height: 4.5rem;
        display: flex;
        align-items: center;
        justify-content: flex-end; 
        border-top: .0625rem solid #dfdfdf;
        padding: 0 .625rem
      }
      .vIcon{
        color: #666;
        cursor: pointer;
        &:hover{
          color: #409eff;
        }
        i{
          font-size: 1.25rem;
        }
    } 
    .fadebox-enter-active, .fadebox-leave-active {
      transition: opacity .5s;
    }
    .fadebox-enter, .fadebox-leave-to {
      opacity: 0;
    }
</style>
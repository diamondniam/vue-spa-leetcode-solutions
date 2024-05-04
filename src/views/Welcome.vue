<script>
import VueIcon from '../components/icons/VueIcon.vue'
import LeetCodeIcon from '../components/icons/LeetCodeIcon.vue'
import PiniaIcon from '../components/icons/PiniaIcon.vue'

export default {
  components: { VueIcon, LeetCodeIcon, PiniaIcon }
}
</script>

<template>
  <div class="welcome-container">
    <div class="head">
      <div class="title">LeetCode solutions.</div>
      <div class="subtitle">by <span>Diamond Niam</span></div>
    </div>
    <div class="images">
      <VueIcon/>
      <LeetCodeIcon/>
      <PiniaIcon/>
    </div>
    
  </div>
</template>

<style lang="scss">
.welcome-container {
  display: flex;
  min-height: 90vh;
  align-items: center;
  width: 100%;

  .head {
    margin-left: 10%;
    box-sizing: border-box;
    width: 50%;

    .title {
      line-height: .9;
      background: -webkit-linear-gradient(-10deg, var(--green-color-1) 5%, rgb(64, 217, 181) 30%, rgb(8, 98, 101));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 90px;
    }

    .subtitle {
      background: -webkit-linear-gradient(-10deg, rgb(74, 175, 141) 10px, rgb(149, 215, 218));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-top: 20px;
      font-size: 20px;

      span {
        font-size: 25px;
      }
    }
  }

  .images {
    width: 50%;
  }
}
</style>
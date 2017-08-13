<template>
  <div id="bottomBar">
    <div class="barItems">
      <div class="item">
        <p><span>Mail</span></p>
        <div>camillakoster<br>@gmail.com</div>
      </div>
      <div class="item">
        <p><span>Telefon</span></p>
        <div>0766167501</div>
      </div>
      <div class="item">
        <p><span>Adress</span></p>
        <div>Libacka gård, <br>
          Liebacksvägen,<br>
          231 93 Trelleborg</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bottomBar',
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
#bottomBar {
  max-height: 140px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  color: #5b4c3e;
  background-color: #d9ebf5;
  bottom: 0;
  width: 100%;
  padding: 20px 0 30px 0;
  margin: 50px 0;
}

#bottomBar .barItems {
  display: flex;
  width: 80vw;
  margin: auto;
  align-items: row;
}

#bottomBar .item{
  max-width: 13%;
  margin: 0 20px;
  word-break: break-all;
}

#bottomBar p {
  font-weight: bolder;
  padding: 0;
  margin: 0;
  text-align: left;
  padding: 10px 0;
}
#bottomBar p > span{
  padding: 0 7px;
  border-bottom: 1px solid #cabc5b;
}
</style>

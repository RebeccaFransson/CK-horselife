<template>
  <div id="bottomBar">
    <div class="barItems">
      <div class="item">
        <p>Adress</p>
        <div>Kollektiva Jämförelser i Sverige AB 556979-4596 Baltzarsgatan 18, 211 36 Malmö</div>
      </div>
      <div class="item">
        <p>Mail</p>
        <div>kontakt@kollektiva.se</div>
      </div>
      <div class="item">
        <p>Telefon</p>
        <div>0766167501</div>
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
  position: absolute;
  background-color: #8c9da7;
  bottom: 0;
  width: 100%;
}

#bottomBar .barItems {
  width: 80vw;
  margin: auto;
}

#bottomBar .item{
  max-width: 200px;
}

#bottomBar p {
  font-weight: bolder;
  padding: 0;
  margin: 2px 0 2px 10px;
  text-align: left;
}
</style>


import snabbt
<template>
    <div id="navigation">
      <div class="navColumn">
        <div @click="openPopup('Gården')" class="navPicture">
          <h3>Gården</h3>
        </div>
      </div>
      <div class="navColumn">
        <div @click="openPopup('Hästar')" class="navPicture">
          <h3>Hästar</h3>
        </div>
      </div>
      <div class="navColumn">
        <div @click="openPopup('Inackodering')" class="navPicture">
          <h3>Inackodering</h3>
        </div>
      </div>
      <div class="navColumn">
        <div @click="openPopup('Medryttare')" class="navPicture">
          <h3>Medryttare</h3>
        </div>
      </div>
      <div class="navColumn">
        <div @click="openPopup('Uppföding')" class="navPicture">
          <h3>Uppfödning</h3>
        </div>
      </div>
    </div>
</template>


<script>
export default {
  name: 'topBar',
  props: {
    openPopup: {
      type: Function
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300');

#navigation {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: 340px;
}
#navigation .navColumn {
  color: #826849;
  width: min-content;
  width: 300px;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2vh 1.5vw;
  flex-grow: 1;
}
#navigation .navColumn h3{
  font-size: 20px;
  width: 100%;
  background-color: rgba(250, 235, 215, 0.49);
  transition: .5s ease;
}
#navigation .navColumn .navPicture {
  max-height: 50vh;
  display: flex;
  align-items: flex-start;
  width: 100%;
  min-height: 70vh;
  justify-content: center;

  background-position: center;
  background-size: cover;

  border: white 1px solid;

  cursor: pointer;

  transition: .5s ease;
}

#navigation .navColumn .navPicture:hover h3 {
  font-size: 22px;
}
#navigation .navColumn .navPicture:hover {
  transform: scale(1.03);
}
#navigation .navColumn:nth-child(1) .navPicture {
  background-image: URL('../../static/albin.jpg');
}
#navigation .navColumn:nth-child(2) .navPicture {
  background-image: URL('../../static/shirin.jpg');
  color: #403427;
}
#navigation .navColumn:nth-child(3) .navPicture {
  background-image: URL('../../static/shirin2.jpg');
}
#navigation .navColumn:nth-child(4) .navPicture {
  background-image: URL('../../static/sto.jpg');
}
#navigation .navColumn:nth-child(5) .navPicture {
  background-image: URL('../../static/kli.jpg');
  background-position: 51%;
}
</style>


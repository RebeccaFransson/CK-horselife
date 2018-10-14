<template>
  <div id="popupWrapper" class="container">
    <div class="row">
      <div class="col">
        <div class="float-right icon" @click="closePopup">&#10006;</div>
      </div>
    </div>
    <div class="row scrollable">
      <rentBox   v-if="whichPopup === rentBox"></rentBox>
      <theFarm   v-if="whichPopup === theFarm"></theFarm>
      <riding    v-if="whichPopup === riding"></riding>
      <riding-one-horse  v-if="whichPopup === ridingOneHorse"></riding-one-horse>
      <horses    v-if="whichPopup === horses"></horses>
      <gallery   v-if="whichPopup === gallery"></gallery>
      <events    v-if="whichPopup === events"></events>
    </div>
  </div>
</template>

<script>
/***/
import TheFarm from './popups/TheFarm'
import RentBox from './popups/RentBox'
import Riding from './popups/Riding'
import RidingOneHorse from './popups/RidingOneHorse'
import Horses from './popups/Horses'
import Gallery from './popups/Gallery'
import Events from './popups/Events'

export default {
  name: 'popup',
  components: {
    TheFarm,
    RentBox,
    Riding,
    RidingOneHorse,
    Horses,
    Gallery,
    Events
  },
  props: {
    whichPopup: {
      type: String
    },
    closePopup: {
      type: Function
    }
  },
  /**BYT UT DESSA TILL EGEN FIL SÅ BÅDE NAVIGATION OCH POPUP KAN ANVÄNDA */
  data: () => {
    return {
      popupName: '',
      rentBox:  'rentBox',
      theFarm:  'theFarm',
      riding:   'riding',
      ridingOneHorse: 'ridingOneHorse',
      horses:   'horses',
      gallery:  'gallery',
      events:   'events'
    }
  }
}
</script>

<style>
.icon{
  cursor: pointer;
  font-size: 28px;
}
.scrollable{
  overflow: scroll;
  position: relative;
  height: 64vh;
}
.opend{
  top: 0 !important;
  transition: top 0.5s ease !important;
}
.closed{
  top: 200vw !important;
  transition: top 0.5s ease !important;
}

@media (min-width: 768px){
  #popupWrapper {
      max-width: 97vw !important;
  }
}

@media (min-width: 576px){
  #popupWrapper {
      max-width: 97vw !important;
  }
}
#popupWrapper {
  position: relative;
  height: 80vh;
  width: 97vw;
  overflow: hidden;
  align-self: center;
  background-color: white;
  margin: auto;
  border: 8px solid white;
  transition: all 2.5s ease;
}

#popupWrapper .topBar {
  color: #403427;
  display: flex;
  justify-content: flex-end;
  
  padding: 10px;
  /* On top of popupScroll */
  z-index: 20;
  position: relative;
}

#popupWrapper .topBar .close {
  cursor: pointer;
  font-size: 250%;
  padding: 0 15px;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
  transition: all .5s ease;
}

#popupWrapper .topBar .close:hover {
  transform: scale(1.25);
}
/*OLD stuff*/



/* TABLETS AND MOBILE DEVICES */
@media only screen and (max-device-width: 768px) {
 #popupWrapper{
    position: absolute;
    height: 102vh !important;
    width: 100vw !important;
    top: 0;
    left: 0;
    z-index: 1050;
  }
  #popupWrapper .topBar {
    padding: 10px !important;
  }
  #popupWrapper .popup .text {
    width: 100%;
  }
    
  /* When popup is hidden  */
  #popupWrapper.hidden{
    top: 100vh;
  }
}

</style>

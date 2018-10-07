<template>
  <div id="popupWrapper" class="hidden container">
    <div class="row">
      <div class="col">
        <div class="float-right icon" @click="closePopup">&#10006;</div>
      </div>
    </div>
    <div class="row scrollable"><!--id="popupScroll"-->
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
  },
  mounted: () =>{
    $('#popupWrapper').css('display', 'none')
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
  height: 51vh;
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


/*OLD stuff*/
#popupWrapper {
  position: relative;
  top: 0;
  height: 58vh;
  overflow: hidden;
  align-self: center;
  width: 97vw;
  /*min-height: min-content;*/ 
  background-color: white;
  margin: auto;
  border: 8px solid white;

  transition: all 2.5s ease;
}
#popupScroll {
  /*Need to have an height to set scroll */
  height: 100%;
  overflow: scroll;
  position: relative;
  bottom: 75px;
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

/* TABLETS AND MOBILE DEVICES */
@media only screen and (max-device-width: 768px) {
 #popupWrapper{
    position: absolute;
    height: 102vh;
    width: 100vw;
    top: 0;
    left: 0;
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

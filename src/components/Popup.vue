<template>
  <div id="popup" class="hidden">
    <div class="topBar">
      <div class="close" @click="closePopup">&#10006;</div>
    </div> 
    <rentBox   v-if="whichPopup === rentBox"></rentBox>
    <theFarm   v-if="whichPopup === theFarm"></theFarm>
    <riding    v-if="whichPopup === riding"></riding>
    <breeding  v-if="whichPopup === breeding"></breeding>
    <horses    v-if="whichPopup === horses"></horses>
    <gallery   v-if="whichPopup === gallery"></gallery>
    <events    v-if="whichPopup === events"></events>
  </div>
</template>

<script>
/***/
import TheFarm from './popups/TheFarm'
import RentBox from './popups/RentBox'
import Riding from './popups/Riding'
import Breeding from './popups/Breeding'
import Horses from './popups/Horses'
import Gallery from './popups/Gallery'
import Events from './popups/Events'

export default {
  name: 'popup',
  components: {
    theFarm: TheFarm,
    rentBox: RentBox,
    riding: Riding,
    breeding: Breeding,
    horses: Horses,
    gallery: Gallery,
    events: Events
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
      breeding: 'breeding',
      horses:   'horses',
      gallery:  'gallery',
      events:   'events'
    }
  },
  mounted: () =>{
    $('#popup').css('display', 'none')
  },
  /** ta bort? */
  watch: {
    whichPopup: () => {
      console.log('watch popup')
      /*() => {
        console.warn(whichPopup)
        switch (whichPopup) {
          case this.rentBox:
            return 'Inackodering'
          case this.theFarm:
            return 'Gården'
          case this.riding:
            return 'Medryttare'
          case this.breeding:
            return 'Uppfödning'
          case this.horses:
            return 'Hästar'
          case this.gallery:
            return 'Galleri'
          case this.events:
            return 'Event'
          default:
            return '';
        }
        return ''
      }*/
    }
  }
}
</script>

<style>
#popup {
  position: relative;
  top: 0;
  max-height: 100vh;
  align-self: center;
  width: 97vw;
  min-height: min-content; 
  background-color: white;
  margin: auto;
  border: 1px solid white;

  transition: all 0.5s ease;
}

#popup .topBar {
  /*background-image: url('/static/alla.jpg');
  background-position: center;
  background-size: cover;*/
  color: #403427;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}

#popup .topBar .close {
  cursor: pointer;
  font-size: 250%;
  padding: 0 15px;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
  transition: all .5s ease;
}

#popup .topBar .close:hover {
  transform: scale(1.25);
}

/* When popup is hidden  */
#popup.hidden{
  top: 200vh; 
  max-height: 0;
  min-height: 0;
}

/* TABLETS AND MOBILE DEVICES */
@media only screen and (max-device-width: 768px) {
 #popup{
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
  }
#popup .topBar h3 {
  font-size: 200%;
}
#popup .popup .text {
    width: 100%;
  }
  
  /* When popup is hidden  */
  #popup.hidden{
    top: 100vh;
  }
}

</style>

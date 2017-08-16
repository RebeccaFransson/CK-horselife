<template>
  <div id="popup" :class="{hide : !popup}">
    <div class="topBar">
      <h3>{{ whichPopup }}</h3>
      <div class="close" @click="closePopup">&#10006;</div>
    </div>
    <inackodering v-show="whichPopup === 'Inackodering'"></inackodering>
    <garden v-show="whichPopup === 'Gården'"></garden>
    <hastar v-show="whichPopup === 'Hästar'"></hastar>
  
  </div>
</template>

<script>
import Inackodering from './popups/Inackodering'
import Garden from './popups/Garden'
import Hastar from './popups/Hastar'

export default {
  name: 'popup',
  components: {
    inackodering: Inackodering,
    garden: Garden,
    hastar: Hastar
  },
  props: {
    popup: {
      type: Boolean
    },
    whichPopup: {
      type: String
    },
    closePopup: {
      type: Function
    }
  },
  beforeCreate: function () {
  },
  mounted: function () {
    console.log('mounted')
    console.log($('#popup').is(':hidden'))
    // $('#popup').show(5000, function () {
    //   console.log('done')
    // })
    // if ($('#popup').is(':hidden')) {
    //   $('#popup').show('slow')
    // } else {
    //   $('#popup').slideUp()
    // }
  }
}
</script>

<style>
#popup {
  align-self: center;
  width: 97vw;
  background-color: white;
  margin: auto;
  transition: all .5s ease;
  border: 1px solid white;
}

#popup .topBar {
  background-image: url('../../static/alla.jpg');
  background-position: center;
  background-size: cover;
  color: #403427;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

#popup .topBar h3 {
  font-size: 250%;
  text-align: center;
  margin: 0;
  border: 3px solid white;
  background-color: rgba(255, 255, 255, 0.39);
  padding: 0 10px;
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
#popup.hide {
  display: none;
}


</style>

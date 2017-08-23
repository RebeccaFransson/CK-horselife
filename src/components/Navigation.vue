<template>
  <div id="navigation" class="popup">
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
    <popup :class="{hide: !popup}" :whichPopup="whichPopup" :close-popup="closePopup"></popup>
  </div>
</template>


<script>
import Popup from './Popup'
export default {
  name: 'navigation',
  components: {
    popup: Popup
  },
  data() {
    return {
      popup: false,
      whichPopup: ''
    }
  },
  methods: {
    openPopup: function (which) {
      this.popup = true
      this.whichPopup = which
      this.showSmallNavPictures(true)
    },
    closePopup: function () {
      this.popup = false
      this.showSmallNavPictures(false)
    },
    showSmallNavPictures: function (show) {
      if (show) {
        $('.navPicture').addClass('small')
      } else {
        $('.navPicture').removeClass('small')
      }
    }
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
  max-width: none;
  min-width: min-content;
  margin: 2vh 1.5vw;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;

  transition: .5s ease;
}


#navigation .navColumn h3 {
  padding: 0 20px;
  font-size: 20px;
  width: 100%;
  background-color: rgba(250, 235, 215, 0.49);
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

  transition: all .5s ease;
}

#navigation .navColumn .navPicture.small {
  min-height: 10vh;
}

#navigation .navColumn .navPicture:hover {
  transform: scale(1.04);
}

#navigation .navColumn:nth-child(1) .navPicture {
  background-image: URL('../../media/albin.jpg');
}

#navigation .navColumn:nth-child(2) .navPicture {
  background-image: URL('../../media/shirin.jpg');
  color: #403427;
}

#navigation .navColumn:nth-child(3) .navPicture {
  background-image: URL('../../media/shirin2.jpg');
}

#navigation .navColumn:nth-child(4) .navPicture {
  background-image: URL('../../media/sto.jpg');
}

#navigation .navColumn:nth-child(5) .navPicture {
  background-image: URL('../../media/kli.jpg');
  background-position: 51%;
}


/* MOBILE DEVICES */

@media only screen and (max-device-width: 480px) {
  /* define mobile specific styles come here */
  #navigation .navColumn {
    min-width: 98vw;
  }
  #navigation .navColumn h3 {
    font-size: 40px;
  }
  #navigation .navColumn .navPicture {
    min-height: 20vh;
  }
}


/* TABLETS */

@media only screen and (max-device-width: 768px) and (min-device-width: 480px) {
  #navigation .navColumn {
    min-width: 40vw;
  }
  #navigation .navColumn h3 {
    font-size: 40px;
  }
  #navigation .navColumn .navPicture {
    min-height: 40vh;
  }
}
</style>


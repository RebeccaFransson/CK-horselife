<template>
  <div id="navigation">
    <div class="navColumn">
      <div @click="openPopup('theFarm', $event)" class="navPicture">
        <h3>Om oss</h3>
      </div>
    </div>
    <div class="navColumn">
      <div @click="openPopup('horses', $event)" class="navPicture">
        <h3>Hästar</h3>
      </div>
    </div>
    <!--<div class="navColumn">
      <div @click="openPopup('rentBox', $event)" class="navPicture">
        <h3>Inackodering</h3>
      </div>
    </div>-->
    <div class="navColumn">
      <div @click="openPopup('riding', $event)" class="navPicture">
        <h3>Ridlektioner</h3>
      </div>
    </div>
    <div class="navColumn">
      <div @click="openPopup('ridingOneHorse', $event)" class="navPicture">
        <h3>Medryttare</h3>
      </div>
    </div>
    <div class="navColumn">
      <div @click="openPopup('gallery', $event)" class="navPicture">
        <h3>Galleri</h3>
      </div>
    </div>
    <!--<div class="navColumn">
      <div @click="openPopup('events', $event)" class="navPicture">
        <h3>Events</h3>
      </div>
    </div>-->
    <popup v-show="showPopup" :class="[isOpen ? 'opend': 'closed']" :whichPopup="whichPopup" :close-popup="closePopup"></popup>
  </div>
</template>


<script>
//:class="{hide: !popup}" 
import Popup from './Popup.vue'
export default {
  name: 'navigation',
  components: {
    popup: Popup
  },
  data() {
    return {
      showPopup: false,
      isOpen: false,
      whichPopup: ''
    }
  },

  methods: {
    openPopup: function (which, e) {
      // Scroll up in body with the animation for the slide
      $('body, html').animate({
        scrollTop: 0
      }, 500)
      setTimeout(() => {
        this.whichPopup = which
        this.isOpen = true
      }, 10)
      // Show popup and set which one
      this.showPopup = true
      // Set the non selected popup to unactive
      this.addUnactiveToAllExceptOne(this.findActivePictureElement(e.target));
      // Animate to small pictures
      this.showSmallNavPictures(true)
      //$('#popupWrapper').css('display', 'block')
      $('body').addClass('freezeScroll')
    },
    closePopup: function() {
      this.isOpen = false
       // Remove all unactive classes - TODO: Change this to function
      const pictures = $('.navPicture')
      pictures.removeClass('unactive')
      // Animate and hide
      $('body').removeClass('freezeScroll')
      // Scroll back in the popup
      $('.scrollable').animate({
        scrollTop: 0
      }, 50)
      
      setTimeout(() => {
        //Close the popup
        this.showPopup = false
      }, 300)// When 0.5s CSS animation done
      // Animate to big pictures
      this.showSmallNavPictures(false)
    },
    showSmallNavPictures: (show) => {
      if (show) {
        $('.navPicture').addClass('small')
      } else {
        $('.navPicture').removeClass('small')
      }
    },
    addUnactiveToAllExceptOne: (activeElement) =>{
       // Remove all unactive classes
      const pictures = $('.navPicture')
      pictures.removeClass('unactive')
      pictures.each((index, element) => {
        // If it is not the active elment then set unactive class
        if(element !== activeElement){
          $(element).addClass('unactive')
        }
      }) 
    },
    findActivePictureElement: (element) => {
      if(!element.className.includes('navPicture')){
        return element.parentElement
      }
      return element
    }, 
    removeAllUnactive: function() {
      // Remove all unactive classes
      const pictures = $('.navPicture')
      pictures.removeClass('unactive')
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
  color: #5f482e;
  width: min-content;
  max-width: none;
  min-width: min-content;
  margin: 0 1vw;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;

  transition: .5s ease;
}


#navigation .navColumn h3 {
  padding: 0 20px;
  margin: 20px 0;
  font-size: 20px;
  width: 100%;
  background-color: rgba(250, 235, 215, 0.49);
}


#navigation .navColumn .navPicture {
  min-height: 50vh;
  min-width: 16vw;
  margin: 1vh 0;
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: center;

  background-position: center;
  background-size: cover;

  border: white 1px solid;

  cursor: pointer;

  transition: all .5s ease;
}

#navigation .navColumn .navPicture.small {
  min-height: 10vh;
  margin: 0.5vh 0;
}

#navigation .navColumn .navPicture.unactive {
  opacity: 0.3;
}

#navigation .navColumn .navPicture.unactive:hover {
  opacity: 0.6;
}

#navigation .navColumn .navPicture:hover {
  transform: scale(1.04);
}

#navigation .navColumn:nth-child(1) .navPicture {
  background-image: URL('./static/camilla-hopp-2.jpg');
}

#navigation .navColumn:nth-child(2) .navPicture {
  background-image: URL('./static/shirin.jpg');
  color:#40260a !important;
}

#navigation .navColumn:nth-child(3) .navPicture {
  background-image: URL('./static/shirin2.jpg');
  color:#40260a !important;
}

#navigation .navColumn:nth-child(4) .navPicture {
  background-image: URL('./static/camilla-hopp.jpg');
}

#navigation .navColumn:nth-child(5) .navPicture {
  background-image: URL('./static/albin.jpg');
  background-position: 51%;
}

#navigation .navColumn:nth-child(6) .navPicture {
  background-image: URL('./static/kli.jpg');
}

#navigation .navColumn:nth-child(7) .navPicture {
  background-image: URL('./static/emilhopp.jpg');
  color:#40260a !important;
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


<template>
  <div id="gallery" class="popup">
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    ></div>
  </div>
</template>
<script>
import VueGallery from 'vue-gallery';
export default {
  data() {
    return {
        index: 0,
        images: [
            '/static/gallery/farmDucks.jpg',
            '/static/gallery/horseDioraAndCharlie.jpg',
            '/static/gallery/horseMidori.jpg',
            '/static/gallery/pastureEveningSun.jpg',
            '/static/gallery/pastureEveningSunWithHorses.jpg',
            '/static/gallery/pastureInTheTent.jpg',
            '/static/gallery/pastureLotOfHorses.jpg',
            '/static/gallery/pastureMist.jpg',
            '/static/gallery/pastureMorningSun.jpg',
            '/static/gallery/pastureMorningSun2.jpg',
            '/static/gallery/pastureMorningSunWithHorses.jpg',
            '/static/gallery/ridingArena.jpg',
            '/static/gallery/stall.jpg',
            '/static/gallery/trainingAlbinAndSonja.jpg',
            '/static/gallery/trainingDioraAndSandra.jpg',
            '/static/gallery/trainingEmilAndPernilla.jpg',
            '/static/gallery/trainingErosAndTina.jpg',
            '/static/gallery/trainingQubbe.jpg'
        ]
    }
  },
    components: {
      'gallery': VueGallery
    },
}
</script>
<style>
#gallery{
  padding-top: 30px;
}

#gallery .image{
  background-size: cover;
  background-position: center;
  margin: 5px;
  height: 200px !important;
  min-width: 200px !important;
  transition: all .5s;
}
#gallery .image:hover{
  cursor: pointer;
  transform: scale(1.04);
  border-radius: 5px;
}

#gallery img{
  max-width: 90%;
  border: 1px solid black;
}



</style>


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
            '/static/emilhopp.jpg',
            '/static/alla.jpg'
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
  padding-top: 80px;
}

#gallery .image{
  background-size: contain;
  margin: 5px;
}

#gallery img{
    width: 90%;
    border: 1px solid black;
}



</style>


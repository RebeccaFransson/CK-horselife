<template>
  <div id="home">
    <div id="navigation">
      <div class="navColumn">
        <div class="navPicture">
          <h3>Gården</h3>
        </div>
      </div>
      <div class="navColumn">
        <div class="navPicture">
          <h3>Hästar</h3>
        </div>
      </div>
      <div class="navColumn">
        <div class="navPicture">
          <h3>Inackodering</h3>
        </div>
      </div>
      <div class="navColumn">
        <div class="navPicture">
          <h3>Medryttare</h3>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
    }
  },
  methods: {
    onMouseOver: function (event) {
    }

  },
  computed: {
    fullname: function () {
      return this.user.firstname + ' ' + this.user.lastname
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');


#home {
  background-color: #c4d4dd;
  width: 100vw;
  height: 100vh;
}

#navigation {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
#navigation .navColumn {
  color: #826849;
  width: min-content;
  min-width: 200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 1.5vw 0 1.5vw;
  flex-grow: 1;
}
#navigation .navColumn h3{
  width: 100%;
  background-color: rgba(250, 235, 215, 0.49);
}
#navigation .navColumn .navPicture {
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 79vh;
  justify-content: center;

  background-position: center;
  background-size: cover;

  border: white 1px solid;
  border-top: none;

}

#navigation .navColumn:nth-child(1) .navPicture {
  background-image: URL('../../static/albin.jpg');
}

#navigation .navColumn:nth-child(2) .navPicture {
  background-image: URL('../../static/shirin.jpg');
  color: #403427;
}


#navigation .navColumn:nth-child(3) .navPicture {
  background-image: URL('../../static/sto.jpg');
  align-self: flex-end;
  border-bottom: none;
  border-top: white 1px solid;
}

#navigation .navColumn:nth-child(4) .navPicture {
  background-image: URL('../../static/albin.jpg');
}

#navigation .navColumn:nth-child(5) .navPicture {
  background-image: URL('../../static/shirin.jpg');
  color: #403427;
}


</style>
<!--

width: 100vw;
  height: 100vh;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-image: url('../../static/albin.jpg');
  background-position-y: center; 
  
  -->


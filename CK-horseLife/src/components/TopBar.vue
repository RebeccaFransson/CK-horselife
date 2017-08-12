
import snabbt
<template>
    <div id="topBar">
      <div v-on:mouseover="onMouseOver" class="navItem">
        <router-link v-bind:to="'add'">
          <span>Gården</span>
        </router-link>
      </div>
      <div v-on:mouseover="onMouseOver" class="navItem">
        <router-link v-bind:to="'add'">
          <span>Hästarna</span>
        </router-link>
      </div>
      <div v-on:mouseover="onMouseOver" class="navItem">
        <router-link v-bind:to="'add'">
          <span>Uppfödningen</span>
        </router-link>
      </div>
      <div v-on:mouseover="onMouseOver" class="navItem">
        <router-link v-bind:to="'add'">
          <span>Medryttare</span>
        </router-link>
      </div>
      <div v-on:mouseover="onMouseOver" class="navItem">
        <router-link v-bind:to="'add'">
          <span>Inackoderingar</span>
        </router-link>
      </div>
    </div>
</template>


<script>
export default {
  name: 'topBar',
  data () {
    return {
      hovering: false
    }
  },
  methods: {
    onMouseOver: function(event) {
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300');


#topBar {
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  background-color: rgba(147, 159, 80, 0.35);
}

#topBar .navItem {
  padding: 15px;
}

#topBar a {
  color: #6a7337;
  font-size: 150%;
  text-decoration: none;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: bold;
  position: relative;
}

#topBar .navItem:hover{
  /*border-bottom: white 1px solid;*/
  animation-name: hover;
  animation-duration: 1s;
}

/* ANIMATIONS */
@keyframes hover {
    from {top: 0}
    to {top: 10px;}
}
</style>


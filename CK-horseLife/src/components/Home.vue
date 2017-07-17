<template>
  <div id="home">
    <div id="navigation">
      <div class="navItem"><router-link v-bind:to="'add'"><span>Gården</span></router-link></div>
      <div class="navItem"><router-link v-bind:to="'add'"><span>Hästar</span></router-link></div>
      <div class="navItem"><router-link v-bind:to="'add'"><span>Uppfödning</span></router-link></div>
      <div class="navItem"><router-link v-bind:to="'add'"><span>Medryttare</span></router-link></div>
      <div class="navItem"><router-link v-bind:to="'add'"><span>Inackoderingar</span></router-link></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    props: {
      msg: {
        type: String,
        default: 'hotdamn'
      }
    },
    data () {
      return {
        title: 'Hello world',
        items: [
          {title: 'first'},
          {title: 'second'},
          {title: 'third'}
        ],
        user: {
          firstname: 'Rebecca',
          lastname: 'Fransson'
        }
      }
    },
    methods: {

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
html{
  background: url("../../static/animal.jpg") no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
body{
  margin: 0;
  padding: 0;
}
#navigation{
  background-color: rgba(169, 115, 100, 0.77);
  padding: 25px;
  font-size: 27px;
  box-shadow: rgba(125, 101, 94, 0.61) 2px 2px 5px 0px;
}
#navigation .navItem{
  float: left;
}
#navigation a{
  color: #fff2ed;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  padding: 15px;
}
#navigation a:hover{
}
</style>
<!--
    <input type="text" v-model="title">
    <h1>{{title}}</h1>
    <ul>
      <li v-for="item in items">{{ item.title }}</li>
    </ul>
    <input type="text" v-model="user.firstname">
    <input type="text" v-model="user.lastname">
    <h3>{{fullname}}</h3>
    <p>end</p>
    <h2>{{msg}}</h2>
    <router-link v-bind:to="'add'">add new blogpost</router-link>
-->

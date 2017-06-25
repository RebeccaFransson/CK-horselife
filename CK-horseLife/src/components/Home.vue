<template>
  <div id="home">
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
#home{
  background-color: hotpink;
}

</style>

<template>
  <div id="add">
    <label>Title</label><input type="text" v-model="title"><br/>
    <label>Blogpost</label><input type="textfield" v-model="blogpost">
  </div>
</template>

<script>
  export default {
    name: 'add',
    data () {
      return {
        title: '',
        blogpost: ''
      }
    },
    methods: {

    }
  }
</script>

<style>
#home{
  background-color: hotpink;
}

</style>

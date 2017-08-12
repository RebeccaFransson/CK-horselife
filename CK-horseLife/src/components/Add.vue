<template>
  <div id="add">
    <table style="width:100%">
      <tr>
        <th>Add new</th>
        <th>Three most popular</th>
        <th>Old ones</th>
      </tr>
      <tr>
        <td>
          <form v-on:submit="addNew">
            <label>Title</label>
            <input type="text" v-model="newPost.title">
            <br/>
            <label>Text</label>
            <input type="textfield" v-model="newPost.text">
            <input type="submit" value="Submit">
          </form>
        </td>
        <td>
          <ul>
            <li v-for="post in blogposters">
              <span :class="{admin: post.admin}">
                <b>{{post.title}}</b>
                <br/>{{post.text}}
              </span>
            </li>
          </ul>
        </td>
        <td>
          <ul>
            <li v-for="post in oldPosts">
              <b>{{post.title}}</b>
              <br/>{{post.body}}
            </li>
          </ul>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'add',
  data() {
    return {
      newPost: {},
      blogposters: [
        {
          title: 'En härlig dag',
          body: 'Idag träffade jag en kattunge!!! Dog sötdöden x.x',
          admin: false
        },
        {
          title: 'Skärp er',
          text: 'Ingen spamm, då blir nu blcokerade.',
          admin: true
        },
        {
          title: 'En härlig dag',
          text: 'Idag träffade jag en kattunge!!! Dog sötdöden x.x',
          admin: false
        }
      ],
      oldPosts: [

      ]
    }
  },
  methods: {
    addNew: function(e) {
      e.preventDefault()
      this.blogposters.push(this.newPost)
      this.newPost = {}
    }
  },
  created: function() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts')
      .then(function(res) {
        this.oldPosts = res.data
      })
  }
}
</script>

<style>
#add {
  background-color: sandybrown;
}

.admin {
  border: 1px solid gold;
}
</style>

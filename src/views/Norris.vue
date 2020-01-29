<template>
<b-container fluid>
  <div class="norris">
    <hr>
    <h1 class="font-weight-bolder text-danger">{{msg}}</h1>
    <hr>
    <b-row>
      <div class="col d-flex justify-content-end">
        <div class="p-2">
      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="">
        </div>
        <div class="p-2">
      <button type="submit" class="btn btn-success">SEARCH</button>
        </div>
      </div>
    </b-row>
    <hr>
    <b-row>
  <div class="col">
    <div class="card p-4">
      <div class="card-body">
        <h2>SELECT YOUR JOKE BELOW</h2>
          <hr>
          <b-form-select v-model="selected" :options="options"></b-form-select>
          <hr>
          <button class="btn btn-primary float-right" type="submit" v-on:click="Jokes">Submit form</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card p-4">
      <div class="card-body">
      <h3 class="text-center">HERE IS YOUR JOKE</h3>
        <hr>
        <div class="row">
          <p id="Joke">
             {{Jokes.value}}
          </p>
          </div>
          </div>
      </div>
      </div>
    </b-row>
      </div>
</b-container>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      msg: 'NORRIS JOKES',
      Jokes: [ ],
      options: ["animal", "career", "celebrity", "dev", "explicit", "fashion", "food", "history", "money", "movie", "music", " political ", "religion", "science", "sport", "travel"]
    }
  },
  async created () {
    try {
      const res = await axios.get('/api/Jokes', { responseType: "json" })

      this.Jokes = res.data
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    async submit () {
      const res = await axios.get('/api/Jokes', { responseType: "json" })
    }
  }
}
</script>

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
             {{Jokes}}
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
  data: () => ({
    msg: 'NORRIS JOKES',
    Jokes: '',
    options: ["animal", "career", "celebrity", "dev", "explicit", "fashion", "food", "history", "money", "movie", "music", "political", "religion", "science", "sport", "travel"]
  }),
  methods: {
    submit: function () {
      Jokes = "/api/Jokes"
    }
  },
  mounted () {
    axios.get(Jokes, { responseType: "json" })
      .then(
        response => { this.Jokes = response.data }
      )
      .catch(error => {
        if (error.response.status === 400){
          this.Jokes = JSON.parse(error.response.data)
        }
      })
  }
}
</script>

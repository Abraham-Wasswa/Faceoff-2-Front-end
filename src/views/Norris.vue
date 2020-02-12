<template>
<b-container fluid>
  <div class="norris">
    <hr>
    <img :src='Jokes.icon_url' alt="Smiley face" width="250" height="250">
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
          <form id="form" @submit.prevent="submitForm" autocomplete="off">
          <b-form-select ref="getCats" v-model="selectedInvalid" :options="GetCat" required></b-form-select>
          <hr>
          <button class="btn btn-primary float-right" ref="myJoke" type="submit" @click="Val">Find Joke</button>
          <hr>
          <p ref="myJokes"></p>
          </form>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card p-4">
      <div class="card-body">
      <h3 class="text-center">HERE IS YOUR JOKE</h3>
        <hr>
        <div class="row">
          <p id="Joke" ref="roundjoke" v-bind:class="intervalJoke">
            {{Jokes.value}}
          </p>
          <div class="toggles">
            <v-toggle id="v-t-default" v-model="toggleValue" />
          </div>
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
import vToggle from 'v-toggle'

export default {
  data () {
    return {
      msg: 'NORRIS JOKES',
      Jokes: [ ],
      GetCat: [ ],
      selected: null,
      toggleValue: true
    }
  },
  async created () {
    try {
      const res = await axios.get('/api/Jokes', { responseType: "json" })

      this.Jokes = res.data
    } catch (e) {
      console.error(e)
    }

    try {
      const ret = await axios.get('/api/Category', { responseType: "json" })

      this.GetCat = ret.data
    } catch (e) {
      console.error(e)
    }
  },
  computed: {
    selectedIsValid () {
      return !!this.GetCat
    },
    selectedInvalid () {
      return this.GetCat
    }
  },
  methods: {
    FindJoke: function (event) {
      this.$refs.myJokes.innerText = this.Jokes.value
    },
    Val: function (event) {
      if (this.selected) {
        return submitForm()
      } else {
        this.$refs.myJokes.innerText = 'PLEASE SELECT A CATEGORY TO RETURN A JOKE'
      }
    },
    submitForm: function () {
      if (this.selectedIsValid) {
        this.$refs.myJokes.innerText = this.Jokes.value
      }
    },
    intervalJoke: function () {
      setInterval(function () {
        if (this.selectedIsValid) {
          this.$refs.roundjoke.innerText = this.Jokes.value
        }
      }, 5000)
    }
  },
  mounted: function () {
    this.intervalJoke()
  }
}
</script>

<style scoped>
.toggles {
  display: flex;
  flex-direction: column;
}
</style>

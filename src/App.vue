<template>
  <div id="app">
    <b-navbar class="navbar navbar-expand-sm navbar-dark" toggleable="lg" variant="success">
    <a class="navbar-brand" href="#">
      Chucknorris Jokes
    </a>
    <b-navbar-toggle target="mynav1"></b-navbar-toggle>
    <b-collapse id="mynav1" is-nav>
      <b-navbar-nav>
      <b-nav-item >
          <router-link class="nav-link"  to="/">Home</router-link>
        </b-nav-item >
        <b-nav-item >
          <router-link class="nav-link" router-link to="/norris">Norris</router-link>
        </b-nav-item >
      </b-navbar-nav>
    </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

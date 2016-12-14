<template>
  <div id="app">
    <app-header></app-header>
    <editor></editor>
  </div>
</template>

<script>
import AppHeader from './components/Header'
import Editor from './components/Editor'

export default {
  name: 'app',
  components: {
    AppHeader,
    Editor
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  padding: 0;
  margin: 0;
}
.full-w {
  width: 100%;
}
</style>

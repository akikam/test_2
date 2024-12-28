<template>
  <div id="app">
    <h1>Pandák listája</h1>
    <PandaList />
  </div>
</template>

<script>
import PandaList from './components/PandaList.vue';

export default {
  name: 'App',
  components: {
    PandaList
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 20px;
}
</style>

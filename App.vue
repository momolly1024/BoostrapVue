<template lang="pug">
  <div id="app">
   Top
   Content
   Card
   Footer
  </div>
</template>

<script>
import Top from './components/Top'
import Content from './components/Content'
import Card from './components/Card'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Top,
    Content,
    Card,
    Footer
  }
}
</script>

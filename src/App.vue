<template>
  <Navbar :users='users' />
  <div class="middle">
    <Sidebar />
    <Content 
      title="Reposts" 
      tagline="Easily generate a report of your transactions" 
    />
  </div>
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Content from './components/Content.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Content,
    Sidebar,
    Footer  
  },

  
}

</script>

<style>
  #app {
    font-family: 'Roboto', sans-serif;
    height: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .middle {
    padding-right: 15px;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
  }
  
  h1 {
    color: #011F4B;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
}

h2 {
  color: #7E8299;
  font-size: 16px;
  font-weight: bold;
}
</style>

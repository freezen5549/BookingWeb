<template>
  <router-view/>
</template>

<script>
// import LoginPage from './components/LoginPage.vue'
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
export default {
  name: 'APP',
  // components: {
  //   LoginPage,
  // }
  setup () {
    const router = useRouter();
    onMounted(() => {
      router.push('/login');
    });
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

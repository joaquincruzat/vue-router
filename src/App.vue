<template>
  <div id="app">
    <nav>
      <router-link to="/">Inicio</router-link> |
      <router-link to="/servicios">Servicios</router-link> |
      <router-link to="/blog/1">Blog</router-link> |
      <router-link :to="{name: 'contacto'}">Contacto</router-link>
    </nav>
    <router-view />
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>
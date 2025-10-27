/**
el props setup en el script es importante, cambia la sintaxis a 
funciones definidas del Api y por lo tanto no se puede usar las funciones
data, methods o mounted
*/

<script>
import FooterComponent from './components/FooterComponent.vue';


export default{
  name: 'app',
  components: {
    FooterComponent
  }
}

</script>

<template>
    
    <!--
      AQUI VA LA PAGINA WEB COMO TAL Y EL ROUTER COMPONENT PARA CAMBIAR ENTRE COMPONENTES
    -->
      <router-view></router-view>

      <FooterComponent></FooterComponent>

      

</template>

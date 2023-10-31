<template>
  <div>
    <h1>Mi primera App VUE</h1>
    <img src="./../assets/images/knekro1.jpg" />
    <h2>
        Su nombre es: 
        <span style="color:red">{{nombre}}</span>
    </h2>
    <h2>
        Su numero es: 
        <span style="color:blue">{{numero}}</span>
    </h2>
  </div>
</template>

<script>
//Siempre debemos exportar el nombre que deseemos dar al component en la app vue
export default {
  name: "HolaMundo",
  data() {
    //Aqui debemos declarar las variables
    //no se utilizan palabras especiales para su declaracion
    // la declaracion de las variables se realiza con return
    //y un objeto json que contrndra las variables y sus valores
    //Tras declararlas las podremos poner en el template con doble llave: {{datoquesea}}
    return {
      nombre: "Elktcuento",
      numero: 14,
      miArray: [],
      objeto: {},
    };
  },
};
</script>

<style>

h1 {
  color: rebeccapurple;
}

@import './../assets/css/estilos.css'
</style>
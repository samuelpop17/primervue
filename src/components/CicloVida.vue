<template>
  <div>
    <h1 style="color: red">Hooks</h1>
    <button @click="cambiarSaludo()">Modificar saludo</button>
    <h2 style="color:orange">{{saludo}}</h2>
  </div>
</template>

<script>
export default {
  name: "CicloVida",
  data() {
    return{
        saludo:"Hoy es martes..."
    }
  },
  methods: {
    //Aqui dentro debemos incluir nuestros metodos personalizados
    cambiarSaludo(){
        //Dentro de los metodos para acceder a la variable data() debemos utilizar la palabra THIS
        this.saludo = "Y esta noche Halloween!!!!"
    }
  },
  mounted(){
    console.log("Component Montado");
  },
  unmounted(){
    console.log("Component Destruido");
  },
  updated(){
    console.log("Component Modificado");
  },
  created(){
    console.log("Component Creado");
  }
};
</script>
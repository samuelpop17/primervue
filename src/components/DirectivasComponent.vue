<template>
  <div>
    <h1 style="color: green">Directivas Vue</h1>
    <ul v-if="series.length > 0">
      <li v-for="serie in series" :key="serie">{{ serie }}</li>
    </ul>
    <hr />

    <label>Numero: </label>
    <input type="number" v-model="numero" />
    <h2 v-if="numero > 0" style="color: green">Positivo</h2>
    <h2 v-else-if="numero == 0" style="color: purple">Cero</h2>
    <h2 v-else style="color: red">Negativo</h2>
    <hr />
    <label>Nombre: </label>
    <input type="text" v-model="nombre" />
    <br /><br />
    <label>Edad: </label>
    <input type="number" v-model="edad" />

    <h1 style="color: red">Nombre: {{ nombre }}, Edad: {{ edad }}</h1>
    <hr>
    <h1>
      <!-- El simbolo $ nos permite acceder a ciertos
         elementos de vue en la zona de template por ejemplo 
         podemos acceder a todo el contenido de data() -->
      {{ $data }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "DirectivasComponent",
  data() {
    return {
      nombre: "",
      edad: 0,
      numero: 0,
      series: [
        "Futurama",
        "Juego de tronos",
        "Suits",
        "Friends",
        "The office",
        "Gen V",
        "The boys",
      ],
    };
  },
};
</script>
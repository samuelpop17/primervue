<template>
  <div>
    <h1>Propiedad conmutada</h1>
    <ul>
      <li v-for="game in juegosRojos" :key="game" v-html="game"></li>
    </ul>
    <button @click="getJuegosAzules()">Juegos azules</button>
    <div v-html="html">
      
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "PropiedadConmutada",
  computed: {
    //Una propiedad conmutada siempre devuelve valores y no puede recibir parametros
    juegosRojos() {
      var datos = this.juegos;

      for (var i = 0; i < datos.length; i++) {
        var juego = datos[i];
        juego = "<span style='color:red'>" + juego + "</span>";
        datos[i] = juego;
      }
      return datos;
    },
  },
  methods: {
    getJuegosAzules() {
      for (var juego of this.juegos) {
        this.html += "<h1 style='color:blue'>" + juego + "</h1>";
      }
    },
  },
  data() {
    return {
      html: "",
      juegos: [
        "Parchis",
        "La oca",
        " Luz roja, luz verde",
        "Canicas",
        "Peonza",
        "La cuerda",
      ],
    };
  },
};
</script>
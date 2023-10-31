<template>
  <div>
    <h1>Ejemplo numero par impar</h1>
    <label for="">Numero:</label>
    <input type="text" v-model="numero" />
    <button @click="getevaluar()">evaluar numero</button>
    <h3 v-if="numero%2==0" style="color:blue">
        numero par {{numero}}
    </h3>
    <div v-html="html"></div>
    <div v-html="evaluarNumero"></div>
    <h2>numero: {{ numero }}</h2>
  </div>
</template>


<script>
export default {
  name: "numeroParImpar",
  methods:{
    getevaluar(){
        if (this.numero % 2 == 0) {
        this.html = "<h1 style='color:blue'>par:" + this.numero + "</h1>";
      } else {
        this.html = "<h1 style='color:red'>impar:" + this.numero + "</h1>";
      }
    }
  },
  computed: {
    evaluarNumero() {
      var data = "";
      if (this.numero % 2 == 0) {
        data = "<h1>par:" + this.numero + "</h1>";
      } else {
        data = "<h1>impar:" + this.numero + "</h1>";
      }
      return data;
    },
  },
  data() {
    return {
      numero: 0,
      html:""
    };
  },
};
</script>

<template>
  <div>
    <h1>metodos filters</h1>
    <ul>
      <li v-for="num in numeros" :key="num">
        Nuemro: {{num}}, Doble: {{ $filters.getnumerodoble(num) }}
      </li>
    </ul>
    <ul>
      <li v-for="name in nombres" :key="name">
        {{ $filters.mayuscula(name) }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MetodosFilters",
  data() {
    return {
      numeros: [2, 35, 5, 4, 21, 564, 42],
      nombres: ["Juan", "Bou", "Feipe", "Kento", "Reinoso"],
    };
  },
};
</script>
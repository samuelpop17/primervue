<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">Home |</router-link>
            </li>
            <li>
                <router-link to="/cine">Cine | </router-link>
            </li>
            <li>
                 <router-link to="/musica">Musica | </router-link>
            </li>
            <li>
                 <router-link to="/hooks">  Hooks | </router-link>
            </li>
            <li>
                 <router-link to="/directivas">  Directivas vue | </router-link>
            </li>
            <li>
                 <router-link to="/conmutadas">  Propiedad conmutada</router-link>
            </li>
            <li>
                 <router-link to="/parimpar">  Par Impar</router-link>
            </li>
            <li>
                 <router-link to="/filtros">  filtros</router-link>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: "MenuComponent",
}
</script>

<style>
    ul#menu li {
        display: inline;
    }
</style>
import { createApp } from 'vue'
import App from './App.vue'
//Importamos la constante router de router.js
import router from './Router'

var app=createApp(App)
app.config.globalProperties.$filters={
    mayuscula(dato){
        return dato.toUpperCase();
    },

    getnumerodoble(numero){
        return numero*2;
    }
}
app.use(router).mount("#app")



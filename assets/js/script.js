const app = Vue.createApp({
    data() {
        return {
            // personaje: "assets/personaje.png",
            // ropas: [
            //     { id: 1, imagen: "assets/ropa1.png" },
            //     { id: 2, imagen: "assets/ropa2.png" }
            // ]
        };
    },
    methods: {
        cambiarRopa(nuevaRopa) {
            // this.personaje = nuevaRopa;
        }
    }
});

app.mount("#app");
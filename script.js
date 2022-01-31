const App = {
  data() {
    return {
      data: [],
      cep: null
    }
  },
  methods: {
      fetchCEP(event) {
        event.preventDefault();

        fetch(`https://viacep.com.br/ws/${this.cep}/json/`)
          .then(response => response.json())
          .then(json => {
            const {cep, logradouro, bairro, localidade, uf} = json;
            this.data = [cep, logradouro, bairro, localidade, uf];
          });

        this.cep = null;
    }
  }
}

Vue.createApp(App).mount('#app');

const { createApp } = Vue;


createApp({
  data(){
    return{
      title: 'Axios'
    }
  },
  methods:{

  },
  mounted(){

    // al metodo get() si passa l'endpoint della chiamata
    axios.get('https://flynn.boolean.careers/exercises/api/random/boolean')
      .then((risposta) => {
       
      })
      .catch(errore => {
        

      })



  }
}).mount('#app')
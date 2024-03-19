const { createApp } = Vue;

createApp({
  data() {
    return {
      title: 'Axios',
      arrayEmail:[],
      counterShow: 0,
    }
  },
  methods: {

    
    stampArrayEmail() {
      for (let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((risposta) => {
            this.arrayEmail.push(risposta.data.response)
            this.counterShow++
          })
      }
        // .catch(errore => {
        // })
    },

    showInTime(){

      if (this.counterShow == 10) {
        return this.arrayEmail
        
      }


    }

    
  },
  mounted() {
    this.stampArrayEmail();
  }
}).mount('#app');

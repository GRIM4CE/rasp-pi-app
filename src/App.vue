<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        temperature: null,
        error: null,
        buttonDisabled: false,
        // humidity: null,
      }
    },
    methods: {
      async getStats() {
        if(this.buttonDisabled) return
        this.buttonDisabled = true
        try {
          const { data } = await axios.get('/api/v1/climate')
          this.temperature = data
        } catch(e) {
          this.error = e
        }
        setTimeout(() => { 
          this.buttonDisabled = false
          this.error = null
        }, 2000)
      }
    }
  }
</script>

<template>
  <div id="app">
    <button :disabled="buttonDisabled" @click="getStats">Check Temperature and Humidity</button>
    <div v-if="temperature">
      <h2>Temperature: {{ temperature.tempC }}°C / {{ temperature.tempF }}°F</h2>
      <h2>Humidity: {{ temperature.humidity }}</h2>
    </div>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<style lang="scss">
</style>

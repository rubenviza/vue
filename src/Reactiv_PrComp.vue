<script setup>  
  import { ref, computed } from 'vue'       // reactividad, propiedades computadas
  
  const name = "Reactividad Vue"
  
  // Reactividad

  const counter = ref(0)     // con ref se le dice que ahora counter es una variable reactiva. Se puede usar const
  const colorfuente = ref('')

  const increment = () => {
    counter.value ++          // la variable reactiva es ahora un objeto, asi que se debe acceder a su valor con .value
    //console.log (counter.value)    
    pintarFuente()
  }
  const decrement = () => {
    counter.value --
    pintarFuente()
  }
  const reset = () => {
    counter.value = 0     
    colorfuente.value = ''
  } 
  const pintarFuente = () => 
    counter.value < 0 ? colorfuente.value = 'negativo' : counter.value > 0 ? colorfuente.value = 'positivo' : colorfuente.value = ''

    
    // Propiedades computadas

    const counter2 = ref(0)
    const increment2 = () => counter2.value++
    const decrement2 = () => counter2.value--
    const reset2 = () => counter2.value=0

    const classCounter = computed(() => {       // propiedad computada recibe un arrow function y siempre debe retornar algo 
      switch (true) {
        case (counter2.value === 0) : return "cero"; 
        case (counter2.value > 0) : return "positivo"
        case (counter2.value < 0) : return "negativo"
      }
    })

</script>

<template>
  <h1>{{ name.toUpperCase() }}</h1> 

  <p>Reactividad</p>

  <h2 :class="colorfuente">{{ counter }}</h2> <!-- en el template no se coloca .value a variables reactivas -->

<!-- <h2 :class="counter > 0 ? 'positivo' : counter < 0 ? 'negativo' : ''">{{ counter }}</h2>    **** Se puede usar codigo js directamente, en este ejemplo ya no se necesitaria variable colorfuente -->   

  <button @click="increment">Aumentar</button>
  <button @click="decrement">Disminuir</button>
  <button @click="reset">Resetear</button>

  <br /><br />
  <p>Propiedades computadas</p>   <!-- es recomendable usar propiedades computadas cuando se trabaje con variables reactivas y para logica compleja -->

  <h2 :class="classCounter">{{ counter2 }}</h2>
  <button @click="increment2">Aumentar</button>
  <button @click="decrement2">Disminuir</button>
  <button @click="reset2">Resetear</button>

</template>

<style>
  h1 {
    color: brown;
  }
  .positivo {
    color: green;    
  }
  .negativo {
    color: red;
  }
  .cero {
    color:peru;
  }
</style>
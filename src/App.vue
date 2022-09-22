<script setup>  
    import { ref, computed } from 'vue'    
  
      const contador = ref(0)
      const arreglo = ref([])

      const plus = () => contador.value++
      const minus = () => contador.value--
      const reset = () => contador.value=0
  
      const classCounter = computed(() => {       
        switch (true) {
          case (contador.value === 0) : return "cero" 
          case (contador.value > 0) : return "positivo"
          case (contador.value < 0) : return "negativo"
        }
      })
      const bloquearbtn = computed(() => arreglo.value.includes(contador.value));
            
      const agregar_array = () => arreglo.value.push(contador.value)    //al hacer push de la variable reactiva 'contador' ocasiona que todos los computed que incluyen esa variable se ejecuten. Nota: No solo pasa esto cuando una variable rectiva es modificada, sino que hay otros casos como éste
      
  </script>
  
  <template>
    <div class="container text-center mt-3">
        <h1>Practica</h1> 

        <h2 :class="classCounter">{{ contador }}</h2>
        <button @click="plus" class="btn btn-success">Aumentar</button>
        <button @click="minus" class="btn btn-danger">Disminuir</button>
        <button @click="reset" class="btn btn-secondary">Resetear</button>
        <button @click="agregar_array" :disabled="bloquearbtn">Agregar</button>
        <br />
            {{ arreglo }}
        <ul class="list-group mt-4">
            <li class="list-group-item" v-for="item in arreglo"
                :key="item" 
            >
                    {{ item }}
            </li>
        </ul>
    </div>
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
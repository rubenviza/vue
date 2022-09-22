<script setup>    

    const name = "Vue dinámico";  

    //metodos - methods
    const handleClick = () => {
      console.log ("me diste click")
    }

    const handleClick2 = (msj) => {
      console.log (msj)
    }
  </script>
  
  <template>
    <h1>Hola {{ name.toUpperCase() }}</h1> 
  
    <button v-on:click="handleClick">Activame 1</button>  
    <button @click="handleClick">Activame 2</button>     <!-- metodo abreviado para evento -->
    <button @click="handleClick2('Texto por aqui')">Con parametro</button>
    
    <br /><br />
    <p>Dependiendo que click se presione en el mouse </p>
    <button @click.right.prevent="handleClick('Activame right')">Click derecho</button>  <!-- prevent es para que evite la funcion por defecto (menu desplegable) --> 
    <button @click="handleClick('Activame left')">Click izquierdo</button> 
    <button @click.middle="handleClick('Activame middle')">Click del centro</button> 
    
  </template>
  
  <style>
    h1 {
      color: green;
    }
  </style>
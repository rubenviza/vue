<script setup>
  const name = "Vue dinámico";
  const styleColor = "color: blue";
  const arrayColores = ["blue", "red", "peru"];
  const activo = true;
  const isactive = false;
  const activo2 = null;
  const arrayFrutas = ["🍎", "🍌", "🍉", "🍓", "🍒"]; 
  const otrasFrutas = [
    { id:1, name:"Manzana", price:"$1.00", description:"una manzana", stock:0},
    { id:2, name:"Pera", price:"$2.00", description:"una pera", stock:10},
    { id:3, name:"Naranja", price:"$3.00", description:"una naranja", stock:20}
  ];
  const objetoFruta = {
    id:50, name:"Chirimoya", price:"$5.00", description:"una chirimoya"
  }
  
</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1> <!-- se pueden usar expresiones de javascript -->

  <h2 v-bind:style="styleColor">Soy azul</h2> <!-- se usa v-bind para atributos dinamicos -->

  <h3 :style="styleColor">Soy azul otra vez</h3> <!-- forma simplificada de v-bind -->

  <h2>{{ arrayColores }}</h2> <!-- vue interpreta arrays y los pasa/muestra como texto -->

  <h2 :style="`color: ${arrayColores[2]}`">Soy Perú</h2>

  <h3>{{ activo ? 'Estoy activo' : 'Estoy inactivo'}}</h3>
  <!-- se puede utilizar operador ternario, pero no if,else,etc. -->

  <!-- directivas -->
  <h2 v-if="isactive">I'm active</h2>
  <p v-if="!isactive">I'm inactive</p>

  <h2 v-if="isactive">I'm active</h2>
  <p v-else>I'm inactive (v-else)</p> <!-- v-else siempre seguido del v-if -->

  <h2 v-if="activo2 === true">
    <div>Ahora estoy activo</div>
  </h2>
  <h2 v-else-if="activo2 === false">Ahora estoy inactivo</h2>
  <h2 v-else>Ahora estoy indeciso (v-if v-else-if v-else)</h2>

  <h2 v-show="!activo">Estoy oculto con v-show</h2> <!-- con v-show, el elemento existe pero esta oculto con css -->

  {{ arrayFrutas }}

  <p>v-for</p>
  <ul>
    <li v-for="(fruta, idx) in arrayFrutas">    <!-- (item, index) En array. Se indica el index opcionalmente -->
      {{idx}} - {{fruta}}
    </li>
  </ul>

  <p>v-for mas key</p>
  <ul>
    <li v-for="(fruta, idx) in arrayFrutas"
      :key="idx">   <!-- vue recomienda asignar un id único a key, en este caso como ejemplo el index -->
          {{idx}} - {{fruta}}
    </li>
  </ul>

  <p>v-for en objeto</p>
  <ul>
    <li v-for="thefruit in otrasFrutas"
      :key="thefruit.id" >   
          {{thefruit.name}} - {{thefruit.price}} - {{thefruit.description}} 
    </li>
  </ul>

  <p>v-for, nombre de propiedades de objeto</p>
  <ul>
    <li v-for="(value, propie, ii) in objetoFruta"   
        :key="ii"
    >      <!-- (valor, propiedad, index) En objeto. Se indica la propiedad e index opcionalmente -->
          {{ii}} - {{propie}} : {{value}}
    </li>
  </ul>

  <p>v-for v-if</p>
  <ul>
   <!-- <li v-for="item in otrasFrutas" :key="item.id" v-if="item.stock > 0">  **** ERROR! v-if tiene mayor peso que el v-for, por lo tanto se ejecuta primero. Error porque item.stock no estaría definido en v-if  -->
        <template v-for="item in otrasFrutas" :key="item.id">     <!-- se usa template para no usar otro elemento (ej. div)-->
          <li v-if="item.stock > 0">
              {{item.name}} - {{item.price}}
          </li>
        </template>
  </ul>
</template>

<style>
  h1 {
    color: red;
  }
</style>
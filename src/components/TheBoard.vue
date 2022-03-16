<script setup>
  import { ref } from 'vue';
  import { POLYGON, SIZE, BOARD } from './polygon.js';
  console.log(POLYGON);
  const size = SIZE;
  const offset = SIZE / 2;
  const hor_offset = offset + offset / 2 


/*
  / \ / \ / \
 |0,0|1,0|2,0|
  \ / \ / \ / \
   |0,1|1,1|2,1|
  / \ / \ / \ /
 |0,2|1,2|2,2|
  \ / \ / \ /
*/

  function flattenArray(){
    let arr = Array()
    for (let row in BOARD ){
      for (let col in BOARD[row]){
        console.log(BOARD[row][col]);
        const obj = {
          "key" : "" + row + "," + col,
          "row" : row,
          "col" : col,
          "colour" : BOARD[row][col]
        };
        arr.push(obj);
      }
    }
    return arr
  }

  const board = ref(flattenArray());

  console.log(board);
  function getPoints(row,col){
    let points = "";
    let counter = 0;
    
    for (let point_key in POLYGON){
      let point = POLYGON[point_key];
      let x = point.x + (col * SIZE) + (row % 2) * offset;
      let y = point.y + (row * hor_offset);
      points += "" + x + " " + y;
      counter ++;
      if (counter < 6) {
        points += ",";
      }
    }
    return points;
   
  }

  function clicked(index, key){
    console.log(board);
    console.log(index);
    console.log(this.board[index]);
    this.board[index].colour = "black";
  }

  
</script>

<template>
  <div class="container">
  <svg class="canvas">
      <polygon v-for="(block, index) in board" v-bind:key="block.key" :points="getPoints(block.row,block.col)" 
      :fill="block.colour" v-on:click="clicked(index, block.key)" />

      <!--polygon :points="getPoints(0,0)" 
      fill="blue" v-on:click="clicked('blue')" />
      <polygon :points="getPoints(1,0)" 
      fill="red" v-on:click="clicked('red')"/>
      <polygon :points="getPoints(0,1)" 
      fill="green" />
      <polygon :points="getPoints(1,1)" 
      fill="blue" />
      <polygon :points="getPoints(0,2)" 
      fill="red" />
      <polygon :points="getPoints(0,3)" 
      fill="green" />
      <polygon :points="getPoints(0,4)" 
      fill="purple" />
      <polygon :points="getPoints(1,2)" 
      fill="purple" />
      <polygon :points="getPoints(1,3)" 
      fill="red" />
      <polygon :points="getPoints(1,4)" 
      fill="blue" /-->
      
    </svg> 
  </div>
</template>

<style scoped>
.canvas {
  height: 100%;
  width: 100%;
}
.container {
  height: 600px;
}
</style>
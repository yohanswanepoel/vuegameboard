<script setup>
  import { ref } from 'vue';
  import { POLYGON, SIZE, BOARD, WIDTH, HEIGHT } from './polygon.js';
  const size = SIZE;
  const offset = SIZE / 2;
  const hor_offset = offset + offset / 2;
  const current_block = ref(-1);
  const TOPLEFT = 1;
  const TOPRIGHT = 2;
  const LEFT = 3;
  const RIGHT = 4;
  const BOTTOMLEFT = 5;
  const BOTTOMRIGHT = 6;
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
        const obj = {
          "key" : "" + row + "," + col,
          "row" : row,
          "col" : col,
          "colour" : BOARD[row][col].colour,
          "original_color":  BOARD[row][col].colour,
          "borders": BOARD[row][col].borders,
          "game_block": BOARD[row][col].game_block
        };
        arr.push(obj);
      }
    }
    return arr
  }

  const board = ref(flattenArray());

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
    if(this.board[index].game_block){
      console.log(this.board[index]);
      if (this.current_block != -1){
        this.board[this.current_block].colour = this.board[this.current_block].original_color;
      }
      this.current_block = index;
      this.board[index].colour = "black";
    }
  }

  function move(direction){
    // validate move
    if(this.possibleDirection(direction)){
      let block = this.board[this.current_block];
      let curRow = parseInt(block.row);
      let curCol = parseInt(block.col);
      let newCol = 0;
      let newRow = 0;
      // left
      if(direction == LEFT){
        newCol = curCol - 1; 
        newRow = curRow;
      }
      // right
      if(direction == RIGHT){
        newCol = curCol + 1; 
        newRow = curRow;
      }
      if(direction == TOPLEFT){
        if (curRow % 2 == 1) {
          newCol = curCol; 
          newRow = curRow - 1;
        } else {
          newCol = curCol - 1; 
          newRow = curRow - 1;
        }
      }
      // Up Right
      if(direction == TOPRIGHT){
        if (curRow % 2 == 1) {
          newCol = curCol + 1; 
          newRow = curRow - 1;
        } else {
          newCol = curCol; 
          newRow = curRow - 1;
        }
      }
      // Down Left
      if(direction == BOTTOMLEFT){
        if (curRow % 2 == 1) {
          newCol = curCol ; 
          newRow = curRow + 1;
        } else {
          newCol = curCol - 1; 
          newRow = curRow + 1;
        }
      }
      // Down Right
      if(direction == BOTTOMRIGHT){
         if (curRow % 2 == 1) {
          newCol = curCol + 1; 
          newRow = curRow + 1;
        } else {
          newCol = curCol; 
          newRow = curRow + 1;
        }
      }
      let searchKey = "" + newRow + "," + newCol
      // find the mapped block based on the new key
      let key = Object.keys(this.board).find(key => this.board[key].key === searchKey);

      // Change the colors
      this.board[this.current_block].colour = this.board[this.current_block].original_color;
      this.current_block = key;
      this.board[key].colour = "black";
    }
  }

  function possibleDirection(direction){
    let row = this.board[this.current_block].row;
    let col = this.board[this.current_block].col;
    let canLeft = 0;
    // Left
    if(direction == LEFT){
      return this.board[this.current_block].borders.left;
    }
    // Right
    if(direction == RIGHT){
      return this.board[this.current_block].borders.right;
    }
    // Up Left
    if(direction == TOPLEFT){
      return this.board[this.current_block].borders.top_left;
    }
    // Up Right
    if(direction == TOPRIGHT){
      return this.board[this.current_block].borders.top_right;
    }
    // Down Left
    if(direction == BOTTOMLEFT){
      return this.board[this.current_block].borders.bottom_left;
    }
    // Down Right
    if(direction == BOTTOMRIGHT){
      return this.board[this.current_block].borders.bottom_right;
    }
    return false;
  }

  
</script>

<template>
  <div class="button_container">
    <div v-if="current_block != -1">
      <button :disabled="!possibleDirection(TOPLEFT)" v-on:click="move(TOPLEFT)">TL</button>
      <button :disabled="!possibleDirection(TOPRIGHT)" v-on:click="move(TOPRIGHT)">TR</button>
      <button :disabled="!possibleDirection(LEFT)" v-on:click="move(LEFT)">L</button>
      <button :disabled="!possibleDirection(RIGHT)" v-on:click="move(RIGHT)">R</button>
      <button :disabled="!possibleDirection(BOTTOMLEFT)" v-on:click="move(BOTTOMLEFT)">BL</button>
      <button :disabled="!possibleDirection(BOTTOMRIGHT)" v-on:click="move(BOTTOMRIGHT)">BR</button>
    </div>
  </div>
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

.button_container{
  padding: 10px;
  width: 100%;
  height: 50px;
  background: lightgray;
}
</style>
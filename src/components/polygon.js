var POLYGON = [
  {x: 0,y: 25},
  {x: 50,y: 0},
  {x: 100,y: 25},
  {x: 100,y: 75},
  {x: 50,y: 100},
  {x: 0,y: 75}];
export {POLYGON};

var SIZE = 100;
export {SIZE};

var WIDTH = 5;
export {WIDTH};
var HEIGHT = 4;
export {HEIGHT};

// @ Todo
// Board needs different types of squares
// Game block || empty block (for non square blocks)
// Board needs to store edge pieces types - this simplifies movement checks
// 1 = game 0 = empty
var BOARD = [
  [
    { 
      colour: 'blue',
      current_colour: 'blue',
      game_block: true,
      borders: {
        top_left: false,
        top_right: false,
        left: false,
        bottom_left: false,
        right: true,
        bottom_right: true
      }
    },
    { 
      colour: 'green',
      current_colour: 'green',
      game_block: true,
      borders: {
        top_left: false,
        top_right: false,
        left: true,
        bottom_left: true,
        right: true,
        bottom_right: true
      }
    },
    { 
      colour: 'red',
      current_colour: 'red',
      game_block: true,
      borders: {
        top_left: false,
        top_right: false,
        left: true,
        bottom_left: true,
        right: true,
        bottom_right: true
      }
    },
    { 
      colour: 'purple',
      current_colour: 'purple',
      game_block: true,
      borders: {
        top_left: false,
        top_right: false,
        left: true,
        bottom_left: true,
        right: true,
        bottom_right: true
      }
    },
    { 
      colour: 'blue',
      current_colour: 'blue',
      game_block: true,
      borders: {
        top_left: false,
        top_right: false,
        left: true,
        bottom_left: true,
        right: false,
        bottom_right: false
      }
    }
  ],
  [
    { 
      colour: 'red',
      current_colour: 'red',
      game_block: true,
      borders: {
        top_left: true,
        top_right: true,
        left: false,
        bottom_left: true,
        right: true,
        bottom_right: true
      }
    },
    { 
      colour: 'blue',
      current_colour: 'blue',
      game_block: true,
      borders: {
        top_left: true,
        top_right: true,
        left: true,
        bottom_left: true,
        right: true,
        bottom_right: true
      }
    },
    { 
      colour: 'green',
      current_colour: 'green',
      game_block: true,
      borders: {
        top_left: true,
        top_right: true,
        left: true,
        bottom_left: true,
        right: true,
        bottom_right: true
      }
    },
    { 
      colour: 'red',
      current_colour: 'red',
      game_block: true,
      borders: {
        top_left: true,
        top_right: true,
        left: true,
        bottom_left: true,
        right: true,
        bottom_right: true
      }
    },
    { 
      colour: 'green',
      current_colour: 'green',
      game_block: true,
      borders: {
        top_left: true,
        top_right: false,
        left: true,
        bottom_left: true,
        right: false,
        bottom_right: false
      }
    }
  ],
  [
    { 
      colour: 'blue',
      current_colour: 'blue',
      game_block: true,
      borders: {
        top_left: false,
        top_right: true,
        left: false,
        bottom_left: false,
        right: true,
        bottom_right: true
      }
    },
    { 
      colour: 'green',
      current_colour: 'green',
      game_block: true,
      borders: {
        top_left: true,
        top_right: true,
        left: true,
        bottom_left: true,
        right: true,
        bottom_right: true
      }
    },
    { 
      colour: 'red',
      current_colour: 'red',
      game_block: true,
      borders: {
        top_left: true,
        top_right: true,
        left: true,
        bottom_left: true,
        right: true,
        bottom_right: true
      }
    },
    { 
      colour: 'purple',
      current_colour: 'purple',
      game_block: true,
      borders: {
        top_left: true,
        top_right: true,
        left: true,
        bottom_left: true,
        right: true,
        bottom_right: true
      }
    },
    { 
      colour: 'blue',
      current_colour: 'blue',
      game_block: true,
      borders: {
        top_left: true,
        top_right: true,
        left: true,
        bottom_left: true,
        right: false,
        bottom_right: true
      }
    }
  ],
  [
    { 
      colour: 'red',
      current_colour: 'red',
      game_block: true,
      borders: {
        top_left: true,
        top_right: true,
        left: false,
        bottom_left: false,
        right: true,
        bottom_right: false
      }
    },
    { 
      colour: 'blue',
      current_colour: 'blue',
      game_block: true,
      borders: {
        top_left: true,
        top_right: true,
        left: true,
        bottom_left: false,
        right: true,
        bottom_right: false
      }
    },
    { 
      colour: 'green',
      current_colour: 'green',
      game_block: true,
      borders: {
        top_left: true,
        top_right: true,
        left: true,
        bottom_left: false,
        right: true,
        bottom_right: false
      }
    },
    { 
      colour: 'red',
      current_colour: 'red',
      game_block: true,
      borders: {
        top_left: true,
        top_right: true,
        left: true,
        bottom_left: false,
        right: true,
        bottom_right: false
      }
    },
    { 
      colour: 'green',
      current_colour: 'green',
      game_block: true,
      borders: {
        top_left: true,
        top_right: false,
        left: true,
        bottom_left: false,
        right: false,
        bottom_right: false
      }
    }
  ],
  [
    { 
      colour: 'white',
      current_colour: 'white',
      game_block: false,
      borders: {
        top_left: true,
        top_right: false,
        left: true,
        bottom_left: false,
        right: false,
        bottom_right: false
      }
    },
    { 
      colour: 'green',
      current_colour: 'green',
      game_block: true,
      borders: {
        top_left: true,
        top_right: true,
        left: false,
        bottom_left: false,
        right: true,
        bottom_right: true
      }
    },
    { 
      colour: 'red',
      current_colour: 'red',
      game_block: true,
      borders: {
        top_left: true,
        top_right: true,
        left: true,
        bottom_left: true,
        right: true,
        bottom_right: false
      }
    },
    { 
      colour: 'blue',
      current_colour: 'blue',
      game_block: true,
      borders: {
        top_left: true,
        top_right: true,
        left: true,
        bottom_left: false,
        right: true,
        bottom_right: false
      }
    },
    { 
      colour: 'purple',
      current_colour: 'purple',
      game_block: true,
      borders: {
        top_left: true,
        top_right: true,
        left: true,
        bottom_left: false,
        right: false,
        bottom_right: false
      }
    }
  ],
  [
    { 
      colour: 'white',
      current_colour: 'white',
      game_block: false,
      borders: {
        top_left: true,
        top_right: false,
        left: true,
        bottom_left: false,
        right: false,
        bottom_right: false
      }
    },
    { 
      colour: 'blue',
      current_colour: 'blue',
      game_block: true,
      borders: {
        top_left: true,
        top_right: true,
        left: false,
        bottom_left: false,
        right: false,
        bottom_right: false
      }
    }
  ]
];
export{BOARD};
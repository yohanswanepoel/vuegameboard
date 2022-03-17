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
var BOARD = [
  [
    { 
      colour: 'blue',
      current_colour: 'blue'
    },
    { 
      colour: 'green',
      current_colour: 'green'
    },
    { 
      colour: 'red',
      current_colour: 'red'
    },
    { 
      colour: 'purple',
      current_colour: 'purple'
    },
    { 
      colour: 'blue',
      current_colour: 'blue'
    }
  ],
  [
    { 
      colour: 'red',
      current_colour: 'red'
    },
    { 
      colour: 'blue',
      current_colour: 'blue'
    },
    { 
      colour: 'green',
      current_colour: 'green'
    },
    { 
      colour: 'red',
      current_colour: 'red'
    },
    { 
      colour: 'green',
      current_colour: 'green'
    }
  ],
  [
    { 
      colour: 'blue',
      current_colour: 'blue'
    },
    { 
      colour: 'green',
      current_colour: 'green'
    },
    { 
      colour: 'red',
      current_colour: 'red'
    },
    { 
      colour: 'purple',
      current_colour: 'purple'
    },
    { 
      colour: 'blue',
      current_colour: 'blue'
    }
  ],
  [
    { 
      colour: 'red',
      current_colour: 'red'
    },
    { 
      colour: 'blue',
      current_colour: 'blue'
    },
    { 
      colour: 'green',
      current_colour: 'green'
    },
    { 
      colour: 'red',
      current_colour: 'red'
    },
    { 
      colour: 'green',
      current_colour: 'green'
    }
  ] 
];
export{BOARD};
const level1 = () => {
    waves: [
        [
        {   body: {shape: 'rectangle', width: 100, height: 40}, 
            style: {color: 'brown'}, 
            vector: { velocity: 1, x: 0, y: 1 }, 
            state: {hit: false},
            position: {x: 0, y: 20} },
        {   body: {shape: 'rectangle', width: 100, height: 40}, 
            style: {color: 'red'}, 
            vector: { velocity: 1, x: 1, y: 2 }, 
            state: {hit: false},
            position: {x: 100, y: 150} },
        {   body: {shape: 'rectangle', width: 100, height: 40}, 
            style: {color: 'grey'}, 
            vector: { velocity: 1, x: -1, y: -1 }, 
            state: {hit: false},
            position: {x: 200, y: 250} },
        {   body: {shape: 'rectangle', width: 100, height: 40}, 
            style: {color: 'green'}, 
            vector: { velocity: 1, x: 2, y: 3 }, 
            state: {hit: false},
            position: {x: 300, y: 350} },
        {   body: {shape: 'rectangle', width: 100, height: 40}, 
            style: {color: 'yellow'}, 
            vector: { velocity: 1, x: 3, y: 5 }, 
            state: {hit: false},
            position: {x: 400, y: 450} },
        {   body: {shape: 'rectangle', width: 100, height: 40}, 
            style: {color: 'pink'}, 
            vector: { velocity: 1, x: 1.5, y: -2 }, 
            state: {hit: false},
            position: {x: 500, y: 550} }
        ]
    ]
}
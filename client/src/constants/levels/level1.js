export const level1 = {
    waves: [
        [{
            body: { shape: 'rectangle', width: 20, height: 20 },
            style: { color: 'white', lineWidth: 2 },
            vector: { velocity: 1, x: 0, y: 0 },
            path: [{ x: 150, y: 130 }, { x: 150, y: 230 }, { x: 250, y: 230 }, { x: 250, y: 430 }, { x: 400, y: 430 }, { x: 400, y: 450 },{ x: 600, y: 450 } ],
            state: { hit: false, visible: true, hittable: false, health: 10 },
            position: { x: -100, y: 130, rotation: 0 },
            children: []
        },
        /*
        {
            body: { shape: 'rectangle', width: 20, height: 20 },
            style: { color: 'red', lineWidth: 1 },
            vector: { velocity: 1, x: -2, y: 1 },
            path: 'random',
            state: { hit: false, visible: true, hittable: false, health: 10 },
            position: { x: 300, y: 350, rotation: 0 },
            children: []
        },
        {
            body: { shape: 'rectangle', width: 20, height: 20 },
            style: { color: 'red', lineWidth: 1 },
            vector: { velocity: 1, x: 0, y: 1 },
            path: 'random',
            state: { hit: false, visible: true, hittable: false, health: 10 },
            position: { x: 200, y: 450, rotation: 0 },
            children: []
        },
        {
            body: { shape: 'rectangle', width: 20, height: 20 },
            style: { color: 'red', lineWidth: 1 },
            vector: { velocity: 1, x: 5, y: -1 },
            path: 'random',
            state: { hit: false, visible: true, hittable: false, health: 10 },
            position: { x: 500, y: 550, rotation: 0 },
            children: []
        },
        {
            body: { shape: 'rectangle', width: 20, height: 20 },
            style: { color: 'red', lineWidth: 1 },
            vector: { velocity: 1, x: 10, y: 1 },
            path: 'random',
            state: { hit: false, visible: true, hittable: false, health: 10 },
            position: { x: 0, y: 20, rotation: 0 },
            children: []
        },
        {
            body: { shape: 'rectangle', width: 20, height: 20 },
            style: { color: 'red', lineWidth: 1 },
            vector: { velocity: 1, x: 1, y: -1 },
            path: 'random',
            state: { hit: false, visible: true, hittable: false, health: 10 },
            position: { x: 20, y: 150, rotation: 0 },
            children: []
        },

        {
            body: { shape: 'rectangle', width: 20, height: 20 },
            style: { color: 'red', lineWidth: 1 },
            vector: { velocity: 1, x: -5, y: 1 },
            path: 'random',
            state: { hit: false, visible: true, hittable: false, health: 10 },
            position: { x: 200, y: 250, rotation: 0 },
            children: []
        },
        {
            body: { shape: 'rectangle', width: 20, height: 20 },
            style: { color: 'red', lineWidth: 1 },
            vector: { velocity: 1, x: -2, y: 1 },
            path: 'random',
            state: { hit: false, visible: true, hittable: false, health: 10 },
            position: { x: 300, y: 350, rotation: 0 },
            children: []
        },
        {
            body: { shape: 'rectangle', width: 20, height: 20 },
            style: { color: 'red', lineWidth: 1 },
            vector: { velocity: 1, x: 0, y: 1 },
            path: 'random',
            state: { hit: false, visible: true, hittable: false, health: 10 },
            position: { x: 200, y: 450, rotation: 0 },
            children: []
        },
        {
            body: { shape: 'rectangle', width: 20, height: 20 },
            style: { color: 'red', lineWidth: 1 },
            vector: { velocity: 1, x: 5, y: -1 },
            path: 'random',
            state: { hit: false, visible: true, hittable: false, health: 10 },
            position: { x: 500, y: 550, rotation: 0 },
            children: []
        },

        {
            body: { shape: 'rectangle', width: 20, height: 20 },
            style: { color: 'red', lineWidth: 1 },
            vector: { velocity: 1, x: 10, y: 1 },
            path: 'random',
            state: { hit: false, visible: true, hittable: false, health: 10 },
            position: { x: 0, y: 20, rotation: 0 },
            children: []
        },
        {
            body: { shape: 'rectangle', width: 20, height: 20 },
            style: { color: 'red', lineWidth: 1 },
            vector: { velocity: 1, x: 1, y: -1 },
            path: 'random',
            state: { hit: false, visible: true, hittable: false, health: 10 },
            position: { x: 20, y: 150, rotation: 0 },
            children: []
        },
        {
            body: { shape: 'rectangle', width: 20, height: 20 },
            style: { color: 'red', lineWidth: 1 },
            vector: { velocity: 1, x: -5, y: 1 },
            path: 'random',
            state: { hit: false, visible: true, hittable: false, health: 10 },
            position: { x: 200, y: 250, rotation: 0 },
            children: []
        },
            
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
    
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 2 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
    
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
    
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
    
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
    
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
    
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
    
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
    
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 2 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
    
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
    
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
    
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -5, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 250, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: -2, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 300, y: 350, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 0, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 200, y: 450, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 5, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 500, y: 550, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 10, y: 1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 0, y: 20, rotation: 0 },
                children: []
            },
            {
                body: { shape: 'rectangle', width: 20, height: 20 },
                style: { color: 'red', lineWidth: 1 },
                vector: { velocity: 1, x: 1, y: -1 },
                path: 'random',
                state: { hit: false, visible: true, hittable: false, health: 10 },
                position: { x: 20, y: 150, rotation: 0 },
                children: []
            }
            */
        ]
    ]
}


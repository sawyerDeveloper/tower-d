export const gameData = {
    config: {
        paths: [
            [{ x: 150, y: 130 }, { x: 150, y: 230 }, { x: 250, y: 230 }, { x: 250, y: 430 }, { x: 400, y: 430 }, { x: 400, y: 450 }, { x: 600, y: 450 }]
        ]
    },
    levels: [
        {
            name: 'Level 1',
            backgroundImage: "bg.jpg",
            interWaveTime: 5,
            waves: [
                //  wave 1
                [{
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'white', lineWidth: 2 },
                    vector: { velocity: 2, x: 0, y: 0 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 0 },
                    position: { x: -100, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: -2, y: 1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 180 },
                    position: { x: -200, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: 0, y: 1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 360 },
                    position: { x: -300, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: 5, y: -1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 540 },
                    position: { x: -400, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: 10, y: 1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 720 },
                    position: { x: -500, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: 1, y: -1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 900 },
                    position: { x: -600, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: -5, y: 1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 1080 },
                    position: { x: -700, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: -2, y: 1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 1260 },
                    position: { x: -800, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: 0, y: 1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 1440 },
                    position: { x: -900, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: 5, y: -1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 180 },
                    position: { x: -1000, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                }],

                //  wave 2
                [{
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'white', lineWidth: 2 },
                    vector: { velocity: 2, x: 0, y: 0 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 0 },
                    position: { x: -100, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: -2, y: 1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 180 },
                    position: { x: -200, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: 0, y: 1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 360 },
                    position: { x: -300, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: 5, y: -1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 540 },
                    position: { x: -400, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: 10, y: 1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 720 },
                    position: { x: -500, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: 1, y: -1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 900 },
                    position: { x: -600, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: -5, y: 1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 1080 },
                    position: { x: -700, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: -2, y: 1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 1260 },
                    position: { x: -800, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: 0, y: 1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 1440 },
                    position: { x: -900, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: 5, y: -1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 180 },
                    position: { x: -1000, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                }],

                //  wave 3
                [{
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'white', lineWidth: 2 },
                    vector: { velocity: 2, x: 0, y: 0 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 0 },
                    position: { x: -100, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: -2, y: 1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 180 },
                    position: { x: -200, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: 0, y: 1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 360 },
                    position: { x: -300, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: 5, y: -1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 540 },
                    position: { x: -400, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: 10, y: 1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 720 },
                    position: { x: -500, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: 1, y: -1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 900 },
                    position: { x: -600, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: -5, y: 1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 1080 },
                    position: { x: -700, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: -2, y: 1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 1260 },
                    position: { x: -800, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: 0, y: 1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 1440 },
                    position: { x: -900, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: 5, y: -1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 180 },
                    position: { x: -1000, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                }],

                //  wave 4
                [{
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'white', lineWidth: 2 },
                    vector: { velocity: 2, x: 0, y: 0 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 0 },
                    position: { x: -100, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: -2, y: 1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 180 },
                    position: { x: -200, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: 0, y: 1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 360 },
                    position: { x: -300, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: 5, y: -1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 540 },
                    position: { x: -400, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: 10, y: 1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 720 },
                    position: { x: -500, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: 1, y: -1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 900 },
                    position: { x: -600, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: -5, y: 1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 1080 },
                    position: { x: -700, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: -2, y: 1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 1260 },
                    position: { x: -800, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: 0, y: 1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 1440 },
                    position: { x: -900, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                },
                {
                    body: { shape: 'rectangle', width: 30, height: 20 },
                    style: { color: 'red', lineWidth: 1 },
                    vector: { velocity: 2, x: 5, y: -1 },
                    path: 0,
                    state: { hit: false, visible: true, hittable: false, health: 10, offset: 180 },
                    position: { x: -1000, y: 130, rotation: 0 },
                    constants: { hitPoints: 10, killBounty: 100 },
                    children: []
                }]
            ]
        }
    ]
}
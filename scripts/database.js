const database = {
    fish: [
        {
            id: 1,
            imgSrc: "http://3.bp.blogspot.com/-chXVikVujVU/Ufa3_dTXN9I/AAAAAAAAM4Y/AB58fEmbi5g/s500/1a.jpg",
            imgAlt: "Full body blue orange green and yellow mandarin fish",
            name: "Jeff",
            species: "Mandarin Fish",
            length: 5,
            harvestSite: "Bahamas",
            diet: "Cheetos"
        },
        {
            id: 2,
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCsH2h2Pj2a1aXMe_9pb_mUhqN-q8x0VwPm-fvXFhlLNBkR-p9ypNEMJQv7_Nx7kS-YLw&usqp=CAU",
            imgAlt: "clown fish on reef",
            name: "Maggie",
            species: "Clown Fish",
            length: 8,
            harvestSite: "Australia",
            diet: "Nacho Fries from Taco Bell"
        },
        {
            id: 3,
            imgSrc: "https://media-be.chewy.com/wp-content/uploads/betta-splendens-red.jpg",
            imgAlt: "red beta fish on black background",
            name: "Beezlebub",
            species: "Beta Fish",
            length: 7,
            harvestSite: "the depths of Hell",
            diet: "the other fish"
        },
        { 
            id: 4,
            imgSrc: "https://cf.ltkcdn.net/small-pets/images/std-xs/261074-340x227-Trichogaster.jpg",
            imgAlt: "bright turquoise fish in front of log",
            name: "Don Ronaldo",
            species: "Turkey Finned Flapper",
            length: 12,
            harvestSite: "Puerto Rico",
            diet: "Fish food"
        },
        {
            id: 5,
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUpGSkjQ2bWfyjNoIUzMcjGQjSHmvd8rJUSg&usqp=CAU",
            imgAlt: "bright yellow tropical fish on purple background",
            name: "Gina",
            species: "Yellow Headed Fish",
            length: 4,
            harvestSite: "Jamaica",
            diet: "Cheesburgers in Paradise"
        },
        {
            id: 6,
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT61zL9_1O0mdzwXKMpbRRSdhWftY0HyGhMpQ&usqp=CAU",
            imgAlt: "blue and black striped fish",
            name: "Zanie Veins",
            species: "Terror Fish",
            length: 8,
            harvestSite: "Florida Panhandle",
            diet: "Shrimp Po Boys"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}
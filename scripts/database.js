const database = {
    fish: [
        {
            id: 1,
            name: "Jeff",
            species: "Mandarin Fish",
            length: "5cm",
            harvestSite: "Bahamas",
            diet: "Cheetos"
        },
        {
            id: 2,
            name: "Maggie",
            species: "Clown Fish",
            length: "8cm",
            harvestSite: "Australia",
            diet: "Nacho Fries from Taco Bell"
        },
        {
            id: 3,
            name: "Beezlebub",
            dpecies: "Beta Fish",
            length: "7 cm",
            harvestSite: "the depths of Hell",
            diet: "the other fish"
        },
        { 
            id: 4,
            name: "Don Ronaldo",
            species: "Turkey Finned Flapper",
            length: "12 cm",
            harvestSite: "Puerto Rico",
            diet: "Fish food"
        },
        {
            id: 5,
            name: "Gina",
            species: "Yellow Headed Fish",
            length: "4 cm",
            harvestSite: "Jamaica",
            diet: "Cheesburgers in Paradise"
        },
        {
            id: 6,
            name: "Zanie Veins",
            species: "Terror Fish",
            length: "8 cm",
            harvestSite: "Florida Panhandle",
            diet: "Shrimp Po Boys"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}
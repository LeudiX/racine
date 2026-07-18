export const RACINE_DATA = {
    brand: {
        name: "RACINE",
        tagline: "Multidisciplinary studio specializing in biomechanical wearable objects and sculptures.",
        description: "Merging traditional leatherwork with advanced 3D printing and CNC technology. Racine creates modular, extreme silhouettes inspired by cosmic archetypes and psychedelic iconography, functioning as a bridge between the metaphysical and the material." //[cite: 3]
    },
    placements: [
        { client: "Swae Lee", context: "Coachella", imageId: "swae-lee" }, //[cite: 3]
        { client: "Lil Nas X", context: "The Eric Andre Show", imageId: "lil-nas-x" }, //[cite: 3]
        { client: "Matt Ox", context: "Editorial", imageId: "matt-ox" }, //[cite: 3]
        { client: "Dorian Electra", context: "Paper Mag", imageId: "dorian" } //[cite: 3]
    ],
    products: [
        {
            id: "RAC-CO-01-BLK",
            name: "Racine Collar",
            description: "Black adjustable leather collar with CNC milled hardware on tripods.", //[cite: 3]
            materials: "Top grain cow leather, CNC milled aluminum, nylon, metal.", //[cite: 3]
            priceRRP: "275 USD", //[cite: 3]
            imagePath: "/assets/products/racine_urchin_necklace01.png"
        },
        {
            id: "RAC-CP-01-BLK",
            name: "Racine Cap",
            description: "Black signature adjustable leather cap with extended visor, back flap and metal hoops.", //[cite: 3]
            materials: "Top grain cow leather, cow suede, nylon, metal hardware.", //[cite: 3]
            priceRRP: "350 USD", //[cite: 3]
            imagePath: "/assets/products/racine_urchin_necklace01.png"
        },
        {
            id: "RAC-BL-01-BLK",
            name: "Racine Belt",
            description: "Black adjustable leather belt with CNC milled hardware on tripods.", //[cite: 3]
            materials: "Top grain cow leather, CNC milled aluminum, nylon, metal.", //[cite: 3]
            priceRRP: "450 USD", //[cite: 3]
            imagePath: "/assets/products/racine_urchin_necklace01.png"
        }
    ],
    distribution: {
        losAngeles: { role: "Talent & Editorial", entity: "Alligator Jesus" }, //[cite: 3]
        montreal: { role: "Production & Archive", entity: "Lignes de Fuite" }, //[cite: 3]
        global: { role: "Direct Channel", entity: "Apocene" } //[cite: 3]
    }
};
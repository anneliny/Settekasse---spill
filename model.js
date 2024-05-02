const model = {
    app: {
        currentPage: null,
        selectedTreasure: null,
        location: null,
        page: [
            'mainView',
            'findTreasureView',
            'treasureView',  
        ]
    },

    input: {

        filter: {
            location: 'all',
        },

    },

    data: {
        rarityComment: ['Kjedelig', 'Vanlig', 'Superdupermegakul'],
        collectedTreasure: [],
    
        treasures: [
            {
                location: 'forest',
                name: 'Fjær',
                text: 'Du fant en fjær, så heldig du er!',
                img: 'pic/skogsfjær.png',
                rarity: 1,
            },
            {
                location: 'forest',
                name: 'Bein',
                text: 'Ett bein, woooow, kult!',
                img: 'pic/bein.png',
                rarity: 2,
            },
            {
                location: 'forest',
                name: 'Kjuke',
                text: 'Nommin, se den lille soppen daaa',
                img: 'pic/kjuke.png',
                rarity: 2,
            },
            {
                location: 'forest',
                name: 'Mose',
                text: 'Alltid fint å ta med litt mose til å pynte med',
                img: 'pic/mose.png',
                rarity: 0,
            },
            {
                location: 'forest',
                name: 'sneglehus',
                text: 'Ingen snegle hjemme, bare å ta det med',
                img: 'pic/sneglehus.png',
                rarity: 1,
            },
            {
                location: 'forest',
                name: 'Stein',
                text: 'Skal du ha med en stein altså? Saaaame',
                img: 'pic/stein.png',
                rarity: 0,
            },
            {
                location: 'forest',
                name: 'Trebit',
                text: 'En liten trebit er vel alltid kjekt å ha',
                img: 'pic/trebit.png',
                rarity: 1,
            },
            {
                location: 'beach',
                name: 'Blåskjell',
                text: 'Så sykt utrolig spennende, ett blåskjell jo!',
                img: 'pic/blåskjell.png',
                rarity: 0,
            },
            {
                location: 'beach',
                name: 'Gult sneglehus',
                text: 'Aww, tenk på den lille snegla som levde inni her før',
                img: 'pic/gultsneglehus.png',
                rarity: 1,
            },
            {
                location: 'beach',
                name: 'Kamskjell',
                text: 'Dette kamskjellet må du jo bare ta vare på!!',
                img: 'pic/kamskjell.png',
                rarity: 2,
            },
            {
                location: 'beach',
                name: 'Albueskjell',
                text: 'Stilig, ett albueskjell',
                img: 'pic/albueskjell.png',
                rarity: 2,
            },
            {
                location: 'beach',
                name: 'hjerteskjell',
                text: 'Tja, tjo, var jo litt fint dette vel?',
                img: 'pic/hjerteskjell.png',
                rarity: 0,
            },
            {
                location: 'beach',
                name: 'Kongesnegl',
                text: 'Oi, dette var et helt og pent sneglehus, spar på det!',
                img: 'pic/kongesnegl.png',
                rarity: 1,
            },
            {
                location: 'beach',
                name: 'Kuskjell',
                text: 'Wow, dette var stort, er det plass til dette da?',
                img: 'pic/kuskjell.png',
                rarity: 2,
            },
            {
                location: 'beach',
                name: 'Pelikanfotsnegl',
                text: 'Jeg eeeelsker disse, ta det med deg ellers får du angre!',
                img: 'pic/pelikanfotsnegl.png',
                rarity: 2,
            },
            {
                location: 'beach',
                name: 'Rur',
                text: 'Denne hadde passet fint i samlinga',
                img: 'pic/rur.png',
                rarity: 1,
            },
            {
                location: 'beach',
                name: 'Sjøstjerne',
                text: 'Stakkars lille sjøstjerna, hmm, hadde vært fint som pynt da?',
                img: 'pic/sjøstjerne.png',
                rarity: 2,
            },
            {
                location: 'beach',
                name: 'Tårnsnegl',
                text: 'Ett mini enhjørnings horn, wowsa',
                img: 'pic/tårnsnegl.png',
                rarity: 0,
            },
        ],
    }
} 
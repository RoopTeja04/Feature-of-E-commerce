const footwear = [
    {
        id: 1,
        name: "Catwalk Women's Block Heel Sandals",
        imageURL: "https://m.media-amazon.com/images/I/61wa+XRY7UL._AC_UY1000_.jpg",
        price: 1499,
        color: "Black",
        type: "Block Heel",
        material: "Synthetic",
        heelHeight: "3 inches",
        soleMaterial: "TPR",
        starRating: 4.0,
        shortName: "Catwalk Sandals"
    },
    {
        id: 2,
        name: "Bata Women's Wedge Sandals",
        imageURL: "https://m.media-amazon.com/images/I/51YFrzz-SDL._AC_UY1000_.jpg",
        price: 999,
        color: "Brown",
        type: "Wedge Heel",
        material: "Faux Leather",
        heelHeight: "2.5 inches",
        soleMaterial: "Rubber",
        starRating: 3.5,
        shortName: "Bata Sandals"
    },
    {
        id: 3,
        name: "Metro Women's Stilettos",
        imageURL: "https://assets.ajio.com/medias/sys_master/root/20231221/rcHn/658467a0afa4cf41f5e241d2/-473Wx593H-466901878-black-MODEL.jpg",
        price: 1799,
        color: "Beige",
        type: "Stiletto",
        material: "Patent Leather",
        heelHeight: "4 inches",
        soleMaterial: "Synthetic",
        starRating: 4.0,
        shortName: "Metro Stilettos"
    },
    {
        id: 4,
        name: "Hush Puppies Women's Flat Slippers",
        imageURL: "https://m.media-amazon.com/images/I/51CFLqAxYPL._AC_UY1000_.jpg",
        price: 1299,
        color: "Nude",
        type: "Flat",
        material: "Leather",
        heelHeight: "0.5 inches",
        soleMaterial: "Rubber",
        starRating: 3.5,
        shortName: "Hush Puppies"
    },
    {
        id: 5,
        name: "Crocs Women's LiteRide Sandals",
        imageURL: "https://m.media-amazon.com/images/I/81rsp-xrJrL._AC_UY1000_.jpg",
        price: 1899,
        color: "Blue",
        type: "Casual Slip-on",
        material: "Croslite",
        heelHeight: "1 inch",
        soleMaterial: "Croslite",
        starRating: 4.0,
        shortName: "Crocs Sandals"
    },
    {
        id: 6,
        name: "Mochi Women's Heels",
        imageURL: "https://m.media-amazon.com/images/I/713o9x-8dUL._AC_UY1000_.jpg",
        price: 1599,
        color: "Red",
        type: "Pencil Heel",
        material: "Synthetic",
        heelHeight: "3.5 inches",
        soleMaterial: "PU",
        starRating: 4.0,
        shortName: "Mochi Heels"
    },
    {
        id: 7,
        name: "Liberty Women's Comfort Sandals",
        imageURL: "https://m.media-amazon.com/images/I/61QacstHyoL._AC_UY1000_.jpg",
        price: 899,
        color: "Grey",
        type: "Flat",
        material: "Synthetic Leather",
        heelHeight: "1 inch",
        soleMaterial: "Rubber",
        starRating: 3.5,
        shortName: "Liberty Sandals"
    },
    {
        id: 8,
        name: "Red Tape Women's Wedge Sandals",
        imageURL: "https://m.media-amazon.com/images/I/71pU98SnCxL._AC_UY1000_.jpg",
        price: 1199,
        color: "Golden",
        type: "Wedge Heel",
        material: "Fabric",
        heelHeight: "2 inches",
        soleMaterial: "EVA",
        starRating: 3.5,
        shortName: "Red Tape Wedges"
    },
    {
        id: 9,
        name: "Aldo Women's Strappy Heels",
        imageURL: "https://m.media-amazon.com/images/I/61hVUMfFlvL._AC_UY1000_.jpg",
        price: 2499,
        color: "Silver",
        type: "Stiletto",
        material: "Synthetic",
        heelHeight: "3.5 inches",
        soleMaterial: "Synthetic",
        starRating: 4.0,
        shortName: "Aldo Heels"
    },
    {
        id: 10,
        name: "Ajanta Women's Platform Heels",
        imageURL: "https://m.media-amazon.com/images/I/71XuyA6GV-L._AC_UY1000_.jpg",
        price: 699,
        color: "Pink",
        type: "Platform Heel",
        material: "Synthetic",
        heelHeight: "3 inches",
        soleMaterial: "TPR",
        starRating: 3.5,
        shortName: "Ajanta Platforms"
    },
    {
        id: 11,
        name: "Campus Women's Slip-on Sandals",
        imageURL: "https://m.media-amazon.com/images/I/71iVwM2CAGL._AC_UY1000_.jpg",
        price: 999,
        color: "Purple",
        type: "Flat",
        material: "Fabric",
        heelHeight: "0.5 inches",
        soleMaterial: "Rubber",
        starRating: 3.5,
        shortName: "Campus Sandals"
    },
    {
        id: 12,
        name: "Steve Madden Women's High Heel Sandals",
        imageURL: "https://m.media-amazon.com/images/I/81h2HrxG4zL._AC_UY1000_.jpg",
        price: 2799,
        color: "Black",
        type: "Pencil Heel",
        material: "Leather",
        heelHeight: "4 inches",
        soleMaterial: "TPU",
        starRating: 4.0,
        shortName: "Steve Madden"
    },
    {
        id: 13,
        name: "Bata Women's Ballerina Flats",
        imageURL: "https://m.media-amazon.com/images/I/5136VtJ0UYL._AC_UY1000_.jpg",
        price: 799,
        color: "Navy Blue",
        type: "Flat",
        material: "Synthetic",
        heelHeight: "0.5 inches",
        soleMaterial: "TPR",
        starRating: 3.5,
        shortName: "Bata Flats"
    },
    {
        id: 14,
        name: "Van Heusen Women's Slingback Heels",
        imageURL: "https://m.media-amazon.com/images/I/51ZyrkOXzQL._AC_UY1000_.jpg",
        price: 1899,
        color: "Rose Gold",
        type: "Block Heel",
        material: "Synthetic Leather",
        heelHeight: "2.5 inches",
        soleMaterial: "Rubber",
        starRating: 4.0,
        shortName: "Van Heusen Slingbacks"
    },
    {
        id: 15,
        name: "Khadim's Women's Slip-on Heels",
        imageURL: "https://m.media-amazon.com/images/I/61FhLCIb9dL._AC_UY1000_.jpg",
        price: 999,
        color: "Tan",
        type: "Low Heel",
        material: "Faux Leather",
        heelHeight: "2 inches",
        soleMaterial: "Rubber",
        starRating: 3.5,
        shortName: "Khadim's Heels"
    }
];

export default footwear;
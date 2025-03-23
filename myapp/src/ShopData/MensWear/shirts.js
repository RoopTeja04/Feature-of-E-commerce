const Shirts = [
    {
        id: 1,
        name: "Allen Solly Men's Casual Shirt",
        shortName: "Allen Solly Casual",
        imageURL: "https://m.media-amazon.com/images/I/61e3wsSY60L._AC_UY1100_.jpg",
        price: 1799,
        brand: "Allen Solly",
        fabric: "Cotton",
        fit: "Regular Fit",
        color: "Blue",
        pattern: "Checked",
        starRating: 4.5
    },
    {
        id: 2,
        name: "Peter England Men's Formal Shirt",
        shortName: "Peter England Formal",
        imageURL: "https://m.media-amazon.com/images/I/61qhrdE7KzL._AC_UY1100_.jpg",
        price: 1399,
        brand: "Peter England",
        fabric: "Cotton Blend",
        fit: "Slim Fit",
        color: "White",
        pattern: "Solid",
        starRating: 4.3
    },
    {
        id: 3,
        name: "Van Heusen Men's Casual Shirt",
        shortName: "Van Heusen Casual",
        imageURL: "https://m.media-amazon.com/images/I/51cXqWkcPkL._AC_UY350_.jpg",
        price: 1599,
        brand: "Van Heusen",
        fabric: "Cotton",
        fit: "Regular Fit",
        color: "Green",
        pattern: "Solid",
        starRating: 4.7
    },
    {
        id: 4,
        name: "Levi's Men's Denim Shirt",
        shortName: "Levi's Denim",
        imageURL: "https://m.media-amazon.com/images/I/51F0zWIZuyL._AC_UY1100_.jpg",
        price: 2799,
        brand: "Levi's",
        fabric: "Denim",
        fit: "Regular Fit",
        color: "Light Blue",
        pattern: "Solid",
        starRating: 4.8
    },
    {
        id: 5,
        name: "United Colors of Benetton Men's Shirt",
        shortName: "Benetton Checked",
        imageURL: "https://m.media-amazon.com/images/I/611BW8oghXL._AC_UY1100_.jpg",
        price: 1999,
        brand: "Benetton",
        fabric: "Cotton",
        fit: "Slim Fit",
        color: "Black",
        pattern: "Checked",
        starRating: 4.2
    },
    {
        id: 6,
        name: "H&M Men's Regular Fit Shirt",
        shortName: "H&M Regular",
        imageURL: "https://images-eu.ssl-images-amazon.com/images/I/71XtmBjZm2L._AC_SR462,693_.jpg",
        price: 1499,
        brand: "H&M",
        fabric: "Cotton Blend",
        fit: "Regular Fit",
        color: "White",
        pattern: "Solid",
        starRating: 4.4
    },
    {
        id: 7,
        name: "Roadster Men's Casual Shirt",
        shortName: "Roadster Casual",
        imageURL: "https://m.media-amazon.com/images/I/41VEkyJkgfL._AC_UY1100_.jpg",
        price: 1099,
        brand: "Roadster",
        fabric: "Cotton",
        fit: "Regular Fit",
        color: "Maroon",
        pattern: "Solid",
        starRating: 4.1
    },
    {
        id: 8,
        name: "Fabindia Men's Handwoven Shirt",
        shortName: "Fabindia Handwoven",
        imageURL: "https://m.media-amazon.com/images/I/61mCWGMYvCL._AC_UY1100_.jpg",
        price: 2499,
        brand: "Fabindia",
        fabric: "Cotton",
        fit: "Regular Fit",
        color: "White",
        pattern: "Solid",
        starRating: 4.9
    },
    {
        id: 9,
        name: "Tommy Hilfiger Men's Shirt",
        shortName: "Tommy Hilfiger",
        imageURL: "https://m.media-amazon.com/images/I/81nGF92qxgL._AC_UY1100_.jpg",
        price: 3999,
        brand: "Tommy Hilfiger",
        fabric: "Cotton",
        fit: "Slim Fit",
        color: "Navy Blue",
        pattern: "Solid",
        starRating: 4.8
    },
    {
        id: 10,
        name: "Mango Men's Casual Shirt",
        shortName: "Mango Checked",
        imageURL: "https://m.media-amazon.com/images/I/61JKBP4ONFL._AC_UY1100_.jpg",
        price: 1999,
        brand: "Mango",
        fabric: "Cotton",
        fit: "Regular Fit",
        color: "Light Blue",
        pattern: "Checked",
        starRating: 4.6
    },
    {
        id: 11,
        name: "Puma Men's Training Shirt",
        shortName: "Puma Training",
        imageURL: "https://m.media-amazon.com/images/I/611lHFTcvCL._AC_UY1100_.jpg",
        price: 1699,
        brand: "Puma",
        fabric: "Polyester",
        fit: "Regular Fit",
        color: "Black",
        pattern: "Solid",
        starRating: 4.3
    },
    {
        id: 12,
        name: "Wrangler Men's Denim Shirt",
        shortName: "Wrangler Denim",
        imageURL: "https://m.media-amazon.com/images/I/B1HwbFAWbmL._AC_UY1100_.jpg",
        price: 2399,
        brand: "Wrangler",
        fabric: "Denim",
        fit: "Regular Fit",
        color: "Dark Blue",
        pattern: "Solid",
        starRating: 4.7
    },
    {
        id: 13,
        name: "Biba Men's Kurta Shirt",
        shortName: "Biba Kurta",
        imageURL: "https://m.media-amazon.com/images/I/81fJ6Z0yGLL._AC_UY1100_.jpg",
        price: 1799,
        brand: "Biba",
        fabric: "Cotton",
        fit: "Regular Fit",
        color: "Yellow",
        pattern: "Printed",
        starRating: 4.0
    },
    {
        id: 14,
        name: "Zodiac Men's Formal Shirt",
        shortName: "Zodiac Formal",
        imageURL: "https://m.media-amazon.com/images/I/316SrEAEhRL._AC_UY1100_.jpg",
        price: 2299,
        brand: "Zodiac",
        fabric: "Cotton Blend",
        fit: "Slim Fit",
        color: "Light Pink",
        pattern: "Solid",
        starRating: 4.2
    },
    {
        id: 15,
        name: "Club Factory Men's Printed Shirt",
        shortName: "Club Factory Printed",
        imageURL: "https://m.media-amazon.com/images/I/61SQBqifKTL._AC_UY1100_.jpg",
        price: 899,
        brand: "Club Factory",
        fabric: "Cotton",
        fit: "Regular Fit",
        color: "Multi-Color",
        pattern: "Printed",
        starRating: 3.8
    }
];

export default Shirts;
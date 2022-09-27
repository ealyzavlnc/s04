db.employee.insertMany([
    /* 1 */
    {
        "_id" : "345342",
        "eName" : "Joonkuk Jeon",
        "eAge" : 25,
        "role" : "Store Associate",
        "salary" : 45000
    },

    /* 2 */
    {
        "_id" : "312456",
        "eName" : "Joongki Song",
        "eAge" : 28,
        "role" : "Store Manager",
        "salary" : 120000
    },

    /* 3 */
    {
        "_id" : "334566",
        "eName" : "Jin Kim",
        "eAge" : 35,
        "role" : "Cashier",
        "salary" : 67500
    },

    /* 4 */
    {
        "_id" : "245345",
        "eName" : "Hye Kyo Song",
        "eAge" : 40,
        "role" : "Senior Cashier",
        "salary" : 72500
    },

    /* 5 */
    {
        "_id" : "445364",
        "eName" : "Tae Hyung Kim",
        "eAge" : 22,
        "role" : "Store Associate",
        "salary" : 35000
    }
    ]);

db.inventory.insertMany([
    /* 1 */
    {
        "_id" : "LS0000123",
        "pName" : "XYZ Chocolate Bar - 100g",
        "price" : 5.23,
        "quantity" : 25000,
        "category" : [ 
            "chocolates", 
            "sweets"
        ]
    },

    /* 2 */
    {
        "_id" : "LS0003123",
        "pName" : "Milk Non-Fat - 1lt",
        "price" : 3.0,
        "quantity" : 1000,
        "category" : [ 
            "dairy", 
            "healthy"
        ]
    },

    /* 3 */
    {
        "_id" : "LS0004566",
        "pName" : "Eggs - 12 Pack",
        "price" : 6.0,
        "quantity" : 5000,
        "category" : [ 
            "poultry", 
            "generic"
        ]
    },

    /* 4 */
    {
        "_id" : "LS0008542",
        "pName" : "Whole Chicken",
        "price" : 12.59,
        "quantity" : 1250,
        "category" : [ 
            "poultry", 
            "meat"
        ]
    },

    /* 5 */
    {
        "_id" : "LS00008543",
        "pName" : "Carrots (Packed) - 250g",
        "price" : 3.5,
        "quantity" : 3000,
        "category" : [ 
            "vegetables", 
            "healthy", 
            "organic"
        ]
    },

    /* 6 */
    {
        "_id" : "LS0009846",
        "pName" : "Beans (Packed) - 250g",
        "price" : 6.75,
        "quantity" : 6000,
        "category" : [ 
            "vegetables", 
            "healthy", 
            "organic"
        ]
    },

    /* 7 */
    {
        "_id" : "LS0009100",
        "pName" : "Bell Pepper (Packed) - 250 g",
        "price" : 4.95,
        "quantity" : 12000,
        "category" : [ 
            "vegetables", 
            "healthy", 
            "organic"
        ]
    },

    /* 8 */
    {
        "_id" : "LS0002688",
        "pName" : "ZZ Butter - 500 g",
        "price" : 25.0,
        "quantity" : 500,
        "category" : [ 
            "dairy", 
            "healthy", 
            "premium"
        ]
    }
    ]);

db.promo.insertMany([
    /* 1 */
    {
        "_id" : "PROMO01",
        "promo" : "Sales Promo",
        "period" : 7.0,
        "dSales" : [ 
            20, 
            50, 
            12, 
            30, 
            45, 
            15, 
            60
        ]
    },

    /* 2 */
    {
        "_id" : "PROMO02",
        "promo" : "Milk Promo",
        "period" : 2.0,
        "dSales" : [ 
            120, 
            200
        ]
    },

    /* 3 */
    {
        "_id" : "PROMO04",
        "promo" : "New Year Promo",
        "period" : 7.0,
        "dSales" : [ 
            68, 
            88, 
            105, 
            188, 
            74, 
            278, 
            350
        ]
    },

    /* 4 */
    {
        "_id" : "PROMO03",
        "promo" : "Meat Promo",
        "period" : 3.0,
        "dSales" : [ 
            101, 
            205
        ]
    }
]);

db.payments.insertMany([
    /* 1 */
    {
        "_id" : "BL2021005",
        "gross" : 105.65,
        "discounts" : 10.0,
        "net" : 95.65,
        "datetime" : ISODate("2021-01-01T16:00:00.000Z")
    },

    /* 2 */
    {
        "_id" : "BL2021006",
        "gross" : 45.25,
        "discounts" : 0.0,
        "net" : 45.25,
        "datetime" : ISODate("2021-01-01T16:15:55.000Z")
    },

    /* 3 */
    {
        "_id" : "BL2021007",
        "gross" : 153.33,
        "discounts" : 20.33,
        "net" : 133.0,
        "datetime" : ISODate("2021-01-01T16:31:08.000Z")
    },

    /* 4 */
    {
        "_id" : "BL2021008",
        "gross" : 21.0,
        "discounts" : 0.0,
        "net" : 21.0,
        "datetime" : ISODate("2021-01-01T20:25:52.000Z")
    },

    /* 5 */
    {
        "_id" : "BL2021009",
        "gross" : 89.72,
        "discounts" : 0.72,
        "net" : 89.0,
        "datetime" : ISODate("2021-01-01T08:45:12.000Z")
    },

    /* 6 */
    {
        "_id" : "BL2021010",
        "gross" : 33.5,
        "discounts" : 20.5,
        "net" : 13.0,
        "datetime" : ISODate("2021-01-01T11:02:35.000Z")
    }
]);
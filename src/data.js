const data = {
    nameRestaurant: "Burguer Queen",
    Titles: [
        "Desayuno", "Comida"
    ],
    Subtitles: [
        "Hamburguesas", "Complementos", "Bebidas", "Extras"
    ],
    Desayuno: [
        { alimento: "Café americano", precio: 5 },
        { alimento: "Café con leche", precio: 7 },
        { alimento: "Sandwich de jamón y queso", precio: 10 },
        { alimento: "Jugo natural", precio: 7 }
    ],
    Comida: {
        Hamburguesas: [
            { proteina: "Pollo", precioSencilla: 10, precioDoble: 15 },
            { proteina: "Res", precioSencilla: 10, precioDoble: 15 },
            { proteina: "Vegetariana", precioSencilla: 10, precioDoble: 15 }
        ],
        Complementos: [
            { alimento: "Papas", precio: 5 },
            { alimento: "Onion Rings", precio: 5 }
        ],
        Bebidas: [
            { alimento: "Agua", precio: 5 },
            { alimento: "Gaseosa", precio: 7 }
        ],
        Extras: [
            { alimento: "Huevo", precio: 2 },
            { alimento: "Queso", precio: 2 }
        ]
    }
}
console.log("desayuno", data.Desayuno);
console.log(data.Titles[0]);
//console.log(data.Complementos. alimentos[0]);

export default data;

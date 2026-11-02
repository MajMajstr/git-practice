const properties = [
    {id:1, city: "Ljubljana", price: 220000},
    {id:2, city: "Trebnje", price: 145000},
    {id:3, city: "Maribor", price: 180000}
];

console.log(properties)


function filterByPrice(properties, maxPrice){
    return properties.filter(property => property.price <= maxPrice);
}

console.log(filterByPrice(properties, 180000))


function filterByCity(properties, city){
    return properties.filter(property => property.city === city)
}

console.log(filterByCity(properties, "Ljubljana"))

function filterById(properties, id){
    return properties.filter(property => property.id === id)
}


console.log(filterById(properties, 1))


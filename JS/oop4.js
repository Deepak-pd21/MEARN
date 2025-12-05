const baleno = {
    name: "Baleno",
    manufacturer: "Maruthi",
    model: "Hatch-back",
    price: "12 lakhs"
}
const glanza = {
    name: "Glanza",
    manufacturer: "Toyota",
    price: "14 lakhs"
}

glanza.__proto__ = baleno
console.log(glanza.model);

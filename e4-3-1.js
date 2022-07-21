function getSelfProperty(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key} - ${obj[key]}`);
        }
    }
}
  
const proto = {
    city: "Moscow"
};

const person = Object.create(proto);
person.ownCity = "Novosibirsk";

getSelfProperty(person)
function isEqual(str, obj) {
    return str in obj;
}
  
const person = {
    city: 'Moscow'
}

console.log(isEqual('city1', person));
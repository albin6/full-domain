const person = {
    name : 'Albin',
    age : 21
}

const handler = {
    get : (target, property) => {
        if (property in target) {
            return target[property]
        } else {
            return "property not found"
        }
    }
}

const proxyObj = new Proxy(person, handler)

console.log(proxyObj.nam)
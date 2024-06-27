/**Gabriela Céspedes */
//Predecir la desestructuración

//Problema 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars // se guarda "Tesla" en la variable de nombre randomCar
const [ ,otherRandomCar ] = cars // se guarda "Mercedes" en la variable de nombre otherRandomCar
//Predict the output
console.log(randomCar) // se imprime "Tesla"
console.log(otherRandomCar) //se imprime "Mercedes"


//Problema 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee; // se guarda "Elon" en la varible de nombre otherName
//Predict the output
console.log(name); //dara un error y terminara el programa ya que la varible name no esta definida, ReferenceError: name is not defined
console.log(otherName); // se imprimiria "Elon"


//Problema 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person; //se inicializa la variable sin ningun valor en ella
//Predict the output
console.log(password); //se imprimiria "12345"
console.log(hashedPassword); // undefined


//Problema 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // se guarda el valor en la posicion [1] = 2 en la variable first
const [,,,second] = numbers; //se guarda el valor en lla posicion [3] = 5 en la variable second
const [,,,,,,,,third] = numbers; // se guarda el valor en la posicion [8] = 2 en la varible 
//Predict the output
console.log(first == second); // false
console.log(first == third); // true


//Problema 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; // se guarda "value" en la variable key
const { secondKey } = lastTest; // se guarda [1, 5, 1, 8, 3, 3] en la variable seconkey
const [ ,willThisWork] = secondKey; // se guarda "5" en la variabel willThisWork
//Predict the output
console.log(key); // se imprime "value"
console.log(secondKey); // se imprime [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // se imprime "1"
console.log(willThisWork); // se imprime "5"

//map accepts a call back and applies that func to each element of an array,then return a new array
const dates=["2024-1-10","2025-2-20","2026-3-30"];
const formatted=dates.map(formatdates)
console.log(formatted)

function formatdates(element){
    parts=element.split("-")
    return `${parts[2]}/${parts[1]}/${parts[0]}`
}
//filter creates a new array by filtering out elements

const Nums=[1,2,3,4,5];
function isEven(element){
    return element%2===0;

}
const evenNums=Nums.filter(isEven);
console.log(evenNums);

//reduce() reduce the elements to single value
const price=[5,30,10,25,15,20]
const total=price.reduce(sum);
console.log(total)
function sum(accumulator,element)
{
    return accumulator+element
}
//arrow function a concise way to write function expressions
// simple funcs that you use only once 
function hello(){
    console.log("hello")
}
hello();
const hello1=(name,age)=>{ console.log(`Hello ${name}`)
                           console.log(`${name} You are ${age} years old`)};

hello1("Rama",19);
setTimeout( () => (console.log("Hello"),3000));
// arrow function for map
const x=[1,2,3,4]
const sq=x.map((element)=>Math.pow(element,2));
console.log(sq)
const cubes=x.map((element) => Math.pow(element,3));
console.log(cubes)

//arrow func for filter method
const even=x.filter((element)=> element%2===0)
console.log(even)
const odd=x.filter((element)=>element%2!==0)
console.log(odd)

//arrow method for reduce
const totl=x.reduce((acc,element)=>acc+element);
console.log(totl)

//object A collection of related properties 
//or real word objects ex:people,products,places
//object= key:value

const person1={
    firstName:"Rama Saisri",
    lastName:"Kondepudi",
    age:19,
    sayHello:function(){console.log(`Hi! Im ${person1.firstName}`)},
    sayBye:function(){console.log(`Bye`)},
    eat:function(){console.log("I am easting Biriyani")}

}
console.log(person1.firstName);
console.log(person1.age);
person1.sayHello()
person1.eat()

//this reference to the object  Immediate context
const person={
    name:"Rama",
    favfood:"Pizza",
    eating:function(){console.log(`I am eating ${this.favfood}` )}

}
console.log(person.name)
person.eating()

//constuctor
 //special method used to define propr and methods of obj
function Car(make,model,year,color){
    this.make=make,
    this.model=model,
    this.year=year,
    this.color=color
    this.drive=function(){console.log(`You are driving ${this.make} `)}
}
const car1=new Car("Ford","Mustang",2024,"red");
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();
const car2=new Car("Swift","Honda",2020,"Black");
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);


//class Es6 feature that provides a more stuctured and clean
//way to work with objets
class Products{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    displayProduct(){
        console.log(`Product:${this.name}`);
        console.log(`Price:${this.price}.rs`);


    }
    calculatetotal(salestax){
        return this.price+(this.price*salestax);
    }
}
const salestax=0.05
const prod1=new Products("CoolDrink",199)
prod1.displayProduct();
const bill=prod1.calculatetotal(salestax);
console.log(`Total Price including Tax:${bill}rs`)

//static is a keyword that belong to class itself rather 
//than the objs created
class User{
    static usercount=0;
    constructor(username){

        this.username=username;
        User.usercount++;
    }
    sayHello(){
        console.log(`My Username is ${this.username}`)

    }
    static getusercount(){
        console.log(`There are ${this.usercount} users online`)
    }
}
const user1=new User("Rama")
console.log(user1.username)
console.log(User.usercount)
const user2=new User("Saisri")
console.log(user2.username);
console.log(User.usercount)
user1.sayHello()
user2.sayHello()
User.getusercount()

//Inheritance Allows a new class to inherit properties
// and methods from existing class(Parent ->child)
class Animal{
    alive=true;
    eat(){
        console.log(`This ${this.name} is eating`);

    }
    sleep(){
        console.log(`This $(this.name) is sleeping`)
    }
}
class Rabbit extends Animal{
    name="Rabbit";
    run(){
        console.log(`This ${this.name} is running`)
    }
}
class Dog extends Animal{
    name="Dog";
    bark(){
    console.log(`This ${this.name} is barking`);
    }
}
const rabbit=new Rabbit();
const dog=new Dog();
rabbit.eat();
dog.eat();
dog.bark();
rabbit.run();

//super is a keyword is used in clsses to constructor or
//access the properties and methods of parent(super class)
//this= this Obj
// super=the parent
class Father{
    constructor(){

    }

}
class Child1 extends Father{
    constructor(name,age){
        super();
        this.name=name;
        this.age=age
    }
}
const child1=new Child1("Alice",19)

//ES6 Modules are external files that contains reusable code that can 
//be imported into other javascript files can contain either
//variables,func,clsses 


/* synchronous: executes line by line consecutively in a seq manner
  code that waits for an operation to complete
  async=Allows multiple operations to be performed concurrently without waiting
  donest block the flow of execution  
  */
 setTimeout(()=>console.log("Task1"),3000)//it is a async func
 console.log("Task3");
 console.log("Task 2");

 //Error Is a obj which represnts a problem that occurs
 // try{} encloses code which may caught error
 //catch() catch and handle any thrown errors from try
 //finally always executes the block of code
 try{
    console.log(l);

 }
 catch(error){
    console.log("Error Catched")

 }
 console.log("It is executing")
 
 /*DOM DOCUMENT OBJECT MODEL
 obj{} that represents the page you see in the web brwser
 and provides you with an API to interact with it
 
 web browser creates the dom when it loads  an HTML ,doc
 and structures all the elements in a tree like representation
 It can change the content of thepage ,dturcture and style of web page*/

 //Element selectors:The methods which are used to target and manipulate
 //html elements and they allow to select one/more ele from dom
 






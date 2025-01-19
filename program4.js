class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    introduce() {
        console.log("Hi, my name is",this.name,"and i am",this.age,"years old.")
    }
}
const p1=new Person('Aaditya', 21)
p1.introduce()
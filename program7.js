class car{
    constructor(brand, model){
        this.brand=brand;
        this.model=model;
    }
    getDetails(){
        console.log('This car is a',this.brand,this.model)
    }
}
const c=new car('Ford','Mustang')
c.getDetails();
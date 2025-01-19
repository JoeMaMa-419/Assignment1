class Book{
    constructor(title,author,year){
        this.title=title
        this.author=author
        this.year=year
    }
    display(){
        console.log(`The book ${this.title} is written by ${this.author} and was published in the year ${this.year}.`)
    }
}
const b=new Book('A Song of Ice and Fire','George R.R. Martin','1996')
b.display()
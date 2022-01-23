//1. Class - Movie
class Movie {
  constructor(name, studio, rating="PG") {
    this.title = name;
    this.studio = studio;
    this.rating = rating;   
    }
 getPG(movies)
    {
     movies = movies.filter((movies)=> movies.rating == "PG").map((movie)=>(movie.title));
     return console.log("Movies in the input array with a rating of PG: "+movies.join(", "))
    }
    
  }

let UserOne = new Movie("CZ12", "Jackie");
let UserTwo = new Movie("Casino Royale”", "Eon Productions","PG13" );
let UserThree = new Movie("Lift", "Disney+ Hotstar","PG" );
let UserFour = new Movie("Malignant", " Boom! Studios" );
let result =  [UserOne, UserTwo, UserThree, UserFour]
UserThree.getPG(result);


//2. Class-circle
class Circle{
    radius : number = 1.0;
    color: String = "Red"
    
    Circle (radius:number){
    return `Radius: ${this.radius}`
    }
      
    Circle (radius:number, color:String){
     return `Radius: ${this.radius} Color: ${this.color}`
    }  
       
    getRadius():number{
        return this.radius
    }

    setRadius(radius:number):void{
        this.radius = radius
    }
    
    getColor():String{
        return this.color
    }

    setColor(color:String):void{
        this.color = color
    }

   toString():String{
        return `Radius: ${this.radius} Color: ${this.color}`
    }

    getArea():number{
        return ((Math.PI)*this.radius*this.radius)
    }

    getCircumference():number{
        return (2*(Math.PI)*this.radius)
    }
}

//3. Write a “person” class to hold all the details.
class Person {
  constructor(name, DOB, PhNo) {
    this.name = name;
    this.DOB = DOB;
    this.PhNo = PhNo;  
    this.details = function(){
      return (console.log("Name: "+this.name+", " +"DOB: "+this.DOB+", "+"Phone Number: "+this.PhNo))
    }
    }
   
}

let Rajesh = new Person("Rajesh", "30/07/1996", 9876543210)
Rajesh.details()

//4. write a class to calculate uber price.
class uberPrice{
constructor(name, distance){
  this.name = name;
  this.distance = distance;
  this.rate = function(){
    return console.log("Passenger Name: "+name+" Price: " +distance*4)
  }
}  
}
let Kumar = new uberPrice("Kumar", 10)
Kumar.rate()




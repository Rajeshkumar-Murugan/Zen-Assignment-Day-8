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




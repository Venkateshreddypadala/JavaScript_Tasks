                       // ===============================Constructor(Examples)==================================
                    //  -------------- Example-1(constructor) ------------------
// // declaration
// class Constructor{
//     constructorName(){
//         console.log("welcome to Constructors")
//     }
// }  
// // invoking or calling
// let a=new Constructor()          //creating the object in new variable
// a.constructorName()  
//                         // (or)  [by using parameterised constructor] 
// // declaration
// class Constructor{
//     constructorName(fname){
//         console.log(fname)
//     }
// }  
// // invoking or calling
// let a1=new Constructor()  //creating the object in  a new variable
// a1.constructorName("welcome to Constructors")

// // // output--welcome to Constructors


// // ============2.Create a JavaScript class named CabBooking with a constructor of five parameters ==============

// class CabBooking{
//     constructorCab(customerName,Pickup,destination,PaymentMethod,Amount){  //using parameters------parameterised constructor
//          console.log("CustomerName = ",customerName);
//         console.log("Pickup = ",Pickup);
//         console.log("destination = ",destination);
//         console.log("PaymentMethod = ",PaymentMethod); 
//         console.log("Amount = ",Amount);  
//     }
// }
//  let result=new CabBooking()  //when the object is created in invoke automatically
//  result.constructorCab("Anantha","guntur bus stand","sai baba Road","online",60)

// //  output--
// // CustomerName =  Anantha
// // Pickup =  guntur bus stand
// // destination =  sai baba Road
// // PaymentMethod =  online
// // Amount =  60


// // ===============3..Create a JavaScript class named Online Course with a constructor of six parameters=============

// class Online_Course{
//     constructorOnline(studentName,courseName,InstituteName,duration,fee,id){
//         console.log("Student Name = ",studentName);
//         console.log("Course Name = ",courseName);
//         console.log("Institute Name = ",InstituteName);
//         console.log("Duration = ",duration);
//         console.log("Fee = ",fee);
//         console.log("Id = ",id);
//     }
// // }
// // let course = new Online_Course();
// // course.constructorOnline("Rahul","Python Full Stack","Innomatics Research Lab","6-Months",40000,80130506243);

// // // // output----
// // // // Student Name =  Rahul
// // // // Course Name =  Python Full Stack
// // // // Institute Name =  Innomatics Research Lab
// // // // Duration =  6-Months
// // // // Fee =  40000
// // // // Id =  80130506243


// // ============4..Create a JavaScript class named Electricity Bill with a constructor of five parameters==============

// class Electricity_Bill{
//     constructorElectricity(customerName,customerNumber,units,billAmount,dueDate){
//         console.log("Customer Name = ",customerName);
//         console.log("Course Number = ",customerNumber);
//         console.log("Units = ",units);
//         console.log("Bill Amount = ",billAmount);
//         console.log("Due Date = ",dueDate);
//     }
// }
// let course = new Electricity_Bill();
// course.constructorElectricity("harika",1001,250,1000,"15-10-2026");

// // // output---
// // // Customer Name =  harika
// // // Course Number =  1001
// // // Units =  250
// // // Bill Amount =  1000
// // // Due Date =  15-10-2026



// // ============5..Create a JavaScript class named Event Registration with a constructor of five parameters===============

// class Event_Registration{
//     constructorElectricity(participantName,eventName,location,eventDate,ticketPrice){
//         console.log("participant Name = ",participantName);
//         console.log("eventName = ",eventName);
//         console.log("location = ",location);
//         console.log("eventDate = ",eventDate);
//         console.log("ticketPrice = ",ticketPrice);
//     }
// }
// let course = new Event_Registration();
// course.constructorElectricity("ramu","Tech Fest 2026","Hyderabad","20-10-2026",500);

// // // output---
// // // participant Name =  ramu
// // // eventName =  Tech Fest 2026
// // // location =  Hyderabad
// // // eventDate =  20-10-2026
// // // ticketPrice =  500




// ==================================6...Create a JavaScript class named Bike Rental with a constructor of five parameters=============

  class bike_Rental{
    constructorBike(customerName,bikeModel,Pickupdate,returnDate,rentalPrice){
        console.log("Customer Name = ",customerName);
        console.log("Bike Model = ",bikeModel);
        console.log("Pickup Date = ",Pickupdate);
        console.log("Return Date = ",returnDate);
        console.log("Rental Price = ",rentalPrice);
    }
}
let course = new bike_Rental();
course.constructorBike("Venkatesh","Hyderabad","20-10-2026","25-10-2026",5000);

// output---
// Customer Name =  Venkatesh
// Bike Model =  Hyderabad
// Pickup Date =  20-10-2026
// Return Date =  25-10-2026
// Rental Price =  5000










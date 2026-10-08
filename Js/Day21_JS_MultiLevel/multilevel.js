// // =================================Multilevel Inheritance================================

// class one{                  //creating the data
//     method1(){
//         console.log("I am Method-1 from class one");
        
//     }
    
// }
// class Two extends one{             //using Extends keyword we are existing data from class one
//     method2(){
//         console.log("I am Method-2 from class two");
        
//     }
// }
// class Three extends Two{                    ////using Extends keyword we are existing data from class two
//     method3(){
//         console.log("I am Method-3 from class three");
        
//     }
// }
// let multi=new Three()                    // creating object in the new variable
// multi.method3()
// multi.method2()
// multi.method1()

// // output------
// // I am Method-3 from class three
// // I am Method-2 from class two
// // I am Method-1 from class one

// // //====================2.. Create a multilevel inheritance program with class as Hospital,Doctor,Surgeon======================

// class Hospital{
//     constructor(hospitalName){
//         this.hospitalName=hospitalName;

//     }
//     displayDetailsHos(){
//          console.log("Hospital Name =",this.hospitalName);   
//     }
// }
// let hos = new Hospital()

// class Doctor extends Hospital{
//     constructor(doctorName,hospitalName){
//         super (hospitalName)
//         this.doctorName=doctorName;

//     }
//     displayDetailsDoc(){
//          console.log("Doctor Name =",this.doctorName);   
//     }
// }
// let hos1 = new Doctor()

// class Surgeon extends Doctor{
//     constructor(specialization,doctorName,hospitalName){
//         super (doctorName,hospitalName)
//         this.specialization=specialization;

//     }
//     displayDetailsSug(){
//         super.displayDetailsDoc();
//         super.displayDetailsHos();
//          console.log("specialization =",this.specialization);   
//     }
// }
// let hos2 = new Surgeon("Apollo Hospital", "Dr. Ravi", "Cardiology")
// hos2.displayDetailsSug()

// // // output---
// // // Doctor Name = Dr. Ravi
// // // Hospital Name = Cardiology
// // // specialization = Apollo Hospital


// // //====================3.. Create a multilevel inheritance program with class as Hotel,Room,LuxuryRoom======================
// class Hotel{
//     constructor(hotelName){
//         this.hotelName=hotelName;

//     }
//     displayDetailsHot(){
//          console.log("Hotel Name =",this.hotelName);   
//     }
// }
// let hos = new Hotel()

// class Room extends Hotel{
//     constructor(roomNumber,hotelName){
//         super (hotelName)
//         this.roomNumber=roomNumber
//     }
    
//     displayDetailsRoom(){
//          console.log("Room Number=",this.roomNumber);   
//     }
// }
// let hos1 = new Room()

// class LuxuryRoom extends Room{
//     constructor(roomService,roomNumber,hotelName){
//         super (roomNumber,hotelName)
//         this.roomService=roomService;

//     }
//     displayDetailsLux(){
//         super.displayDetailsRoom();
//         super.displayDetailsHot();
//          console.log("Luxury Room=",this.roomService);   
//     }
// }
// let hos2 = new LuxuryRoom("24 Hours", 205, "Taj Hotel")
// hos2.displayDetailsLux()

// // // output--
// // // Room Number= 205
// // // Hotel Name = Taj Hotel
// // // Luxury Room= 24 Hours

// // //====================4.. Create a multilevel inheritance program with class as App,product,ElectronicProduct======================
// class App{
//     constructor(AppName){
//         this.AppName=AppName;
//     }
//     displayDetailsApp(){
//          console.log("App Name =",this.AppName);   
//     }
// }
// let hos = new App()

// class Product extends App{
//     constructor(productName,AppName){
//         super (AppName)
//         this.productName=productName
//     }
    
//     displayDetailspro(){
//          console.log("product Name=",this.productName);   
//     }
// }
// let hos1 = new Product()

// class ElectronicProduct extends Product{
//     constructor(AppName,productName,warranty,prise){
//         super (AppName,productName)
//         this.warranty=warranty;
//         this.prise=prise
//     }
//     displayDetailsEle(){
//         super.displayDetailspro();
//         super.displayDetailsApp();
//          console.log("warranty=",this.warranty);  
//          console.log("prise=",this.prise);  
//     }
// }
// let Res = new ElectronicProduct("Amazon","watch","2 years",2000)
// Res.displayDetailsEle()
// // // output---
// // // product Name= Amazon
// // // App Name = watch
// // // warranty= 2 years
// // // prise= 2000

// //====================5.. Create a multilevel inheritance program with class as Cafe,Coffee,SpecialCoffee======================
// class Cafe{
//     constructor(cafeName){
//         this.cafeName=cafeName;
//     }
//     displayDetailsCafe(){
//          console.log("cafe Name =",this.cafeName);   
//     }
// }
// let hos = new Cafe()

// class Coffee extends Cafe{
//     constructor(CoffeeType,cafeName){
//         super (cafeName)
//         this.CoffeeType=CoffeeType
//     }

//     displayDetailsCoff(){
//          console.log("Coffee Type=",this.CoffeeType);   
//     }
// }
// let hos1 = new Coffee()

// class SpecialCoffee extends Coffee{
//     constructor(cafeName,CoffeeType,Size,prise){
//         super (cafeName,CoffeeType)
//         this.Size=Size;
//         this.prise=prise
//     }
//     displayDetailsSpe(){
//         super.displayDetailsCafe();
//         super.displayDetailsCoff();
//          console.log("Size=",this.Size);  
//          console.log("prise=",this.prise);  
//     }
// }
// let Res = new SpecialCoffee("Cappuccino","Brew House", "Large",500)
// Res.displayDetailsSpe()
// // output---
// // cafe Name = Brew House
// // Coffee Type= Cappuccino
// // Size= Large
// // prise= 500
// // =======================================Hierachical Inheritance=======================================
// // ---------------------------------Example=1--------------------------------
// class parent{
//     m1(){
//         console.log(" I am m1 from parent")
//     }
// }
// class Son extends parent{
//     m2(){
//         console.log(" I am m2 from Son")
//     }
// }
// class Daughter extends parent{
//     m3(){
//         console.log(" I am m3 from Daughter")
//     }
// }
// let R1=new Daughter()
// R1.m3()
// R1.m1()
// console.log("==============")
// let R2= new Son()
// R2.m2()
// R2.m1()
// console.log("============");
// let parent1 = new parent()
// parent1.m1()
// // // output----
// // //  I am m3 from Daughter
// // //  I am m1 from parent
// // // ==============
// // //  I am m2 from Son
// // //  I am m1 from parent
// // // ============
// // //  I am m1 from parent


// // // ===========================================Example-2===================
// class Hospital {
//     constructor(hospitalName, location) {
//         this.hospitalName = hospitalName
//         this.location = location
//     }
//     displayHospitalDetails() {
//         console.log("Hospital Name =", this.hospitalName)
//         console.log("Location =", this.location)
//     }
// }
// class EmergencyDepartment extends Hospital {
//     constructor(emergencyType, doctorName, hospitalName, location) {
//         super(hospitalName, location)
//         this.emergencyType = emergencyType
//         this.doctorName = doctorName
//     }
//     displayEmergencyDetails() {
//         console.log("Emergency Type =", this.emergencyType)
//         console.log("Doctor Name =", this.doctorName)
//     }
// }
// class DentalDepartment extends Hospital {
//     constructor(treatmentType, dentistName, hospitalName, location) {
//         super(hospitalName, location)
//         this.treatmentType = treatmentType
//         this.dentistName = dentistName
//     }
//     displayDentalDetails() {
//         console.log("Treatment Type =", this.treatmentType)
//         console.log("Dentist Name =", this.dentistName)
//     }
// }
// let R1 = new EmergencyDepartment( "Accident Treatment", "Dr. Ravi", "Apollo Hospital",  "Hyderabad")
// R1.displayHospitalDetails()
// R1.displayEmergencyDetails()
// console.log("=================")
// let R2 = new DentalDepartment("Root Canal","Dr. Priya", "Apollo Hospital", "Hyderabad")
// R2.displayHospitalDetails()
// R2.displayDentalDetails()
// // // outptu---
// // // Hospital Name = Apollo Hospital
// // // Location = Hyderabad
// // // Emergency Type = Accident Treatment
// // // Doctor Name = Dr. Ravi
// // // =================
// // // Hospital Name = Apollo Hospital
// // // Location = Hyderabad
// // // Treatment Type = Root Canal
// // // Dentist Name = Dr. Priya

// // // =============================Example-3===============================

// class Delivery {
//     constructor(trackingId, receiverName) {
//         this.trackingId = trackingId
//         this.receiverName = receiverName
//     }

//     displayDetails() {
//         console.log("Tracking ID =", this.trackingId)
//         console.log("Receiver Name =", this.receiverName)
//     }
// }

// class ExpressDelivery extends Delivery {
//     constructor(deliveryTime, trackingId, receiverName) {
//         super(trackingId, receiverName)
//         this.deliveryTime = deliveryTime
//     }

//     displayExpressDetails() {
//         console.log("Delivery Time =", this.deliveryTime)
//     }
// }

// class StandardDelivery extends Delivery {
//     constructor(deliveryDays, trackingId, receiverName) {
//         super(trackingId, receiverName)
//         this.deliveryDays = deliveryDays
//     }

//     displayStandardDetails() {
//         console.log("Delivery Days =", this.deliveryDays)
//     }
// }

// let R1 = new ExpressDelivery("24 Hours", "TR101", "Anantha")
// R1.displayDetails()
// R1.displayExpressDetails()
// console.log("==================");
// let R2 = new StandardDelivery("5 Days", "TR102", "Rahul")
// R2.displayDetails()
// R2.displayStandardDetails()

// // // // output---
// // // // Tracking ID = TR101
// // // // Receiver Name = Anantha
// // // // Delivery Time = 24 Hours
// // // // ==================
// // // // Tracking ID = TR102
// // // // Receiver Name = Rahul
// // // // Delivery Days = 5 Days

// // ================================Example-4======================
// class SmartDevice {
//     constructor(deviceName, brand) {
//         this.deviceName = deviceName
//         this.brand = brand
//     }

//     displayDetails() {
//         console.log("Device Name =", this.deviceName)
//         console.log("Brand =", this.brand)
//     }
// }

// class SmartLight extends SmartDevice {
//     constructor(brightness, deviceName, brand) {
//         super(deviceName, brand)
//         this.brightness = brightness
//     }

//     displayLightDetails() {
//         console.log("Brightness =", this.brightness)
//     }
// }

// class SmartFan extends SmartDevice {
//     constructor(speedLevel, deviceName, brand) {
//         super(deviceName, brand)
//         this.speedLevel = speedLevel
//     }

//     displayFanDetails() {
//         console.log("Speed Level =", this.speedLevel)
//     }
// }

// let R1 = new SmartLight(80, "Smart LED Light", "Philips")
// R1.displayDetails()
// R1.displayLightDetails()
// console.log("===========================");

// let R2 = new SmartFan(5, "Smart Ceiling Fan", "Atomberg")
// R2.displayDetails()
// R2.displayFanDetails()
// // // // // output----------
// // // // Device Name = Smart LED Light
// // // // Brand = Philips
// // // // Brightness = 80
// // // // ===========================
// // // // Device Name = Smart Ceiling Fan
// // // // Brand = Atomberg
// // // // Speed Level = 5


// // ===============================================Example-5===================================
// class FilmProduction {
//     constructor(filmName, directorName) {
//         this.filmName = filmName
//         this.directorName = directorName
//     }
//     displayDetails() {
//         console.log("Film Name =", this.filmName)
//         console.log("Director Name =", this.directorName)
//     }
// }
// class AnimationFilm extends FilmProduction {
//     constructor(animationSoftware, filmName, directorName) {
//         super(filmName, directorName)
//         this.animationSoftware = animationSoftware
//     }
//     displayAnimationDetails() {
//         console.log("Animation Software =", this.animationSoftware)
//     }
// }
// class ActionFilm extends FilmProduction {
//     constructor(stuntCoordinator, filmName, directorName) {
//         super(filmName, directorName)
//         this.stuntCoordinator = stuntCoordinator
//     }
//     displayActionDetails() {
//         console.log("Stunt Coordinator =", this.stuntCoordinator)
//     }
// }
// let R1 = new AnimationFilm("Blender", "Toy Story", "John Lasseter")
// R1.displayDetails()
// R1.displayAnimationDetails()
// console.log("=====================");
// let R2 = new ActionFilm("Jack Gill", "Fast X", "Louis Leterrier")
// R2.displayDetails()
// R2.displayActionDetails()
// // // output------
// // // Film Name = Toy Story
// // // Director Name = John Lasseter
// // // Animation Software = Blender
// // // =====================
// // // Film Name = Fast X
// // // Director Name = Louis Leterrier
// // // Stunt Coordinator = Jack Gill
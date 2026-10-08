// ----------------Student Management(Example--1)------------------

// class student{
//     static collegeName="KHIT";
//     static totalStudents=0;
    
//     set_data(name, rollNo, branch, marks, grade){
//         this.studentName=name;
//         this.rollNo=rollNo;
//         this.branch=branch;
//         this.marks=marks;
//         this.grade=grade;

//         student.totalStudents++;
//     }
//     displayDetails(){
//         console.log("collage :",student.collegeName);
//         console.log("total Students :",student.totalStudents);
//         console.log("Student Name :",this.studentName);
//         console.log("Student RollNo :",this.rollNo);
//          console.log("Branch:",this.branch);
//           console.log("Marks :",this.marks);
//         console.log("Grade :",this.grade);
//          console.log("======================");
        
//     }
// }
//     let n1=new student()
//     n1.set_data("Anantha",21,"AIML",456,"B Grade");
//     let n2=new student()
//     n2.set_data("ramu",33,"AIML",555,"A Grade");
//     let n3=new student()
//     n3.set_data("Harika",29,"AIML",589,"A Grade");
//     let n4=new student()
//     n4.set_data("Rahul",11,"AIML",400,"c Grade");
//     let n5=new student()
//     n5.set_data("Sunny",41,"AIML",501,"A Grade");

//     n1.displayDetails()
//     n2.displayDetails()
//     n3.displayDetails()
//     n4.displayDetails()
//     n5.displayDetails()


    // ================Restaurant Order(Example-2)==================
//     class RestaurantOrder{
//     static restaurantName="New Chillies";
//     static totalOrders=0;
    
//     set_data(customerName, orderId, foodItem, price, quantity){
//         this.customerName=customerName;
//         this.Id=orderId;
//         this.foodItem=foodItem;
//         this.price=price;
//         this.quantity=quantity;

//         RestaurantOrder.totalOrders++
//     }
//     displayDetails(){
//         console.log(" restaurantName:",RestaurantOrder.restaurantName);
//         console.log(" totalOrders:",RestaurantOrder.totalOrders);
//         console.log("customerName:",this.customerName);
//         console.log("customerId:",this.Id);
//         console.log(" foodItem:",this.foodItem);
//          console.log("price:",this.price);
//           console.log("quantity :",this.quantity);
//          console.log("======================");
        
//     }
// }
//     let n1=new RestaurantOrder()
//     n1.set_data("Ravi",666666,"Chicken Dum Bhiriyani",320,"singel");
//     let n2=new RestaurantOrder()
//     n2.set_data("Kavya",999999,"Egg Bhiriyani",250,"full");
//     let n3=new RestaurantOrder()
//     n3.set_data("ajay",111111,"PannerBhiriyani",350,"singel");
//     let n4=new RestaurantOrder()
//     n4.set_data("charn",333333,"Chicken fry Bhiriyani",520,"full");
//     let n5= new RestaurantOrder()
//     n5.set_data("venky",444444,"veg Bhiriyani",200,"singel");

//     n1.displayDetails()
//     n2.displayDetails()
//     n3.displayDetails()
//     n4.displayDetails()
//     n5.displayDetails()


// =================Bus Reservation(Example(3)================)

    class BusReservation{
    static busCompanyName="VRL Travels";
    static totalBookings=0;
    
    set_data(passengerName, ticketId, destination, seatNo, fare){
        this.passengerName=passengerName;
        this.ticketId=ticketId;
        this.destination=destination;
        this. seatNo=seatNo;
        this. fare= fare;

        BusReservation.totalBookings++
    }
    displayDetails(){
        console.log("busCompanyName:", BusReservation.busCompanyName);
        console.log(" totalBookings:", BusReservation.totalBookings);
        console.log("passengerName:",this.passengerName);
        console.log("ticketId:",this.ticketId);
        console.log(" destination:",this.destination);
         console.log("seatNo:",this.seatNo);
          console.log(" fare :",this.fare);
         console.log("======================");
        
    }
}
    let n1=new BusReservation()
    n1.set_data("Rama",222222,"guntur",11,200);
    let n2=new BusReservation()
    n2.set_data("gowthami",555555,"ongle",12,600);
    let n3=new BusReservation()
    n3.set_data("sai",111111,"tenail",13,400);
    let n4=new BusReservation()
    n4.set_data("anjali",333333,"chenni",15,1000);
    let n5= new BusReservation()
    n5.set_data("venky",444444,"goa",23,5000);

    n1.displayDetails()
    n2.displayDetails()
    n3.displayDetails()
    n4.displayDetails()
    n5.displayDetails()
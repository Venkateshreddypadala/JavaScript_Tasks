//                           ==================Example-1(using extends keyword in single heritance)===============


class exam{
    startExam(){
        console.log("exam is starting")
    }
}
class OnlineExam extends exam{
    startOnlineExam() {
        console.log("Online exam is starting")
    }
}
let start=new OnlineExam()
start.startOnlineExam()
start.startExam()


//                         ================Example-2(using  constructor,super of,super keywords)=================

class movie{
    constructor(movieName,director){
        this.movieName=movieName
        this.director=director
    }
    displayDetails(){
        console.log("movie Name =",this.movieName);
        console.log("director Name =",this.director);
    }
}
class ActionMovie extends movie{
    constructor(movieName,heroName,herionName,director){
        super(movieName,director)                           //using super of keyword
        this.heroName=heroName;
        this.herionName=herionName;
    }
    displayactDetails(){
        super.displayDetails()                 //using super keyword
        console.log("Hero Name  =",this.heroName);
        console.log("Herion Name =",this.herionName);
    }
}
let obj=new ActionMovie("Pushpa","Allu Arujun","Rashmika","Boyapati Srinu")
obj.displayactDetails()

//                               ========================Example--3=========================



class Teacher{
    constructor(Name,gender,experience){
        this.Name=Name;
        this.gender=gender;
        this.experience=experience
    }
    displayDetails(){
        console.log("My Name = ",this.Name);
        console.log("Gender = ",this.gender);
        console.log("experience = ",this.experience);
    }
}
class SubTeacher extends Teacher{
    constructor(Subject,Name,gender,experience){
        super(Name,gender,experience)
        this.Subject=Subject
    }
    displaysubDetails(){
        super.displayDetails()
        console.log("Subject = ",this.Subject);

    }
}
let object=new SubTeacher("harika","Female","maths","3 years")
object.displaysubDetails();


//                                         =================Example-4==================


class patient{
    constructor(Name,age){
        this.Name=Name;
        this.age=age;
    }
    displayDetails(){
        console.log("MyName = ",this.Name);
        console.log("My age = ",this.age)
    }
}
class Inpatient extends patient{
    constructor(Name,age,Room_No,date,slote){
        super(Name,age);
        this.Room_No=Room_No;
        this.date=date;
        this.slote=slote;
    }
    displayPatientDetails(){
        super.displayDetails()
        console.log("Room Number = ",this.Room_No);
        console.log("date = ",this.date);
        console.log("slote = ",this.slote);
    }
}
let p=new Inpatient("Anjali",22,324,1/10/2026,"afternoon");
p.displayPatientDetails()

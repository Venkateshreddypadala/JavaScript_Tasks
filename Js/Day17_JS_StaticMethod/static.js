// ======static method without input without return========

class displayName{
    static showroomName(){
        console.log("welcome to bike showroom")
    }

}
displayName.showroomName()

// ======static method with input without return==============

class MyName{
    static compyName(name){
        console.log("company Name is ",name)
    }

}
MyName.compyName("KTM")



// ===========static method without input with return==============

class Mycolor{
    static colorName(){
        return "black";
    }

}
 let bikecolor= Mycolor.colorName()
 console.log("bike color = ",bikecolor)

// ======static method with input with return=============


class prise{
    static bikeprise(prise){
        return prise;
    }

}
 let bikeprise= prise.bikeprise("80000")
 console.log("bike prise = ",bikeprise)


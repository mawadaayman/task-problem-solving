
// 1- اعمل فانكشن تحسب المتوسط الحسابى لمجموعه من االرقام )ال يقلوا عن ١٠ ارقام(






//  2- اعمل فانكشن تاخد ارتفاع وقاعده المثلث وترجع مساحه المثلث
function triangle() {
    var x=10
    var y=20
    return (x * y) *.5 ;

}
console.log(triangle());


// 3- اعمل فانكشن تاخد العمر و ترجعه بااليام

var birthDate = new Date("2005-12-7");


var currentDate = new Date();


var ageInMilliseconds = currentDate - birthDate;
var ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));

console.log("العمر بالأيام: " + ageInDays);




// 4- اعمل فانكشن تاخد رقمين وترجع مجموعهم
function numpers(num1 , num2) {
    var numpers=(num1 + num2)

        return numpers;
}
console.log(numpers(20 , 50));


// 5- اعمل فانكشن تأخذ اكتر من عشر اسامي داخل array ثم تعرض اول عنصر فقط
    var names=["Mwada","rahma","ayman","yasser","Doaa","sohaila","mariam","heba","lopna","asmaa","amany","amal" ];

    console.log(names[0]);


    
// // 6- اعمل فانكشن تعرض اسمك كامل في ال HTML
document.getElementById("name").innerHTML="Mwada Ayman Fathy Abd Elkalk"


// // 7- اعمل فانكشن تحول الساعات الي ثواني
function houre( second) {
    return second * 60
    
}
console.log( houre( 2));


// 8- عمل فانكشن بتاخد اربع ارقام وترجع مجموعهم لو اكتر من ٣٥٠ أظهر true لو أقل من
// ٣٥٠ أظهر false والعرض يكون علي ال document html

function lessthan350(a , b , c , d) {
    var total = 100+100+100+100;

    if(total>350){
        return  true;
    }else if (total <350){
        return  false;
    }
}
document.getElementById("test").innerHTML=lessthan350(100 , 100 , 100 , 100)


// 9- مل فانكشن بتاخد رقم لو بيساوي صفر رجع true عكس كدا بيرجع false
function zero(a){
   

if (a===0) {
    return true;
}else {
    return false;
}

}
console.log(zero(0));



// 10 -عمل فانكشن بتاخد رقمين وتجيب باقي القسمة بتاعهم وليس القسمة ) مختلفة (









// 11-اكتب فانكشن تاخذ رقمين وتطبع الرقم األكبر وإذا كانت متساويين تطبع أنهم متساويين
function numper(a , b) {
    
    if (a , b) {
        return 100;
   
}else if (a = b)
    alert("equal")
}

console.log(numper(50 , 100));





// 12- اكتب فانكشن تتأكد إذا كان المتغير المعطى رقم او ا
var input = "123"; 

if ( input === "number") {
  console.log(" input is a numper");
} else {
  console.log("inpute is not numper");
}


// 13- اكتب فانكشن تجيب التاريخ الحالى

var currentDate = new Date();

var year = currentDate.getFullYear(); // السنة
var month = currentDate.getMonth() + 1; // الشهر (يبدأ من 0 ، لذا يتم إضافة 1)
var day = currentDate.getDate(); // اليوم

console.log("التاريخ الحالي: " + year + "-" + month + "-" + day);






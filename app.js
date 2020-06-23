//chapter# 21-25

//task 1:
// var firstName=prompt("Entre your first name..");
// var lastName=prompt("Entre your last anme..");
// var merge=firstName+" "+lastName;
// alert("welcome "+merge+" in our website");

//task 2:
// var phoneName=prompt("Entre your fovourite mobile phone with model..");;
// var leng=phoneName.length;
// document.write("<h2>My favourite Phone is: "+phoneName+"<br>Length of string: "+leng+"</h3>");

//task 3:
// var citizen="pakistani";
// var citizenIndex =citizen.IndexOf("n");
// document.write("<h3>String: "+citizen+"<br>Index of 'n': "+citizenIndex+"</h3>");

//task 4:
// var greet="Hello World!";
// var greetIndex =greet.lastIndexOf("l");
// document.write("<h3>String: "+greet+"<br>Last Index of 'l': "+greetIndex+"</h3>");

//task 5:
// var citizen="pakistani";
// var citizenIndex =citizen.slice(3,4);
// document.write("<h3>String: "+citizen+"<br>Character at index 3: "+citizenIndex+"</h3>");

//task 6: 
// var firstName=prompt("Entre your first name..");
// var lastName=prompt("Entre your last anme..");
// var merge= firstName.concat(lastName);
// document.write("welcome "+merge+" in our website");

//task 7:
// var city="Hyderabad";
// var cityIndex=city.splice("Hyder");
// var replacingTxt="Islam";
// var remainingTxt=city.slice(cityIndex+5);
// document.write("City: "+city+"<br> After Replacement: "+replacingTxt+remainingTxt); 

//task 8:
// var text="Ali and Sami are best friends. They play cricket and football together.";
// for(var i=0;i<text.length;i++){
//     if(text.slice(i , i+3)==="and"){
//         text = text.slice(0, i) + "&" + text.slice(i + 3);
//     }
// }
// document.write(text);


//task 9:
// var str="472";
// var typeStr=typeof(str);
// var num=parseInt(str);
// var typeNum=typeof(num);
// document.write("Value: "+str+"<br>Type:"+typeStr+"<br>Value: "+num+"<br>Type: "+typeNum); 

//task 10:
// var input=prompt("Entre your favourite fruit..");
// var cap_input=input.toUpperCase();
// document.write("User input: "+input+"<br>Upper case: "+cap_input);

//task 11:
// var input=prompt("Entre your favourite fruit..");
// var firstChar=input.slice(0,1);
// var otherTxt=input.slice(1);
// var otherTxtCap=otherTxt.toLowerCase()
// var firstCharCap=firstChar.toUpperCase();
// document.write("User input: "+input+"<br>Upper case: "+firstCharCap+otherTxtCap);

//Task 12:
// var num=35.36;
// var str=num.toString();
// var type1=typeof(str);
// document.write("Number: "+str+"<br>");
// var first=str.slice(0,2);
// var dot=str.slice(3);
// document.write("result: "+first+dot);
 
//task 13:
// var userName=prompt("Entre your name..");
// for (var i=0;i<=userName.length;i++){
//     if(userName[i]==="," || userName[i]==="." || userName[i]==="@" || userName[i]==="!"){
//     alert("Please entre a valid name");
//     break;
//     }
// }
// document.write("<h1>"+userName+"</h1>");

// tas 14:

// var array=["cake","apple pie","cookie","chips","patties"]
// var fav=prompt("Entre your favourite item");
// var a=fav.toLowerCase();
// for(var i=0;i<=array.length;i++){
//     if(a===array[i]){
        
//         alert(a+" is available at index "+i+" in our bakery");
        
        
//     }     
// }

// alert(fav+"Not available");

//Task 16
// var university="University of Karachi";
// var arr=university.split();
// for(var i=0;i<university.length;i++){
//     document.write(university[i]+"<br>");

// }

//task 17:
// var country="Pakistan";
// var lasChar=country.slice(-1);
// document.write("User Input: "+country+"<br>Last Character of input: "+ lasChar);

// //task 18: not solved
// var text="the quick brown fox jumps over the lazy dog";
// document.write(text);



 



//chapter# 26-30

//task 1:
// var number=3.45214;
// var r=Math.round(number);
// var f=Math.floor(number);
//  var c=Math.ceil(number);
// document.write("<div style="+"border: 2px; background-color: antiquewhite;"+">Number:"+number+"<br>round off value:"+r+"<br>floor value:"+f+"<br>ceil value:"+c+" </div>");

//task 2:
// var number=-2.673;
// var r=Math.round(number);
// var f=Math.floor(number);
//  var c=Math.ceil(number);
// document.write("<div style="+"border: 2px; background-color: antiquewhite;"+">Number:"+number+"<br>round off value:"+r+"<br>floor value:"+f+"<br>ceil value:"+c+" </div>");

//task 3:
// var num=-4;
// var value=Math.abs(num);
// document.write("The absolute value of "+num+" is "+value);
 

//task 4:
// var ran_num=Math.random()*6;
// var round=Math.round(ran_num);
// var ran_num=Math.random()*6;
// var round2=Math.round(ran_num);
// document.write("random dice value: "+round);
// document.write("<br>random dice value: "+round2);

//task 5:
// var ran_num=Math.random()*2;
// var ceil=Math.ceil(ran_num);
// if (ceil===2){
//     document.write(ceil+"<br> <h3>random coin value: Head</h3>");
// }
// else{
//     document.write(ceil+"<br> <h3>random coin value: Tail</h3>");
// }

//task 6:
// var ran_num=Math.random()*100;
// var round=Math.round(ran_num);
// document.write("<div class='second-head'> " + "<h3>" + "random numbers between 1 to 100: "+round+ "</h3>" + "</div>");

//task 7:
// var weight=prompt("Entre your weight in kilogram");
// var con_weight=parseFloat(weight);
// document.write("The weight of user is "+con_veight+" kilogram");

//task 8:
// var input=prompt("Entre a number between 1 to 10");
// var num=parseInt(input);
// var guess=6;
// if(num==guess){
//     alert("Congraulate the user");
// }
// else{
//     alert("Try Again");
// }

//chapter 31-35
//task 8
// var later=new Date("Dec,31,2020");
// document.write("Later date: ".bold()+later); 
 
//task 9:
// var currentDate=new Date("april,26,2020");
// var CDateMiili=currentDate.getTime();
// var today=new Date();
// var todayMilli=today.getTime();
// var diff=todayMilli-CDateMiili;
// var day=Math.floor(diff/(1000*60*60*24));
// document.write(day+" days have passed since 1st ramzan,2020");

//task 10;
// var today=new Date();
// var todayMiili=today.getTime();
// var firstDay=new Date("Jan,01,2020");
// var firstDayMilli=firstDay.getTime();
// var diff=todayMiili-firstDayMilli;
// var sec=Math.floor( diff/(1000*60));
// document.write("On referance date "+today+", "+sec+" second had passed since begening of 2020");

//task 11;
// var today=new Date();
// var todayMiili=today.getTime();
// var hundYears=new Date("June,23,2020,11:24:25");
// var hundYearMilli=hundYears.getTime();
// var diff=todayMiili-hundYearMilli;
// var sec=Math.floor( diff/(1000*60*60*24));
// document.write("current date"+today+"<br> "+Math.abs(sec)+" hour back it was"+hundYears);


//task 12:
// var today=new Date();
// var todayMiili=today.getTime();
// var hundYears=new Date("June,23,1920,00:20");
// var hundYearMilli=hundYears.getTime();
// var diff=todayMiili-hundYearMilli;
// var sec=Math.floor( diff/(1000*60*60*24*30*12));
// document.write("current date"+today+"<br> "+sec+" year back it was"+hundYears);

//task 13:
// var today=new Date();
// var todayMiili=today.getTime();
// var birthDay=new Date("nov,21,1999");
// var birthDayMilli=birthDay.getTime();
// var diff=todayMiili-birthDayMilli;
// var sec=Math.floor( diff/(1000*60*60*24*30*12));
// document.write("your age is "+sec+"</br>Your birth year is 1999");

//task 14:
// var cus_name=prompt("entre your name..");
// var cur_month=prompt("entre your bill's current month.");
// var num_unit=prompt("entre your bill's number of unit..");
// var number=parseInt(num_unit);
// var charge_unit=16;
// var net=number*charge_unit;
// var sur_charge=350;
// var gross=net+sur_charge;
// document.write("Custumer Name: "+cus_name+"<br>Month: "+cur_month+"<br>Number of unit: "+num_unit+"<br>Charges per unit: "+charge_unit+"<br><br>Net amount Payable(within due date: )"+net+"<br>Late payment sur charge: "+sur_charge+"<br>Gross amount payable(After due date): "+gross);


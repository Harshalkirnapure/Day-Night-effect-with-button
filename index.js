/* for two utton code of Day night indivisual where you need to create 2 buttons*/

// let syntax= document.getElementById("heading");
// function changeHeading(){
//     // document.getElementById("heading").textContent="welcome to nagpur";
//     syntax.textContent="welcome to nagpur";
//     document.getElementById("heading").style.color="purple";

// }
// function changeHeading1(){
//     // document.getElementById("heading").textContent="welcome to nagpur";
//     syntax.textContent="welcome to delhi";
//     document.getElementById("heading").style.color="purple";

// }

//night code 

// function night(){
//     document.getElementById("DayImg").src= "night.jpg";
//     document.getElementById("texinfo").textContent="Night";
//     // document.getElementById("texinfo").style.backgroundColor="blue";

// }
// function Day(){
//     document.getElementById("DayImg").src= "day.jpg"
//     document.getElementById("texinfo").textContent="Day";
// }



// single functional button of day night

 let isclick=true;



    function dayNight(){

        if(isclick===true){

        document.getElementById("DayImg").src= "night.jpg";
        document.getElementById("texinfo").textContent="Night";
        // document.getElementById("texinfo").style.backgroundColor="blue";
        document.getElementById("button1").style.backgroundColor="blue"
        isclick=false;
    }
   
    
   else{
    document.getElementById("DayImg").src= "day.jpg"
    document.getElementById("texinfo").textContent="Day";
     document.getElementById("button1").style.backgroundColor="green"
     
    isclick=true;
     }
   }

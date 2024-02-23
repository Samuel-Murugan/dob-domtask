var date =document.createElement("input");
date.setAttribute("type","date")
date.id="dob"

var button =document.createElement("button")
button.setAttribute("type","button");
button.className ="btn btn-primary"
button.innerHTML="Display Data"
button.addEventListener("click",date_data);

document.body.append(date,button)


function date_data(){
    
    var input =document.getElementById("dob").value;
    var input_date =new Date(input);
    var currentdate =new Date();
    console.log(currentdate);

    var millisecdiff =parseInt(currentdate.getTime()-input_date.getTime())
    console.log(millisecdiff);

    var secondsdiff = Math.floor(millisecdiff/1000);
    console.log(secondsdiff);

    var minutesdiff = Math.floor(secondsdiff/60);
    console.log(minutesdiff);

     var hoursdiff = Math.floor(minutesdiff/60);
     console.log(hoursdiff);

     var daydiff = Math.floor(hoursdiff/24);
     console.log(daydiff);

     var yeardiff =currentdate.getFullYear() - input_date.getFullYear();
     console.log(yeardiff);

     var month_diff =(yeardiff*12)+(currentdate.getMonth()-input_date.getMonth())
     console.log(month_diff);


}

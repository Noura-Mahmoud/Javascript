var timerID;
function startTimer() {
    
    function fun(){
        
    }

    timerID=setInterval(function execFun(x,y){//anonymous function
    console.log(x);//
    alert('timer');
    
}, 2000,10,5);

}

//execFun();//error
function stopTimer(){
    clearInterval(timerID);
    
}

var timerID2;
function fun(){
    //
    //
    alert("fun");
    //
    timerID2=setTimeout(fun,2000);
    console.log("Raneem");
   
    
}

setTimeout(function(){
    clearTimeout(timerID2)
    //clearInterval(t)
},100000)
//fun |---|--|--|
  //   fun |--|--|--|

















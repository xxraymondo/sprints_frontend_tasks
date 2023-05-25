function doMath(){
    let x =document.getElementById("num1").value
    let y =document.getElementById("num2").value
    let mark=document.getElementById("mark").value
    let result=document.getElementById("result")

    if(mark=="time"){
      result=parseInt(x)*parseInt(y)
    }else if(mark=="plus"){
      result=parseInt(x)+parseInt(y)
    }else if(mark=="minus"){
      result=parseInt(x)-parseInt(y)
    }else if(mark=="divide"){
      result=parseInt(x)/parseInt(y)
    }else{
      result="error"
    }
    document.getElementById("result").innerHTML=result 

  }
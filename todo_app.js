let todo=[]

let value ;
while(true){
    let req=prompt("enter your request");
    if(req =="quit"){
        console.log("quitting app");
        break ;
    }
   else if(req =="add"){
        console.log("-------------")
        value=parseInt(prompt("enter your number"))
       todo.push(value) 
       
       console.log(todo)
       console.log("----------------")
    }
   else{
    console.log("you have entered a wrong request")
    
   }
}
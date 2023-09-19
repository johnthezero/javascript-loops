let command;
let quit=false;
let toDelete;
let todoList=[];
const template=[
    "Open VS code and then code !",
    "Take a break and then code!",
    "Eat while coding",
    "Code while eating",
    "Have a walk",
    "Code again !"];
let item="";
let index=1;
//check if the command is valid and exists
while(!quit){
    //is valid
    command=prompt("Enter a command"+"\n 1 new : Add a todo"+"\n 2 list :  See all the todo"+"\n 3 delete : remove a specific todo"+"\n 4 quit : exit the program"+"\n 5 or...Generate a list of things because it's too boring to do it manually");
        switch (command) {
            case "new" : case "1" : item=prompt("What do you have to do ??");
                                    todoList.push(item);  
                                    console.log(item+" added!");
                                    break;
            case "list" : case "2": index=1;
                                    console.log("---------------\n***ToDO LIST !!!***\n---------------");
                                    for(let itm of todoList ) {
                                        console.log((index++)+".  "+itm);  
                                    }
                                    break;
            case "delete":case "3": //MISSING ! VALIDATE the index to delete
                                    toDelete=prompt("What to delete ?");
                                    while(toDelete<1 || toDelete>todoList.length){
                                        alert("You are trying to delete something that doesn't exist, the index should be between"+1+" and "+todoList.length);
                                    toDelete=prompt("What to delete ?");
                                    }
                                    console.log(todoList.splice(toDelete-1,1)+" Had been deleted!");
                                    break; 
            case "generate" :       todoList=todoList.concat(template);
                                    break;
            case "quit"     :       quit=true;
                                    break;
            default         :       alert("select one of the following options : \n"+"Enter a command"+"\n 1 new : Add a todo"+"\n 2 list :  See all the todo"+"\n 3 delete : remove a specific todo"+"\n 4 quit : exit the program \n 5 or...Generate a list of things because it's too boring to do it manually");
        }
}

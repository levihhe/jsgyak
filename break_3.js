import input from "./input.js"

async function feladat11(){
        
    const string = await input("szöveg amiben van szám:");

    for(let i = 0; i < string.length; i++){
       if(parseInt(string[i])){
           break;
       } else {
            console.log(string[i]);
       }
    }
}

feladat11();
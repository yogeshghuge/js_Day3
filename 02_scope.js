//var c = 300
let a =300
if(true){
    let a =10
    const b=20
    c =30
    //console.log("INNER:",a);
}

//console.log(a); //error
//console.log(b); //error
//console.log(c);  // output will be display=30 bcz of this reason will are not using c.
//console.log(a);

function one(){
    const username ="Yogesh"
    

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    console.log(website);

    two()
}
//one()

if(true){
    const username = "Yogesh"
    if(username === "Yogesh"){
        const website = "  Youtube"
        //console.log(username + website); // output will display
    }
    //console.log(website);  //error
}
//console.log(username); //error

/// +++++++++++++++++++++ interesting +++++++++++++++++

console.log(addone(5)) // output=6

function addone(num){
        return num + 1
}



const addTwo = function(num){
    return num +2;
}

addTwo(5)

const user = {
    username: "Yogesh",
    price:999,

    WelcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}


// user.WelcomeMessage()
// user.username= "sam"
// user.WelcomeMessage()

// console.log(this);

// function chai(){
//     let username="Yogesh"
//     console.log(this.username);
// }

// chai()


// const chai = function() {
//     let username = "Yogesh "
//     console.log(this.username);
// }


const chai = () => {
    let username = "Yogesh ";
    console.log(this.username);
}

//chai();

//  const addTwo = (num1, num2) => {
//     return num1 + num2
//  } 
//  console.log(addTwo(3,4,))

// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(3,4,))

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3,4,))

const addTwo = (num1, num2) => ({username : "Yogesh"})
console.log(addTwo(3,4,))

// const myArray =[1,2,3,4,5]
// myArray.forEach()





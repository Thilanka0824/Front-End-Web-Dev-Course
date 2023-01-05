// const age = 50

//     if(age >= 65){
//     console.log("Pension")
// } else if(age < 18){
//     console.log("Allowance")
// } else {
//     console.log("NaN")
// }

// console.log()

// const day = "Friday";

// switch (day) {
//   case "Monday":
//     console.log("school");
//     break;
//   case "Tuesday":
//     console.log("Get ready");
//     break;
//   case "Wednesday":
//     console.log("dont drive");
//     break;
//   case "Thursday":
//     console.log("bacon");
//     break;
//   case "Friday":
//     console.log("ham");
//     break;
//   case "Saturday":
//     console.log("eggs");
//     break;
//   case "Sunday":
//     console.log("yay");
//     break;
//   default:
//     console.log("This the default yo");
//     break;
// }

// for(let i = 0; i <= 5; i++){
//     console.log("hi");
// }

//  var i = 3;
//  var j = 5;

//  if (i == 3 && j < 5) {
//    console.log("Hello");
//  } else {
//    console.log("Goodbye");
//  }

// const storeManager = {
//   movement: 3,
//   socialSkills: 40,
// };

// storeManager.nextAchievement = "open a new store"

// console.log(storeManager);


// Task 1: Build a function-based console log message generator
function consoleStyler(color , background , fontSize , txt) {
    var message = "%c" + txt
    var style = `color: ${color};`
    style += `background: ${background};`
    style = style + `font-size: ${fontSize};`
    console.log(message,style)
}



// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    var fontStyle = "color: tomato; font-size: 50px"
    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle)
    } else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle)
    } else {
        console.log(message, style)
    }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!')
celebrateStyler('birthday')


// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color,background,fontSize, txt, reason) {
    consoleStyler(color,background,fontSize, txt)  
    celebrateStyler(reason) 
}
// Call styleAndCelebrate

console.log (styleAndCelebrate('#ef7c8e', '#fae8e0', '30px', 'You made it!', 'champions'));


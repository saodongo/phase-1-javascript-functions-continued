function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(task = "go to the office") {
    return `This Monday, I will ${task}.`;
}

function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer")); 
"You are !!!a dedicated programmer!!!"

console.log(saturdayFun()); 
"This Saturday, I want to roller-skate!"

console.log(saturdayFun("bathe the dog")); 
"This Saturday, I want to bathe the dog!"

console.log(mondayWork()); 
"This Monday, I will go to the office."

console.log(mondayWork("work from home")); 
"This Monday, I will work from home."

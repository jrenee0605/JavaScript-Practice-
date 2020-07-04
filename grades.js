//students score, total possible score
//15/20 gets a message "you got a C (75)%"
// 90-100= A, B 80-89, C 70-79, D 60-69, F 0-59 


let grade = function (score, totalScore) {
    let percent = (score / totalScore) * 100 
    
    if (percent >= 90) {
        return `You got an A (${percent})!`
    } else if (percent >= 80) {
        return `You got a B(${percent})!` 
    } else if (percent >= 70) {
        return `You got a C(${percent})!`
    } else if (percent >=60) {
        return `You got a D(${percent})!`
    } else {
        return `You failed the exam :(`
    }
}

let result = grade(15, 20)
console.log(result)
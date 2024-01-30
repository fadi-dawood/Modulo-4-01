// Esercizio n 1:
const numbers = [50, 90];

function numberControl50() {
    if (numbers[0] + numbers[1] === 50 || numbers[0] === 50 || numbers[1] === 50) {
        let result = true;
        console.log(result)
        return true;
    }
}
numberControl50()



// Esercizio n 2:
const originalString = "Hello World!";
let nLetterToDelete = 1;

function deleteLetter(nLetterToDelete) {
    let newString = originalString.slice(0, nLetterToDelete) + originalString.slice(nLetterToDelete + 1);
    console.log(newString);
}

deleteLetter(nLetterToDelete);



// Esercizio n 3:
function numberControlIntervallo() {
    if (((numbers[0] > 40 & numbers[0] < 60) || (numbers[0] > 70 & numbers[0] < 100) &&
        (numbers[1] > 40 & numbers[1] < 60) || (numbers[1] > 70 & numbers[1] < 100))) {
        let result = true;
        console.log(result)
        return true;
    }
    let result = false;
    console.log(result)
}
numberControlIntervallo()


// Esercizio n 4:
nameOfTheCity = "Newdfg"
function nameCity() {
    if (nameOfTheCity.slice(0, 3) === "Los" || nameOfTheCity.slice(0, 3) === "New") {
        let result = nameOfTheCity;
        console.log(result)
        return result;
    }
    let result = false;
    console.log(result)
    return result;
}
nameCity()


// Esercizio n 5:
function sumNumbers() {
    let sum = 0;
    for (let i = 0; +i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    console.log(sum)
    return sum;
}
sumNumbers()


// Esercizio n 6:
function numbersControl() {
    for (let i = 0; +i < numbers.length; i++) {
        if (numbers[i] === 1 || numbers[i] === 3) {
            console.log(false)
            return false;
        }
    }
    console.log(true)
    return true;
}
numbersControl()


// Esercizio n 7:
const angolo = 45;

function angoloControl() {
    let result;
    if (angolo < 90 && angolo > 0) {
        result = "acuto";
        console.log(result)
    } else if (angolo < 180 && angolo > 90) {
        result = "ottuso";
        console.log(result)
    } else if (angolo === 180) {
        result = "piatto";
        console.log(result)
    } else if (angolo === 90) {
        result = "retto";
        console.log(result)
    }
}
angoloControl()


// Esercizio n 8:
const frase = "Fabrica Italiana Automobili Torino";
function acronimo() {
    result = [frase[0]];
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === " ") {
            result.push(frase[i + 1])
        }
    }
    result = result.join("")
    console.log(result);
};
acronimo()
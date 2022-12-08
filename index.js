/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-val")
const convertBtn = document.getElementById("btn")
const lengthEl = document.getElementById("result-length")
const volumeEl = document.getElementById("result-volume")
const massEl = document.getElementById("result-mass")


function renderResult() {
    const valueInput = inputEl.value
    let volume = ""
    let mass = ""
    let length = ""

    //if else statements to check grammar erros (singular and plural)
    if (valueInput == 1) {
        length = `${valueInput} meter = ${3.281} feet | ${valueInput} foot = ${(valueInput * 0.3048).toFixed(3)}`

        volume = `${valueInput} liter = ${0.264} gallons | ${valueInput} gallon = ${(valueInput * 3.789).toFixed(3)}`

        mass = `${valueInput} kilo = ${2.204} pounds | ${valueInput} pound = ${(valueInput * 0.454).toFixed(3)} kilos`
    } else {
        length = `${valueInput} meters = ${(valueInput * 3.281).toFixed(3)} feet | ${valueInput} feet = ${(valueInput * 0.3048).toFixed(3)} meters`
        
        volume = `${valueInput} liters = ${(valueInput * 0.264).toFixed(3)} gallons | ${valueInput} gallons = ${(valueInput * 3.789).toFixed(3)} liters`
        mass = `${valueInput} kilos = ${(valueInput * 2.204).toFixed(3)} pounds | ${valueInput} pounds = ${(valueInput * 0.454).toFixed(3)} kilos`
    }
    lengthEl.textContent = length
    volumeEl.textContent = volume
    massEl.textContent = mass
    
}


convertBtn.addEventListener('click', function() {
    renderResult()
})
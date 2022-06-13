const input = document.getElementById("input")
const output = document.getElementById("output")
const button = document.getElementById("button")

let data = [];

function inputToData(){
    data = input.value
    data = data.split("\n")
    return data;
}

function noDots(){
    for (let i = 0; i < data.length; i++) {
       data[i] = data[i].split(".").join("")
    }
    return data
}

function noSpaces(){
    for (let i = 0; i < data.length; i++) {
       data[i] = data[i].split(" ").join("")
    }
    return data
}

function dataToOutput(){
    output.value = data.join("\n")
}

button.onclick = function(){
    inputToData()
    noDots(data)
    noSpaces(data)
    dataToOutput(data)
}

var boulderLowAutoSuccessCount = 0;
function boulderLowAutoSuccessCountFun() {
    boulderLowAutoSuccessCount = parseInt(boulderLowAutoSuccessCount) + parseInt(1);
    var count = document.querySelector("#boulderLowAutoSuccessCount")
    count.textContent = " " + boulderLowAutoSuccessCount
}

var boulderLowAutoFailCount = 0;
function boulderLowAutoFailCountFun() {
    boulderLowAutoFailCount = parseInt(boulderLowAutoFailCount) + parseInt(1);
    var count = document.querySelector("#boulderLowAutoFailCount")
    count.textContent = " " + boulderLowAutoFailCount
}

var boulderLowTeleopSuccessCount = 0;
function boulderLowTeleopSuccessCountFun() {
    boulderLowTeleopSuccessCount = parseInt(boulderLowTeleopSuccessCount) + parseInt(1);
    var count = document.querySelector("#boulderLowTeleopSuccessCount")
    count.textContent = " " + boulderLowTeleopSuccessCount
}

var boulderLowTeleopFailCount = 0;
function boulderLowTeleopFailCountFun() {
    boulderLowTeleopFailCount = parseInt(boulderLowTeleopFailCount) + parseInt(1);
    var count = document.querySelector("#boulderLowTeleopFailCount")
    count.textContent = " " + boulderLowTeleopFailCount
}

var boulderHighAutoSuccessCount = 0;
function boulderHighAutoSuccessCountFun() {
    boulderHighAutoSuccessCount = parseInt(boulderHighAutoSuccessCount) + parseInt(1);
    var count = document.querySelector("#boulderHighAutoSuccessCount")
    count.textContent = " " + boulderHighAutoSuccessCount
}

var boulderHighAutoFailCount = 0;
function boulderHighAutoFailCountFun() {
    boulderHighAutoFailCount = parseInt(boulderHighAutoFailCount) + parseInt(1);
    var count = document.querySelector("#boulderHighAutoFailCount")
    count.textContent = " " + boulderHighAutoFailCount
}

var boulderHighTeleopSuccessCount = 0;
function boulderHighTeleopSuccessCountFun() {
    boulderHighTeleopSuccessCount = parseInt(boulderHighTeleopSuccessCount) + parseInt(1);
    var count = document.querySelector("#boulderHighTeleopSuccessCount")
    count.textContent = " " + boulderHighTeleopSuccessCount
}

var boulderHighTeleopFailCount = 0;
function boulderHighTeleopFailCountFun() {
    boulderHighTeleopFailCount = parseInt(boulderHighTeleopFailCount) + parseInt(1);
    var count = document.querySelector("#boulderHighTeleopFailCount")
    count.textContent = " " + boulderHighTeleopFailCount
}



function renderQRCode() {

    console.log('Client side javascript file is loaded!')
    const teamNumber = $("#userInput").val();
    const notes = $("#notes").val();
    const defenseNotes = $("#defense").val();
    const outerWorksYes = document.getElementById('outerWorksYes').checked
    const outerWorksNo = document.getElementById('outerWorksNo').checked
    const climbYes = document.getElementById('climbYes').checked
    const climbNo = document.getElementById('climbYes').checked
    const challengedYes = document.getElementById('towerYes').checked
    const challengedNo = document.getElementById('towerYes').checked

    const boulderLowAutoProbability = boulderLowAutoSuccessCount / (boulderLowAutoFailCount + boulderLowAutoSuccessCount)
    const boulderLowTeleopProbability = boulderLowTeleopSuccessCount / (boulderLowTeleopFailCount + boulderLowTeleopSuccessCount)
    const boulderHighAutoProbability = boulderHighAutoSuccessCount / (boulderHighAutoFailCount + boulderHighAutoSuccessCount)
    const boulderHighTeleopProbability = boulderHighTeleopSuccessCount / (boulderHighTeleopFailCount + boulderHighTeleopSuccessCount)

    const dataJSON = {
        teamNumber, 
        outerWorks: outerWorksYes,
        boulderLowAutoSuccessCount, 
        boulderLowAutoFailCount,
        boulderLowAutoProbability,
        boulderLowTeleopSuccessCount, 
        boulderLowTeleopFailCount, 
        boulderLowTeleopProbability,
        boulderHighAutoSuccessCount, 
        boulderHighAutoFailCount,
        boulderHighAutoProbability,
        boulderHighTeleopSuccessCount, 
        boulderHighTeleopFailCount, 
        boulderHighTeleopProbability,
        challengedTower: challengedYes,
        climb: climbYes,
        defenseNotes,
        notes,
    }

    const dataString = JSON.stringify(dataJSON)
    var canvas = document.getElementById('canvas')

    QRCode.toCanvas(canvas, dataString, function (error) {
        if (error) console.error(error)
        console.log('success!');
    })
}

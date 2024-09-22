let quarkCount = 0;  
let leptonCount = 0;  
let electronCount = 0;  
let bosonCount = 0;  
let baryonCount = 0;  
let hyperonCount = 0;  
let dustCount = 1;  
let electronProductionRate = 1;  
let electronUpgradeCost = 10;  
let electronLevel = 1;  
let dustLevel = 1;  
let dustUpgradeCost = 10000;  

document.getElementById('collectButton').onclick = function() {  
    quarkCount += Math.floor(Math.random() * 10) + 1;  
    updateDisplay();  
};  

document.getElementById('synthesizeLeptonButton').onclick = function() {  
    if (quarkCount >= 10 && electronCount >= 1) {  
        quarkCount -= 10;  
        electronCount -= 1;  
        leptonCount += 1;  
        updateDisplay();  
    } else {  
        alert("需要更多夸克或电子合成轻子！");  
    }  
};  

// Other button functions...  

function updateDisplay() {  
    document.getElementById('quarkCount').innerText = quarkCount;  
    document.getElementById('leptonCount').innerText = leptonCount;  
    document.getElementById('electronCount').innerText = electronCount;  
    document.getElementById('bosonCount').innerText = bosonCount;  
    document.getElementById('baryonCount').innerText = baryonCount;  
    document.getElementById('hyperonCount').innerText = hyperonCount;  
    document.getElementById('dustCount').innerText = dustCount;  
    document.getElementById('dustLevel').innerText = dustLevel;  
    document.getElementById('electronUpgradeCost').innerText = electronUpgradeCost;  
    document.getElementById('dustUpgradeCost').innerText = dustUpgradeCost;  
}  
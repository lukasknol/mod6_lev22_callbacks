// 1
const huiswerkMaken = function (vak, callback) {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
    callback();
}

// 2
const huiswerkMaken = function (vak, callback) {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
    callback();
}

const klaarMetHuiswerk = function () {
    console.log('Kijk Paps/Mams, ik ben klaar met mijn huiswerk!');
}

// 3
const huiswerkMaken = function (vak, callback) {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
    callback();
}

const klaarMetHuiswerk = function () {
    console.log('Kijk Paps/Mams, ik ben klaar met mijn huiswerk!');
}
huiswerkMaken('wiskunde', klaarMetHuiswerk);

// 4
const huiswerkMaken = function (vak, callback) {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
    setTimeout(function () {
        callback();
    }, 3000);
}

const klaarMetHuiswerk = function () {
    console.log('Kijk Paps/Mams, ik ben klaar met mijn huiswerk!');
}
huiswerkMaken('wiskunde', klaarMetHuiswerk);

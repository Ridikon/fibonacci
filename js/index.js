var fiboNum = Number(prompt('Введіть число'));

function fibonacci(num) {
    var fiboRabbit1 = 1,
        fiboRabbit2 = 1;
    for (var i = 3; i <= num; i++) {
        var fiboRabbitSum = fiboRabbit1 + fiboRabbit2;
        fiboRabbit1 = fiboRabbit2;
        fiboRabbit2 = fiboRabbitSum;
    }
    return fiboRabbit2;
}

document.write('Число Фібоначчі пораховано методом циклу: ' + fibonacci(fiboNum));

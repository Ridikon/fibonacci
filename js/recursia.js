var fiboNum = Number(prompt('Введіть число'));

function fibonacci(num) {
    if (num < 2) {
        return num;
    }
    else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

document.write(fibonacci(fiboNum));

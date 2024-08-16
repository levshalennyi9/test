let random = parseInt(Math.random() * 10) + 1;

function guess() {
    const user = Number(document.getElementById('guess').value);
    const result = document.getElementById('result');

    if (user === random) {
        result.textContent = 'Вітаю! Ви вгадали число!';
        result.style.color = 'green';
         document.body.style.background = 'green'
    } else if (user > random) {
        result.textContent = 'Треба менше число. Спробуйте ще раз.';
        document.body.style.background = 'red'
        result.style.color = 'red';
    } else {
        result.textContent = 'Треба більше число. Спробуйте ще раз.';
         document.body.style.background = 'red'
        result.style.color = 'red';
    }
}

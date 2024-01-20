
const outPutScreen = document.getElementById('output-field');
let buttons = document.querySelectorAll('button');
let expression = '';

buttons.forEach(btn => {
    btn.addEventListener("click", (btn) => {
        // animation effects 
        btn.target.style.opacity = '0.5'
        setTimeout(() => {
            btn.target.style.opacity = '1';
        }, 100);


        // calculations 
        if (btn.target.innerHTML == '=') {
            outPutScreen.value = eval(expression);
            expression = '';
            return
        }

        if (btn.target.innerHTML == 'x') {
            expression = expression.substr(0, expression.length - 1);
            outPutScreen.value = expression;
            return
        }

        if (btn.target.innerHTML == 'ac') {
            expression = '';
            outPutScreen.value = expression;
            return
        }

        expression += btn.target.innerHTML;
        outPutScreen.value = expression;

    })
});


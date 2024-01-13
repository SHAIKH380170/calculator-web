let input = document.getElementById('screen');
let buttons = document.querySelectorAll('button');

let string = " ";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let val = e.target.textContent
        switch (val) {
            case "=":
                string = eval(string);
                input.value = string;
                break;


            case "AC":
                string = ""
                input.value = 0;
                break;

            case "⬅":
                string = string.slice(0, -1)
                input.value = string
                break;
            default:
                string += val
                input.value = string



        }
    })
})



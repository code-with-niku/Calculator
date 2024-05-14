let value = ""
        let buttons = document.querySelectorAll('.button');
        Array.from(buttons).forEach((button) => {
            button.addEventListener('click',(e) => {
                if (e.target.innerHTML == '=') {
                    value = eval(value);
                    document.querySelector('input').value = value;
                }
                else if (e.target.innerHTML == 'AC'){
                    value = " ";
                    document.querySelector('input').value = value;
                }
                else if (e.target.innerHTML == 'DEL') {
                    value = value.toString().slice(0, -1);
                    document.querySelector('input').value = value;
                }
                else {
                    console.log(e.target)
                    value = value + e.target.innerHTML;
                    document.querySelector('input').value = value;
                }
            })
        })

let screen = document.getElementById("screen")
let buttons = document.querySelectorAll("button")
let temp = 0
let Ans

console.log(1829)
for (btn of buttons) {
    btn.addEventListener("click", function (pm) {
        btnTxt = pm.target.innerText;
        // console.log(btnTxt)
        if (btnTxt == "C") {
            screen.value = ""
            temp = 0
            localStorage.clear()
        }
        else if (btnTxt == "AC" && temp != 0) {
            screen.value = ""
            for (let i = 1; i < temp; i++) {
                screen.value += localStorage.getItem(i);
            }
            localStorage.removeItem(temp)
            temp--;
        }
        else if (btnTxt == "=") {
            showResult();
        }

        else if (btnTxt == "!") {
            n = localStorage.getItem(temp)
            let x = 1
            for (let i = 1; i <= n; i++) {
                x = i * x;
            }
            screen.value = ""
            localStorage.setItem(temp, x)
            for (let i = 1; i <= temp; i++) {
                screen.value += localStorage.getItem(i);
            }
        }
        else if (btnTxt == "ℼ") {
            btnTxt = 3.14
            screen.value += btnTxt
            temp++;
            localStorage.setItem(temp, btnTxt)
        }
        else if (btnTxt == "Ans") {
            screen.value += Ans
            // screen.value += Ans
            temp++;
            localStorage.setItem(temp, btnTxt)
        }
        else {
            screen.value += btnTxt
            temp++;
            localStorage.setItem(temp, btnTxt)
        }


        //CALLING FUNCTION ON PRESSING ENTER KEY
        document.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                showResult();
            }
        });
        function showResult() {
            screen.value = eval(screen.value)
            Ans = screen.value

            temp = 0
            localStorage.clear()
            temp++;
            localStorage.setItem(temp, screen.value)
        }
    })
}
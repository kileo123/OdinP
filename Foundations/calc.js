const allbtn = document.querySelectorAll(".btn")
const topdisplay = document.querySelector(".topdisplay");
const bottomdisplay = document.querySelector(".bottomdisplay");

var total = 0

topdisplay.textContent = "0"
bottomdisplay.textContent = "0"

allbtn.forEach(btn =>
    btn.addEventListener("click", () => {
        if (topdisplay.textContent === "ERROR" && bottomdisplay.textContent === "ERROR"){
            topdisplay.textContent = "0"
            bottomdisplay.textContent = "0"
            total = 0            
        }
        if (btn.textContent === "⌫"){
            if (bottomdisplay.textContent != "0" && bottomdisplay.textContent.length > 1){
                bottomdisplay.textContent = bottomdisplay.textContent.slice(0, bottomdisplay.textContent.length-1)
            } else {
                bottomdisplay.textContent = "0"
            }
        } else if (btn.textContent === "C"){
            if (bottomdisplay.textContent !== "0"){
                bottomdisplay.textContent = "0"
            } else {
                topdisplay.textContent = "0"
            }
        } else if (!isNaN(btn.textContent)) {
            if (bottomdisplay.textContent == "0"){
                bottomdisplay.textContent = btn.textContent
            } else {
                if (bottomdisplay.textContent.length < 12) {
                    bottomdisplay.textContent += btn.textContent
                }
            }
        } else if (btn.textContent === ".") {
            if (bottomdisplay.textContent.length < 12 && !bottomdisplay.textContent.includes(".")) {
                bottomdisplay.textContent += btn.textContent
            }
        } else {
            if (btn.textContent === "%") {
                window.alert("To be implemented soon")
            } else if (bottomdisplay.textContent === "0" && topdisplay.textContent.substring(topdisplay.textContent.length - 1) === "X" && btn.textContent === "=") {
                topdisplay.textContent="0 ="
                total = 0
            } else if (bottomdisplay.textContent === "0" && topdisplay.textContent.substring(topdisplay.textContent.length - 1) === "÷" && btn.textContent === "=") {
                topdisplay.textContent="ERROR"
                bottomdisplay.textContent = "ERROR"
                total = 0
            } else if (bottomdisplay.textContent !== "0") {
                if (topdisplay.textContent.substring(topdisplay.textContent.length - 1) === "+" || topdisplay.textContent === "0" ) {
                    total = parseFloat(topdisplay.textContent) + parseFloat(bottomdisplay.textContent)
                } else if (topdisplay.textContent.substring(topdisplay.textContent.length - 1) === "-") {
                    total = parseFloat(topdisplay.textContent) - parseFloat(bottomdisplay.textContent)
                } else if (topdisplay.textContent.substring(topdisplay.textContent.length - 1) === "X") {
                    total = parseFloat(topdisplay.textContent) * parseFloat(bottomdisplay.textContent)
                } else if (topdisplay.textContent.substring(topdisplay.textContent.length - 1) === "÷") {
                    total = parseFloat(topdisplay.textContent) / parseFloat(bottomdisplay.textContent)
                } else if (topdisplay.textContent.substring(topdisplay.textContent.length - 1) === "=") {
                    total = 0 + parseFloat(bottomdisplay.textContent)
                }   
                if (!Number.isInteger(total)) {
                    total = total.toFixed(2)*100/100
                }
                if (total > 999999999999) {
                    topdisplay.textContent = "ERROR"
                    bottomdisplay.textContent = "ERROR"
                } else {
                    topdisplay.textContent = total + " " + btn.textContent
                    bottomdisplay.textContent = "0"
                }
            } else {
                topdisplay.textContent = parseFloat(topdisplay.textContent) + " " + btn.textContent
            }
        }
    })
)
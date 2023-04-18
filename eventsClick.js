
/* O que quero fazer:
X 1- clicar e aparecer o numero na tela de display 
X 2- pegar os ids e fazer cada um ter um valor
3- fazer com que os operadores façam o seu trabalho
*\

/* Minha idéia:
1- fazer arrays separadas de operadores e numeros
 */

/* Dicas:
1- Para pegar textos de botões .innerText
2- Para pegar textos de inputs .value
3- Number() ou só colocar um + é a mesma coisa
4- transfoma uma string em array
*/

const clickButts = document.querySelectorAll("#divButtons button")

class Calculator {
    // dando passo a passo 
    constructor(prevOpText, currOpText) {
        // valores impressos na tela
        this.prevOpText = prevOpText
        this.currOpText = currOpText
        
        // valor que o user está digitando 
        this.currOp = ""
    }

    // 1 - Mostrar os digitos no visor 
    addDigit(digit) {
        // Checando se na tela ja tem um ponto 
        if(digit === "," && this.currOpText.innerHTML.includes(",")){
            return
        }
        this.currOp = digit
        this.writeScreen()
    }
    
    

    // 2 - Processar operações 
    processOp(operations){
        // Checando se current ta vazio
        if(this.currOpText.innerHTML === "" && operations !== "CE"){
            // Mudando de operação 
            if(this.prevOpText.innerHTML !== ""){
                this.changeOp(operations)
            }
            return
        }
        let operationsvalue
        // transformando uma string em array trocando o espaço, e pegou o index 0 dela 
        let previous = +this.prevOpText.innerHTML.split(" ")[0]
        let current = +this.currOpText.innerHTML

        switch (operations) {
            case "+":
                operationsvalue = previous + current
                this.writeScreen(operationsvalue, operations, previous, current)
                break
            case "-":
                operationsvalue = previous - current
                this.writeScreen(operationsvalue, operations, previous, current)
                break
            case "*":
                operationsvalue = previous * current
                this.writeScreen(operationsvalue, operations, previous, current)
                break
            case "/":
                operationsvalue = previous / current
                this.writeScreen(operationsvalue, operations, previous, current)
                break
            case "DEL":
                this.processDel()
                break
            case "C":
                this.processClear()
                break
            case "CE":
                this.processClearEvery()
                break
            case "=":
                this.processEqual()
                break
            default:
                return
        }
    }


    // 3- Mudar o valor da tela 
    writeScreen(operationsvalue = null, operation = null, previous = null, current = null) {

        if(operationsvalue === null) {
            this.currOpText.innerHTML += this.currOp     
        } else {
            // checando se o valor é zero, se for add no current 
            if(previous === 0){
                operationsvalue = current
            }

            // Adicionando o valor la pra cima transformando current em previous 
            this.prevOpText.innerHTML = `${operationsvalue} ${operation}`
            this.currOpText.innerHTML = ""
        }
    }
    
    
    // 4 - Mudando operações
    changeOp(operation) {
        const mathOp = ["+", "-", "*", "/"]

        if(!mathOp.includes(operation)){
            return
        }

        // tela: 123 + => 123 operation
        this.prevOpText.innerHTML = this.prevOpText.innerHTML.slice(0, -1) + operation
    }
    
    // 5 - Deletar os ultimos digitos
    processDel() {
        this.currOpText.innerHTML = this.currOpText.innerHTML.slice(0, -1)
    }
    
    // 6 - Clear current
    processClear() {
        this.currOpText.innerHTML = ""
    }
    
    // 7 - Clear tudo
    processClearEvery() {
        this.prevOpText.innerHTML = ""
        this.currOpText.innerHTML = ""
    }

    // 8 - Dar o resultado
    processEqual() {
        
    }
}

const calc = new Calculator(prevOpText, currOpText)

clickButts.forEach(clickButt => {
    clickButt.addEventListener("click", e =>{
        // pegando o texto de cada botão 
        const value = e.target.innerText



        if(+value >= 0 || value === ","){
            calc.addDigit(value)
        } else {
            calc.processOp(value)
        }
    })
})


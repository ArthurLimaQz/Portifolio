const button = document.getElementById ("button_modal")
const modal = document.getElementById ("dialog_1")
const buttonClosed = document.getElementById ("button_closed")

const button_2 = document.getElementById ("button_explicacao2")
const modal_2 = document.getElementById ("dialog_2")
const buttonClosed2 = document.getElementById ("button_closed2")

const button_3 = document.getElementById ("button_explicacao3")
const modal_3 = document.getElementById ("dialog_3")
const button_closed3 = document.getElementById ("button_closed3")




button.onclick = function (){
    modal.showModal()
}

buttonClosed.onclick = function(){
    modal.close()
}

button_2.onclick = function(){
    modal_2.showModal()
}

buttonClosed2.onclick = function() {
    modal_2.close()
}

button_3.onclick = function() {
    modal_3.showModal()
}

button_closed3.onclick = function () {
    modal_3.close()
}


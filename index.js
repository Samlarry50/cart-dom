if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
    } else {
        ready();
}

function ready(){
    var removeCartitemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartitemButtons)
for(var i = 0; i <removeCartitemButtons.length; i++)  {
    var button = removeCartitemButtons[i]
    button.addEventListener('click', reomveCartitem)   
   }

   var quantityInputs = document.getElementsByClassName('cart-quantity-input')
   for (var i = 0; i <quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
   }
}

function reomveCartitem(event) {
    var buttonClicked =event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
    
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRow = cartItemContainer.getElementsByClassName('cart-row')
    for(var i = 0; i < cartRow.length; i++) {
        var cartRow = cartRow[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$',''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
function updateQuantity(id, change) {
    const quantityInput = document.getElementById(`quantity-${id}`);
    let quantity = parseInt(quantityInput.value) + change;
    if (quantity < 0) quantity = 0;
    quantityInput.value = quantity;
    updateTotalPrice();
}

function changeQuantity(id) {
    const quantityInput = document.getElementById(`quantity-${id}`);
    if (parseInt(quantityInput.value) < 0) {
        quantityInput.value = 0;
    }
    updateTotalPrice();
}

function removeItem(id) {
    const cartItem = document.querySelector(`.cart-item[data-id="${id}"]`);
    cartItem.remove();
    updateTotalPrice();
}

function updateTotalPrice() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;
    cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('.cart-item-price').innerText.replace('$', ''));
        const quantity = parseInt(item.querySelector('input').value);
        total += price * quantity;
    });
    document.getElementById('total-price').innerText = total.toFixed(2);
}

function showCreditCardForm() {
    document.getElementById('credit-card-form').style.display = 'block';
}

document.getElementById('credit-card-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('thank-you-message').style.display = 'block';
    document.getElementById('credit-card-form').style.display = 'none';
    startConfetti();
    setTimeout(resetCheckout, 20000); // Reset checkout after 20 seconds
});

let confettiStarted = false;

function startConfetti() {
    if (!confettiStarted) {
        confettiStarted = true;
        const confettiContainer = document.body;
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confettiContainer.appendChild(confetti);
        }
        setTimeout(stopConfetti, 10000); // Stop confetti after 10 seconds
    }
}

function stopConfetti() {
    const confetti = document.querySelectorAll('.confetti');
    confetti.forEach(c => c.remove());
    confettiStarted = false;
}

function resetCheckout() {
    document.getElementById('thank-you-message').style.display = 'none';
    document.getElementById('credit-card-form').reset();
    document.getElementById('credit-card-form').style.display = 'none';
    const cartItems = document.querySelectorAll('.cart-item input');
    cartItems.forEach(item => item.value = 0);
    updateTotalPrice();
}
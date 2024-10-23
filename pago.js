document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    // Aquí puedes agregar la lógica para procesar el pago
    // Por ejemplo, enviar los datos a un servidor (simulado aquí)
    if (validatePaymentDetails(cardNumber, expiryDate, cvv)) {
        document.getElementById('payment-message').innerText = 'Pago realizado con éxito. ¡Gracias por su compra!';
        // Limpiar el formulario
        document.getElementById('payment-form').reset();
    } else {
        document.getElementById('payment-message').innerText = 'Error en los detalles de pago. Por favor, verifica e intenta nuevamente.';
    }
});

function validatePaymentDetails(cardNumber, expiryDate, cvv) {
}
    // Validación simple: puedes mejorar esto según tus necesidades//
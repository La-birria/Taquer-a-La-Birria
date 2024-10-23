let cart = JSON.parse(localStorage.getItem('carrito')) || [];
let totalPrice = cart.reduce((sum, price) => sum + price, 0);

// Inicializar el total al cargar la página
document.getElementById('total-price').innerText = totalPrice.toFixed(2);

function addToCart(price) {
    cart.push(price);
    totalPrice += price;
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
    updateCartItems();
    localStorage.setItem('carrito', JSON.stringify(cart)); // Guardar el carrito en localStorage
}

function updateCartItems() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach((price, index) => {
        const li = document.createElement('li');
        li.textContent = `Producto ${index + 1}: $${price.toFixed(2)}`;
        
        // Crear botón de eliminar
        const removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);
        
        cartItems.appendChild(li);
    });
    
    // Agregar botón de ir a la página de pago
    const paymentButton = document.createElement('button');
    paymentButton.textContent = 'Ir a Pago';
    paymentButton.onclick = goToPaymentPage;
    cartItems.appendChild(paymentButton);
}

function removeFromCart(index) {
    totalPrice -= cart[index];
    cart.splice(index, 1);
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
    updateCartItems();
    localStorage.setItem('carrito', JSON.stringify(cart)); // Actualizar el carrito en localStorage
}

function goToPaymentPage() {
    // Redirigir a la página de pago
    window.location.href = 'pago.html'; // Cambia 'pagina_pago.html' por la URL de tu página de pago
}

function toggleCart() {
    const cartElement = document.getElementById('cart');
    cartElement.classList.toggle('hidden');
}

function clearCart() {
    cart = [];
    totalPrice = 0;
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
    updateCartItems();
    localStorage.removeItem('carrito'); // Limpiar el localStorage
    toggleCart();
}

function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; 
    carrito.forEach((price, index) => {
        const li = document.createElement('li');
        li.textContent = `Producto ${index + 1}: $${price.toFixed(2)}`;
        
        // Crear botón de eliminar
        const removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);
        
        cartItems.appendChild(li);
    });
    
    // Agregar botón de ir a la página de pago
    const paymentButton = document.createElement('button');
    paymentButton.textContent = 'Ir a Pago';
    paymentButton.onclick = goToPaymentPage;
    cartItems.appendChild(paymentButton);
}

// Llamar a mostrarCarrito al cargar la página
document.addEventListener('DOMContentLoaded', mostrarCarrito);
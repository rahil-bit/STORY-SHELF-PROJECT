let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    let item = cart.find(i => i.name === name);
    if (item) {
        item.qty++;
    } else {
        cart.push({ name, price, qty: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
}

function removeItem(i) {
    cart.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function clearCart() {
    cart = [];
    localStorage.removeItem("cart");
    loadCart();
}

function loadCart() {
    let box = document.getElementById("cartBox");
    if (!box) return;

    box.innerHTML = "";

    if (cart.length === 0) {
        box.innerHTML = "<p>Your cart is empty</p>";
        return;
    }

    cart.forEach((item, i) => {
        let div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <p>${item.name} — ₹${item.price} × ${item.qty}</p>
            <button onclick="removeItem(${i})">Remove</button>
        `;
        box.appendChild(div);
    });
}

window.onload = loadCart;

function searchProduct() {
    let text = document.getElementById("searchBar").value.toLowerCase();
    let cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {
        let name = card.querySelector("h3").innerText.toLowerCase();
        if (name.includes(text)) {
        card.style.display = "block";
        } else {
        card.style.display = "none";
        }


    });
}




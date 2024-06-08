precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

mas = document.querySelector(".mas");
minus = document.querySelector(".minus");
cantidad = document.querySelector(".cantidad");

mas.onclick = () => {
    cantidad.textContent = parseInt(cantidad.textContent) + 1;
    multiplicar ();
}

minus.onclick = () => {
    cantidad.textContent = parseInt(cantidad.textContent) - 1;
    multiplicar ();
}


valortotal = document.querySelector(".valor-total");

multiplicar = () => {
    valortotal.textContent = precio * cantidad.textContent
}
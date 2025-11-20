document.addEventListener('DOMContentLoaded', () =>{

    const formulario = document.getElementById('formulario')
    const inputNombre = document.getElementById('nombre')
    const resultados = document.getElementById('resultados')

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombreTrago = inputNombre.value;
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombreTrago}`)
        .then(response => response.json())
        .then(data => {
            if (data.drinks) {
                let html = '';
                data.drinks.forEach(trago => {
                    html += `
                        <div>
                            <h3>${trago.strDrink}</h3>
                            <img src="${trago.strDrinkThumb}" alt="${trago.strDrink}">
                            <p><strong>Categoría:</strong> ${trago.strCategory}</p>
                            <p><strong>Instrucciones:</strong> ${trago.strInstructions}</p>
                        </div>
                    `;
                });
                resultados.innerHTML = html;
            }
        })
        .catch(error => console.error('Error:', error));
    });
});
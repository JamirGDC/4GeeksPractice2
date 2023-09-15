function mostrarMasCards() {
    var contenedor = document.getElementById("contenedor-cards");
    contenedor.innerHTML = "";

    for (var i = 1; i <= 9; i++) {
        var card = document.createElement("div");
        card.className = "col-4 mb-4";
        card.innerHTML = `
                <div class="card w-100 h-100">
                    <img src="./imagenes/imagen${i}.png"  class="card-img-top w-100 h-100 " >
                    
                </div>
            `;
        contenedor.appendChild(card);
    }
}

function mostrarUnaCard() {
    var contenedor = document.getElementById("contenedor-cards");
    contenedor.innerHTML = "";

    for (var i = 1; i <= 9; i++) {
        var card = document.createElement("div");
        card.className = "container pt-4";
        card.innerHTML = `
            <div class="row justify-content-center">
            <div class="col-5">
              <div class="card">
                <div class="container pt-3">
                <div class="row">
                    <div class="col"><h5>My Post</h5></div>
                    <div class="col d-flex justify-content-end">15/23</div>
                      
                    </div>

                <img src="./imagenes/imagen${i}.png" class="card-img-top" alt="">
                <div class="card-body">
                  <h5 class="card-title">204 Likes</h5>
                  <p class="card-text">This is an example of a very good photo that you can post on Instagram</p>
                </div>
              </div>
            </div>
          </div>
        `;
        contenedor.appendChild(card);
    }
}

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})
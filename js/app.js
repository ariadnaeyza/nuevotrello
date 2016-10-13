window.addEventListener("load", trello);

function trello() {
    var contenedor = document.getElementById("contAll");
    var subContenedor = document.getElementById("contList");
    var spanList = document.getElementById("spanList");
    var form = document.getElementById("form");
    var nameList = document.getElementById("inputList");
    var btnSave = document.getElementById("buttonSave");
    
    spanList.addEventListener("click", apareceForm);
    
    function apareceForm() {
        spanList.style.display = "none";
        form.style.display = "block";

        nameList.focus();
    }

    btnSave.addEventListener("click", function (e) {
        e.preventDefault();

        form.style.display = "none";

        var tittleList = document.createElement("span");
        var enlaceAgregar = document.createElement("a");

        tittleList.classList.add("d-block", "text-center");
        enlaceAgregar.classList.add("d-block", "text-center");

        tittleList.innerHTML = nameList.value;
        enlaceAgregar.innerHTML = "Agregar nueva tarea..."

        spanList.parentElement.appendChild(tittleList);
        spanList.parentElement.appendChild(enlaceAgregar);
        nameList.value = "";

        var contTarjeta = document.createElement("div");
        contTarjeta.setAttribute("id", "contTarjeta");

        enlaceAgregar.parentElement.insertBefore(contTarjeta, enlaceAgregar.parentElement.children[3]);
        
        //Se empieza agregar nuevas listas a la derecha
        nuevaLista();

        enlaceAgregar.addEventListener("click", function (e) {
           e.preventDefault(); 
            enlaceAgregar.style.display = "none";

            var newForm = document.createElement("form");
            var newTextArea = document.createElement("textarea");
            var newBtn = document.createElement("button");

            newForm.classList.add("newForm");
            newTextArea.classList.add("textareaList")
            newBtn.classList.add("btn", "btn-default", "d-block");

            contTarjeta.appendChild(newForm);
            newForm.appendChild(newTextArea);
            newForm.appendChild(newBtn);
            newTextArea.focus();

            newBtn.innerHTML = "Guardar";

            newBtn.addEventListener("click", function (e) {
                e.preventDefault();
                newForm.style.display = "none";

                var newTarjeta = document.createElement("span");
                newTarjeta.innerHTML = newTextArea.value;
                contTarjeta.appendChild(newTarjeta);
                subContenedor.appendChild(enlaceAgregar);
                newTarjeta.classList.add("newTarjeta", "d-block");
                enlaceAgregar.style.display="inline-block";
            });  
        });
    });

    function nuevaLista(){
        var newContenedor = document.createElement("div");
        contenedor.appendChild(newContenedor);
        newContenedor.appendChild(spanList);
        newContenedor.appendChild(form);
        newContenedor.classList.add("newContenedor","d-inlineblock");
        spanList.style.display = "inline-block";
    }
}
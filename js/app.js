window.addEventListener("load",trello);

function trello(){
    var contenedor = document.getElementById("contAll");
    var subContenedor = document.getElementById("contList");
    var spanList = document.getElementById("spanList");
    var newForm = document.getElementById("newForm");
    var nameList = document.getElementById("inputList");
    var btnSave = document.getElementById("buttonSave");
    
    function apareceForm(){
        spanList.style.display="none";
        newForm.style.display="block";
        
        nameList.focus();
    }
    
    btnSave.addEventListener("click", function(e){
        e.preventDefault();

        newForm.style.display="none";

        var tittleList = document.createElement("span");
        var enlaceAgregar =  document.createElement("a");

        tittleList.classList.add("d-block");
        enlaceAgregar.classList.add("d-block");

        tittleList.innerHTML = nameList.value;
        enlaceAgregar.innerHTML = "Agregar nueva tarea..."

        subContenedor.appendChild(tittleList);
        subContenedor.appendChild(enlaceAgregar);
        nameList.value = "";
    });
    
    spanList.addEventListener("click",apareceForm);    
}
window.addEventListener("load", function(){
    
    var contenedor = document.getElementById("contAll");
    var subContenedor = document.getElementById("contList");
    var spanList = document.getElementById("spanList");
    var newForm = document.getElementById("newForm");
    var newList = document.getElementById("inputList");
    var btnSave = document.getElementById("buttonSave");
    
    function apareceForm(){
        spanList.style.display="none";
        newForm.style.display="block";        
    }
    
    spanList.addEventListener("click",apareceForm);
    
});
function agregarTarea(){
    //obtenemos el valor del campo de la tarea
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;//al poner value estoy obteniendo no el input si no el valor del input

    //validamos que el valor no sea vacio
    if(nuevaTareaTexto === ""){
        alert("Por favor, ingrese una tarea");
        return;//que vuelva y ejecute de nuevo todo

    }

    //crear elemento en la lista
    //createElement nos crea un elemento
    //en este caso li
    //para poder asignarle luego el valor
    let nuevaTarea = document.createElement("li");
    
    //textContent es para agregar contenido
    nuevaTarea.textContent = nuevaTareaTexto + " ";

    //crear boton eliminar

    let botonEliminar = document.createElement("button");

    botonEliminar.textContent = "Eliminar";

    botonEliminar.onclick = function(){nuevaTarea.remove()};


    //agregar el boton de eliminar al elemento de la lista

    //la propiedad appendChild toma un elemento del Dom como un elemento
    //padre, y agrega un elemento hijo, que depende de ese elemento
    //padre.
    nuevaTarea.appendChild(botonEliminar);

    //agregar el elemento la tarea a la lista

    //el padre es la lista
    //el hijo nuevaTarea
    //el hijo del hijo el boton eliminar

    document.getElementById("listaTareas").appendChild(nuevaTarea);

    //vamos hacer que cada vez que agrege un texto al input se borre el nombre
    //de la tarea del placeholder, cada vez que agregue un texto

    //limpiar el cuadro de texto del nombre de la tarea

    document.getElementById('nuevaTarea').value ="";



}
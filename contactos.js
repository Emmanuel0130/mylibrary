var count=0;

function agregarValores(){

    var Name=document.getElementById("Name").value;
    var Lastname=document.getElementById("Lastname").value;
    var Email=document.getElementById("Email").value;
    var Phonenumber=document.getElementById("Phonenumber").value;
    var Phonenumber=document.getElementById("Ubication").value;
    count++;

    if ( Name.length>0 || Lastname.length>0) {
        var tbody = document.getElementById("mytable").getElementsByTagName("TBODY")[0];

        var attrId = document.createAttribute('id'); 
        attrId.value =count;

        var td1 = document.createElement("TD"); 
        td1.appendChild(document.createTextNode(Name));
        var td2 = document.createElement("TD"); 
        td2.appendChild(document.createTextNode(Lastname));
        var td3 = document.createElement("TD"); 
        td3.appendChild(document.createTextNode(Email));
        var td4 = document.createElement("TD");
        td4.appendChild(document.createTextNode(Phonenumber));
         var td5 = document.createElement("TD");
        td5.appendChild(document.createTextNode(Ubication));
        var td6 = document.createElement("TD");
        td6.appendChild(crearButton(count, "delete"));
        td6.appendChild(crearButton(count, "update"));
        

        var row = document.createElement("TR");
        row.setAttributeNode(attrId);
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        row.appendChild(td5);
        row.appendChild(td6);
        tbody.appendChild(row);       
    }

    document.getElementById("Name").value = "";
    document.getElementById("Lastname").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Phonenumber").value = "";
    document.getElementById("Ubication").value = "";
}

function eliminarValor(id){

    var row = document.getElementById(id);
    row.parentNode.removeChild(row);
}

function actualizarValor(id){
    var row = document.getElementById(id);

    var Name=document.getElementById("Name").value;
    var Lastname=document.getElementById("Lastname").value;
    var Email=document.getElementById("Email").value;
    var Phonenumber=document.getElementById("Phonenumber").value;
    var Phonenumber=document.getElementById("Ubication").value;

    if ( Name.length>0 || Lastname.length>0) {
        row.childNodes[0].textContent = Name;
        row.childNodes[1].textContent = Lastname;
        row.childNodes[2].textContent = Email;
        row.childNodes[3].textContent = Phonenumber;
        row.childNodes[4].textContent = Ubication;
    }

    document.getElementById("Name").value = "";
    document.getElementById("Lastname").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Phonenumber").value = "";
    document.getElementById("Ubication").value = "";
}

function crearButton(id, type)
 {
    var button=document.createElement ("input");
    var attrType=document.createAttribute('type');
    attrType.value="button";
    if (type == "delete") {
        var attrValue=document.createAttribute('value');
        attrValue.value="delete";
        var attrOnclick=document.createAttribute('onclick');
       attrOnclick.value="eliminarValor("+count+");";
       }  else {
        var attrValue=document.createAttribute('value');
        attrValue.value="update";
        var attrOnclick=document.createAttribute('onclick');
        attrOnclick.value="actualizarValor("+count+");";
    }
     }

    button.setAttributeNode(attrType);
    button.setAttributeNode(attrValue);
    button.setAttributeNode(attrOnclick);

    return button;

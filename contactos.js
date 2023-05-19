function agregarValores(){

    var Name=document.getElementById("Name").value;
    var Lastname=document.getElementById("Lastname").value;
    var Email=document.getElementById("Email").value;
    var Phonenumber=document.getElementById("Phonenumber").value;
    count++;

       if ( Name.length>0 || Lastname.length>0)
        {
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
        td5.appendChild(crearButton(count));

        var row = document.createElement("TR");
        row.setAttributeNode(attrId);
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        row.appendChild(td5);
        tbody.appendChild(row);       
       }

       document.getElementById("Name").value = "";
       document.getElementById("Lastname").value = "";
       document.getElementById("Email").value = "";
       document.getElementById("Phonenumber").value = "";
}
       function EliminarValor(id){

        var row = document.getElementById(id);
        row.parentNode.removeChild(row);
        }

        function crearButton(id){
            var button = document.createElement ("input");
            var attrType = document.createAttribute('type');
            attrType.value = "button";
            var attrValue = document.createAttribute('value');
            attrValue.value = "delete";
            var attrOnclick = document.createAttribute('onclick');
            attrOnclick.value = "eliminarValor("+count+");";

            button.setAttributeNode(attrType);
            button.setAttributeNode(attrValue);
            button.setAttributeNode(attrOnclick);

            return button;

            
        }
       

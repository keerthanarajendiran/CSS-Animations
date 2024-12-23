var divition=document.getElementById("wrapper");
var input = document.getElementById("text");
var selects;
var non_select;
var non_select_class;
var id;
var arr=["fries","pepsi","popcorn"];
function addAnimation(){
    var value = document.getElementById("text").value;
    
    if(arr.includes(value.toLowerCase())){
        id=arr.indexOf(value.toLowerCase());
        var image=document.createElement("img");
        image.className="image";
        if(id == 0){
            image.src="FRIES-(500x500px).png"
        }
        if(id == 1){
            image.src="PEPSI-(500x500px).png"
        }
        if(id == 2){
            image.src="POPCORN-(500x500-px).png"
        }
        divition.appendChild(image)
            selects=document.getElementById(id);  
            selects.classList.add(arr[id]);
            arr.forEach(myFun);
            function myFun(value,index){
                if(index !== id){
                    non_select = document.getElementById(index);
                    non_select.classList.add(`non${arr[id]}`);
                }    
            }
    }
    non_select_class=document.getElementsByClassName(`non${arr[id]}`);
}
function removeAnimation(){
    if(document.getElementById("text").value == ""){
        selects.classList.remove(arr[id]);
        for(var i=non_select_class.length-1; non_select_class.length != 0; i--){
            non_select_class[0].classList.remove(`non${arr[id]}`);
        }
    }
}
input.addEventListener("keyup", function(event){ 
    if (event.keyCode === 13 ) {
     event.preventDefault();
     document.getElementById("submit-btn").click();
    }
});


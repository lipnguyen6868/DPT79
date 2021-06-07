function myFunction() {
    if(confirm("DO you want to Delete ?")){
        alert("Delete Succesfull");
    }
}
function myFunction2() {
    alert("Save Succesfull !!");
}
function block(a,b,c){
    var x=confirm("Do you want to block ?");
    if(x==true){
        document.getElementById(a).style.textDecoration="line-through";
        document.getElementById(b).style.display="none";
        document.getElementById(c).style.display="block";
    }
}
function unblock(a,b,c){
var x=confirm("Do you want to unblock ?");
if(x==true){
    document.getElementById(a).style.textDecoration="none";
    document.getElementById(b).style.display="block";
    document.getElementById(c).style.display="none";
}
}
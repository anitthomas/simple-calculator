function btnclick(val) 
{
document.getElementById("screen").value=document.getElementById("screen").value+val;

}
function clearIt()
{
    document.getElementById("screen").value="";
}
function answ()
{
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}
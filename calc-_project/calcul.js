let display = document.getElementById("display");


function wriat ( input)
{   
   let last = display.value.slice(-1);
   let opriter = ['+', '-', '*', '/' ,'.'];
   if (opriter.includes(input) && opriter.includes(last))
   {
    return;
   }
   display.value += input;
}
function clearwriat()
{
    display.value=" ";
}
function Calcul()
{
    try
    {
        display.value.eval(display.value);
    }
    catch
    {
        display.value = "Erorr";
    }
} 
function deleteLastchar(){
    display.value= display.value .slice(0, -1);
}

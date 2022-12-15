var fname=prompt("Enter the Name");
var num=prompt("How many times Print the Time");
var i=1;
function myfun()
{
    do
    {
        document.write(fname);
        document.write("<br>");
        i++;
    }while(i<=num)
}
myfun();
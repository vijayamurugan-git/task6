function studentmarks()
{
let nam=prompt("enter your name")
let mark1=Number(prompt("enter your subject 1 mark"))
let  mark2=Number(prompt("enter your subject 2mark"))
let mark3=Number(prompt("enter your subject 3 mark"))

function total()
{
alert("Total ="+ (mark1+mark2+mark3))
}
total()
function average()
{
    return((mark1 + mark2 + mark3) / 3)
}
average()
let avg = average()
 alert("Average = " + avg)
function grade(){
if (avg>=90)
{
alert("GRADE A")
}
else if (avg>=75)
{
alert("GRADE B")
}
else if (avg>=50)
{
alert("GRADE C")
}
else 
{
alert("GRADE F")
}
}
grade()
}
studentmarks()
do 
{
    studentmarks()
}
while(confirm ("calculate another student's result"))

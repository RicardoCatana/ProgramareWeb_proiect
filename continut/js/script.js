window.onload=function()
{
    let date= new Date();
    document.getElementById("date").innerHTML=date;
    setInterval(updateDate, 1000);
}

function updateDate()
{
    let date=new Date();
    document.getElementById("date").innerHTML=date;
}
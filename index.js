let counterID = document.getElementById("main__counter");

let counter = 0;

function increment ()
{
    counter++;
    counterID.innerText = counter;
}

function save()
{
    document.getElementById("main__saved-list-data").textContent += counter + " - ";
    counterID.innerText = 0;
    counter = 0;
}

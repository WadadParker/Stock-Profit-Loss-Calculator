var initialPrice = document.querySelector("#initial-price");
var stock = document.querySelector("#stocks");
var currentPrice = document.querySelector("#current-price");
var button = document.querySelector("#button");
var displayText = document.querySelector("#display-text");

button.addEventListener("click", clickHandler)


function clickHandler()
{
    displayText.style.color="black";
    if(Number(initialPrice.value<1) || Number(stock.value)<1 || Number(currentPrice.value)<1)
    {
        console.log("this is 1");
        displayMessage("Please enter valid number for all fields");
    }
    else {
        if(Number(initialPrice.value)<Number(currentPrice.value))
        {
            console.log("This is coming 2");
            computeProfit(Number(initialPrice.value)*Number((stock.value)),(Number(currentPrice.value)*Number(stock.value)));
        }
        else if(Number(initialPrice.value)>Number(currentPrice.value))
        {
            console.log("Coming 3");
            computeLoss(Number(initialPrice.value)*Number((stock.value)),(Number(currentPrice.value)*Number(stock.value)));
        }
        else {
            displayMessage("No pain no gain but no gain is also pain");
        }
    }
}

function computeProfit(costPrice,sellingPrice)
{
    console.log("okayyyyyyyyyyyyyyyyyyy");
    var profit=sellingPrice-costPrice;
    var profitPercent = (profit/costPrice)*100;
    displayMessage("Your Profit is "+ profit + " and the profit percentage is "+ profitPercent.toFixed(2) + "%");
    displayText.style.color="green";

}

function computeLoss(costPrice, sellingPrice)
{
    var loss= costPrice - sellingPrice;
    var lossPercent = (loss/costPrice)*100;
    displayMessage("Your Loss is "+ loss + " and the loss percentage is "+ lossPercent.toFixed(2) + "%");
    displayText.style.color="red";
}


function displayMessage(text)
{
    displayText.innerText=text;
}
var burl = "https://api1.binance.com";
var query = burl + "/api/v3/ticker/price?symbol=";

document.getElementById("btc").style.fontSize = "15px";
document.getElementById("eth").style.fontSize = "15px";
document.getElementById("ltc").style.fontSize = "15px";



function setPrice(stock) {
  url = query + stock.toUpperCase()+"USDT"
  console.log(url)
    fetch(url)
      .then((response) => response.json())
        .then((data) => {
            document.getElementById(stock).style.backgroundColor = "blue";
            document.getElementById(stock).style.borderRadius = "5px";
        document.getElementById(stock).innerHTML =
                "(" + Math.round(data.price) + ")";
                setTimeout(() => {
                    document.getElementById(stock).style.backgroundColor = "transparent";
                  }, 500);
                });
}

function refreshPrice() {
  setInterval(() => {
    
    setPrice("btc")
    setPrice("eth")  
    setPrice("ltc")  
    
  }, 500);
}
refreshPrice();

const fetchAwaitResponse = async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Capecoin%2Cethereum%2Clitecoin&vs_currencies=usd');
    const responseJson = await response.json();
    return parseJson(responseJson);
}

fetchAwaitResponse();

setInterval(fetchAwaitResponse, 10000)


function parseJson(json) {
	document.getElementById('apecoin').innerHTML = `${json.apecoin.usd} usd`			
	document.getElementById('bitcoin').innerHTML = `${json.bitcoin.usd} usd`
	document.getElementById('ethereum').innerHTML = `${json.ethereum.usd} usd`
	document.getElementById('litecoin').innerHTML = `${json.litecoin.usd} usd`										
}
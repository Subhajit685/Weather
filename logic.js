
async function weather(city) {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c7c5014242msh32e1c09ffa3936cp107ffbjsne5bc03bd8401',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

	const response = await fetch(url, options);
	const result = await response.json();
    wea.src = result.current.condition.icon
    let text3 = result.current.condition.text
    document.querySelector(".text3").innerHTML = text3
    let cityname = result.location.name
    let state = result.location.region
    document.querySelector(".city").innerHTML = `${cityname}, ${state}` 
    let temp = result.current.temp_c
    document.querySelector(".temp").innerHTML = temp + "°C"
    let wind = result.current.wind_kph
    document.querySelector(".text1").innerHTML = wind + " kph"
    let him = result.current.humidity
    document.querySelector(".text2").innerHTML = him
    let last = result.current.last_updated
    document.querySelector(".last").innerHTML = `Last Update = ${last}`
}

document.querySelector(".scarch-icon").addEventListener("click", async ()=>{
    let city = await document.querySelector("#text").value
    console.log(city)
    await weather(city)
})














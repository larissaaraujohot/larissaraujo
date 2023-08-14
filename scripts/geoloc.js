function getGeolocationByIP() {
    const url = 'http://ip-api.com/json/?fields=city';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const currentCity = data.city;
            document.getElementById("model-city").textContent = currentCity;
        })
        .catch(error => {
            console.error("Error to get city name:", error);
        });
}

getGeolocationByIP();

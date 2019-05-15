(function(){
    var country=document.getElementById('inpco');
    var city=document.getElementById('inpci');
    var btn=document.getElementById('btn');
    var temp=document.getElementById('tempress');
    var humidity=document.getElementById('humress');
    let loader = document.getElementById('loader');

    function networkrequest(cityval, countryval){
    
        loader.style.display = 'block';
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityval},${countryval}&appid=a3e3b22fc9205e235a9a7eb7ac4c89ce`)
        .then(function(result) {
            
            return result.json();
        })
        .then(function(data) {
            loader.style.display = 'none';
            

            
            humidity.innerText = data.main.humidity + " %";
            temp.innerText = Math.round(data.main.temp - 273) + " °C";
           

        }).catch(function() {});

    }
    btn.addEventListener('click', function() {
        let cityval = city.value;
        let countryval = country.value;
        networkrequest(cityval, countryval);

    });
    (function() {
      
        temp.innerText = "";
        humidity.innerText = "";
       
    })();

})()
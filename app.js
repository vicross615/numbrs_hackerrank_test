
document.getElementById("country_find").addEventListener("click", findCountry());

function findCountry() {

    var country =document.getElementById("country_input").value;

    fetch("https://corona.lmao.ninja/v2/countries/USA" + country)
        .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.getElementById("country").innerHTML = data.country;
        document.getElementById("active").innerHTML = data.active.toLocaleString();
        document.getElementById("cases").innerHTML = data.cases.toLocaleString();
        document.getElementById("critical").innerHTML = data.critical.toLocaleString();
        document.getElementById("death").innerHTML = data.deaths.toLocaleString();
        document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
        document.getElementById("tests").innerHTML = data.tests.toLocaleString();
        document.getElementById("flag").src = data.countryInfo.flag;
    });
}






function fetchData(substr){


    var url= "https://jsonmock.hackerrank.com/api/movies/search/?Title="+substr;
    var titles = [];
   var totalPages =0;

        fetch(url)
            .then((response)=> {
            return response.json();
            })
                .then((data) => {
                     totalPages += data.total_pages;
                    var movieTitles = data.data;

                    console.log(data.total_pages+"...amount of movie from source..." + movieTitles.length);
                    movieTitles.map((e) => {
                         titles.push(e.Title);
                    });
                });

        console.log("movies title as at first iteration" +titles.length+"......total pages available......" +totalPages);




        var j;

        for(j=2; j<totalPages; j++) {

            fetch(url)
                .then((response) => {

                return reponse.json();
            }
            ).then((data) =>{
                var i;
                for(i=0; i<data.length; i++) {
                this.titles.push(data[i].Title);
                }
            })

        }
        console.log("movies title avaliable" +titles.length)



}

fetchData("spiderman");











    var country =document.getElementById("country").value;
    fetch('https://corona.lmao.ninja/v2/countries/Usa')
        .then((response) => {
        return response.json();
    })
    .then((data) => {
            console.log(data);
        document.getElementById("country").innerHTML = data.country;
        document.getElementById("active").innerHTML = data.active.toLocaleString();
        document.getElementById("cases").innerHTML = data.cases.toLocaleString();
        document.getElementById("critical").innerHTML = data.critical.toLocaleString();
        document.getElementById("death").innerHTML = data.deaths.toLocaleString();
        document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
        document.getElementById("tests").innerHTML = data.tests.toLocaleString();
        document.getElementById("flag").src = data.countryInfo.flag;
    });
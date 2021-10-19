$(document).ready(function()){
    $.ajax({
        url: 'https://api.frankfurter.app/latest',
        dataType: "json",
        type: "GET",
        success: function (data){
            var output = $("#result").html();
            var USD = document.getElementById("usd");
            var JPY = document.getElementById("jpy");
            var GBP = document.getElementById("gbp");
            var CAD = document.getElementById("cad");
            var CNY = document.getElementById("cny");
            $.each(data.rates, (key, value) => {
                if (USD){
                    if (key == "USD"){
                        output += '<p>' + value + '</p>';
                    }
                }
                else if(JPY){
                    if (key == "JPY"){
                        output += '<p>' + value + '</p>';
                    }
                }
                else if(GBP){
                    if (key == "GBP"){
                        output += '<p>' + value + '</p>';
                    }
                }
                else if(CAD) {
                    if (key == "CAD"){
                        output += '<p>' + value + '</p>';
                    }
                }
                else if (CNY){
                    if (key == "CNY"){
                        output += '<p>' + value + '</p>';
                    }
                }
            });
            if (output == ""){
                output += "<p>No results found</p>"
            }
            $("result").html(output);
        }
    })
}
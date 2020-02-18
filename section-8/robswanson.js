var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

var btnAxios = document.getElementById("axios");
var quote = document.getElementById("quote");

btnAxios.addEventListener("click", function() {
  axios.get(url)
  .then( function(data) { 
    quote.textContent = data.data[0];
  })
  .catch(function (error) {
    console.log(error);
  });
});
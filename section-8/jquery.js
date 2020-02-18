$.ajax("https://dog.ceo/api/breeds/image/random/Fetch!")
.done( function(data) { 
    $('#dogImg').attr("src", data.message[0]);
    console.log(data.message[0]) 
})
.fail( console.log("fail") );
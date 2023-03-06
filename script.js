document.getElementById("search-input").addEventListener("keyup", async (e) => {
  const searchQurey = document.getElementById("search-input").value;
  // var search = e.key
  console.log("search", searchQurey);
  makeRequest("http://localhost:8000/php/public/index.php");

  function makeRequest(url) {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open("GET", url, true);
    httpRequest.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        const response = JSON.parse(httpRequest.responseText);
        var result = [];
        response.map((res) => {
          if (res.name.includes(searchQurey)) result.push(res.name);
        });

        function register() {
          var printThis = "";
              if(result.length === 0){
                return "not found"
              }else{
          for (var i = 0; i < result.length; i++) {
            printThis += "<li>" + result[i] + "</li>";
          }
          return printThis;
        }
      }

        document.getElementById("results").innerHTML = register();

        // alert(response);
      } else {
        alert("There was a problem with the request.");
      }
    }
  }

  // Search comments
  // Use this API: https://jsonplaceholder.typicode.com/comments?postId=3
  // Display the results in the UI

  // Things to look out for
  // ---
  // Use es6
  // Error handling
});

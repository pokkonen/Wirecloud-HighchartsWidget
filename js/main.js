testURL = 'http://date.jsontest.com/';

// Function will test Fiware platform http reguest and log
// current date and time.
function browser(searchUrl, searchHeaders) {

  MashupPlatform.http.makeRequest(searchUrl,{
    method: 'GET',
    contentType: "application/json",
    requestHeaders: searchHeaders,
    onSuccess: function (response) {

      let jsonData = JSON.parse(response.responseText);

      console.log(jsonData);
      MashupPlatform.widget.log(jsonData.date);
      MashupPlatform.widget.log(jsonData.time);

    },
    on404: function (response) {
        MashupPlatform.widget.log("Error 404: Not Found");
    },
    on401: function (response) {
        MashupPlatform.widget.log("Error 401: Authentication failed");
    },
    on403: function (response) {
        MashupPlatform.widget.log("Error 403: Authorization failed");
    },
    onFailure: function (response) {
        MashupPlatform.widget.log("Unexpected response from the server");
        MashupPlatform.widget.log(response);
    }
  });
}

browser(testURL, '')

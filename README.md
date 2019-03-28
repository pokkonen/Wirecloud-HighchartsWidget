This document will give simple tutorial how to create wirecloud widget to Fiware Lab. Images of sample files and required steps are provided.
---

Fiware Lab / Wirecloud
---
To begin with, you should create account to Fiware Lab (https://account.lab.fiware.org/) and get familiar with it by following this tutorial https://wirecloud.readthedocs.io/en/stable/user_guide/.

Similar widget creation tutorial (with more and more specific information) can be found below:
https://wirecloud.readthedocs.io/en/stable/development/widget_and_operators/

https://github.com/wirecloud-fiware/quick-start-development-tutorial/tree/master/basic-chat

Widget creation
---
Widget should follow structure shown below:

![image](https://user-images.githubusercontent.com/14833656/55157818-0beb6100-5166-11e9-9842-297c518db08c.png)

Only the config.xml should be mandatory but at least for the first time the widget should follow this kind of structure to test the features.

Sample files to test widget creation and upload to wirecloud:
  -	Developer-guide.md & README.md can be empty. tutorialpic.jpg is the “logo” for widget when uploaded to wirecloud.
- style.css
```
body {  padding: 0;
  margin: 0;
  font-family: sans-serif;
  color: #3A95DB;}
body,html { height: 100%;}
```
- main.js
```
testURL = 'http://ip.jsontest.com/';

// Function will test Fiware platform http reguest and log current
// date and time on application (as error) and on browser console.
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

```
- config.xml

```
<?xml version='1.0' encoding='UTF-8'?>
<widget xmlns="http://wirecloud.conwet.fi.upm.es/ns/macdescription/1" vendor="whatever" name="tutorialWidget" version="0.0.1">
    <details>
        <title>Tutorial Widget</title>
        <homepage>https://github.com/wirecloud-fiware/quick-start-development-tutorial</homepage>
        <authors>Your name here</authors>
        <contributors>Your name here again</contributors>
        <email>Your email</email>
        <image>images/tutorialpic.jpg</image> <!-- 170x80 -->
        <description>Simple widget to test widget creation.</description>
        <longdescription>README.md</longdescription>
        <license>Apache License 2.0</license>
        <licenseurl>http://www.apache.org/licenses/LICENSE-2.0.html</licenseurl>
        <doc>doc/developer-guide.md</doc>
    </details>
    <contents src="index.html" useplatformstyle="true"/>
    <rendering width="5" height="24"/>
</widget>
```

- index.html
```
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="application/xhtml+xml; charset=UTF-8"></meta>
        <script type="text/javascript" src="js/main.js"></script>
        <link rel="stylesheet" type="text/css" href="css/style.css" />
    </head>
    <body>
      <div>
        If this text is visible, application has been succesfully uploaded!
      </div>
    </body>
</html>
```
Note: Usually when modifying index.html and uploading the widget into wirecloud, you have to change the version number aswell. Otherwise the changes might not be visible.

Uploading widget to Wirecloud
---
Wirecloud requires widgets to be in (.wgt) format so files need to be zipped in that format.

At this point you should have files ready for upload as shown below:

![image](https://user-images.githubusercontent.com/14833656/55158046-a6e43b00-5166-11e9-939d-f77ee177d8fb.png)

To upload you need a zipping tool (for example 7zip, https://www.7-zip.org/)
-	How to zip 101: Select all files/folders > 7-Zip > Add to Archive.

This kind of window will open up:
-	Make sure the format is in .zip
-	Rename the file name to “Tutorial.wgt”
-	Press OK to compress the file.

![image](https://user-images.githubusercontent.com/14833656/55157974-769c9c80-5166-11e9-8d9a-d60e0ce7abdc.png)

Now you should see the .wgt file in your application folder which you can upload to Wirecloud. 

![image](https://user-images.githubusercontent.com/14833656/55157982-7ac8ba00-5166-11e9-88a8-f9d138f71aa2.png)

This tutorial presents how to upload: https://wirecloud.readthedocs.io/en/latest/user_guide/

After upload, the widget should be visible in “My resources” as shown below.

![image](https://user-images.githubusercontent.com/14833656/55157987-7dc3aa80-5166-11e9-9c43-1d604b5ca128.png)

Now you can add the widget into your workspace and the result should be as shown below. To confirm that the application is functioning, check browser console and widget log and make sure current date and time are logged in both places.


![image](https://user-images.githubusercontent.com/14833656/55157990-7f8d6e00-5166-11e9-9b1a-2278d225da89.png)



![image](https://user-images.githubusercontent.com/14833656/55157995-81efc800-5166-11e9-8faf-2f4aaa0a04ee.png)

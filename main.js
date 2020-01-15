var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    console.log(queryData.id);
    if(_url == '/'){
      title = 'welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    fs.readFile(`data/${queryData.id}`, 'utf8', function(err, discription){
      var template = `<!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
        <script src="colors.js">
        </script>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <input id="night_day" type="button" value="night" onclick="
          nightDayHandler(this);
        ">
        <div id="grid">
          <ol>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
          </ol>
          <div id="article">
            <h2>${title}</h2>
            <p>${discription}
            </p>
          </div>
        </div>
      </body>
      </html>
      `
      response.end(template);
    });

});
app.listen(3000);

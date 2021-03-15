<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link href="/webjars/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <script src="/webjars/sockjs-client/sockjs.min.js"></script>
    <script src="/webjars/stomp-websocket/stomp.min.js"></script>
    <link rel="stylesheet" href="css/index.css" />
    <script src="scripts/index.js"></script>
    <title>Home</title>
  </head>
  <body>
    <div class="container">
      <div>
        <button id="getresource" class="btn btn-primary" onclick="getResource()">Get Resource</button>
      </div>
      <div id="conversationDiv">
        <p id="output"></p>
      </div>
    </div>
  </body>
</html>

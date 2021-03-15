var stompClient = null;

async function getResource() {
  var xhr = new XMLHttpRequest();
  await connect();
  xhr.onreadystatechange = () => {
    var DONE = 4; // readyState 4 means the request is done.
    var OK = 200; // status 200 is a successful return.
    if (xhr.readyState === DONE) {
      if (xhr.status === OK) {
        var output = document.getElementById("output");
        var p = document.createElement("p");
        p.style.wordWrap = "break-word";
        p.appendChild(
          document.createTextNode(xhr.responseText)
          );
        output.appendChild(p);
      } else {
        console.log('Error: ' + xhr.status); // An error occurred during the request.
      }
      disconnect();
    }
  };

  xhr.open("GET", "http://localhost:8888/getresource");
  xhr.send();
}

function setConnected(connected) {
  document.getElementById("conversationDiv").style.visibility = connected
    ? "visible"
    : "hidden";
  document.getElementById("output").innerHTML = "";
}

function connect() {
  var socket = new SockJS("http://localhost:8888/updates");
  stompClient = Stomp.over(socket);
  stompClient.connect({}, function (frame) {
    setConnected(true);
    console.log("Connected: " + frame);
    stompClient.subscribe("/topic/updates", function(requestUpdate) {
      showMessageOutput(JSON.parse(requestUpdate.body));
    });
  });

}

function showMessageOutput(messageOutput) {
  var output = document.getElementById("output");
  var p = document.createElement("p");
  p.style.wordWrap = "break-word";
  if (Number(messageOutput.responseStatus) !== 200) {
    p.appendChild(
      document.createTextNode(
        "Error Retrieving! Response Code: " + messageOutput.responseStatus +
        "\tResponse Body: " + messageOutput.responseBody +
        "\tRetrying after " + messageOutput.waitTime + "ms"
      )
    );
  }
  output.appendChild(p);
}

function disconnect() {
  if (stompClient != null && stompClient.status === 'CONNECTED') {
    stompClient.disconnect();
  }
  console.log("Disconnected");
}

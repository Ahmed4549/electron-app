navigator.mediaDevices
  .getUserMedia({ video: true })
  .then(function (stream) {
    document.getElementById("camera").srcObject = stream;
    document.getElementById("cameraText").innerHTML = "Camera is open";
  })
  .catch(function () {
    document.getElementById("cameraText").innerHTML = "Camera is closed!";
  });



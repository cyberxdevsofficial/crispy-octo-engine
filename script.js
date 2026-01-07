const upload = document.getElementById("upload");
const result = document.getElementById("result");

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("/models")
]).then(() => {
  result.innerHTML = "<p>System Ready</p>";
});

upload.addEventListener("change", async () => {
  result.innerHTML = "<p>Scanning face...</p>";

  const img = await faceapi.bufferToImage(upload.files[0]);
  const face = await faceapi.detectSingleFace(
    img,
    new faceapi.TinyFaceDetectorOptions()
  );

  if (!face) {
    result.innerHTML = "<p>No face detected</p>";
    return;
  }

  const citizen = randomCitizen();

  result.innerHTML = `
    <h3>IDENTITY MATCHED (SIMULATED)</h3>
    <p><b>Name:</b> ${citizen.name}</p>
    <p><b>NIC:</b> ${citizen.nic}</p>
    <p><b>Phone:</b> ${citizen.phone}</p>
    <p><b>Location:</b> ${citizen.location}</p>
    <p style="color:red">⚠ DEMO DATA ONLY</p>
  `;
});

function logout() {
  localStorage.removeItem("demoSession");
  window.location.href = "login.html";
}

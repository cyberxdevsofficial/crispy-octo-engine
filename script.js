const upload = document.getElementById("upload");
const result = document.getElementById("result");
const preview = document.getElementById("preview");

// Load face-api model
Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("/models")
]).then(() => {
  result.innerHTML = "<p>System Ready</p>";
});

// When user uploads image
upload.addEventListener("change", async () => {
  const file = upload.files[0];
  if (!file) return;

  // Show image preview
  const reader = new FileReader();
  reader.onload = () => {
    preview.src = reader.result;
    preview.style.display = "block";
  };
  reader.readAsDataURL(file);

  result.innerHTML = "<p>Scanning face...</p>";

  // Convert image for face-api
  const img = await faceapi.bufferToImage(file);

  // Detect face
  const face = await faceapi.detectSingleFace(
    img,
    new faceapi.TinyFaceDetectorOptions()
  );

  if (!face) {
    result.innerHTML = "<p>❌ No face detected</p>";
    return;
  }

  // Pick simulated citizen
  const citizen = randomCitizen();

  // Show simulated result
  result.innerHTML = `
    <h3>IDENTITY MATCHED (SIMULATED)</h3>
    <p><b>Name:</b> ${citizen.name}</p>
    <p><b>NIC:</b> ${citizen.nic}</p>
    <p><b>Phone:</b> ${citizen.phone}</p>
    <p><b>Location:</b> ${citizen.location}</p>
    <p style="color:red">⚠ DATA ONLY</p>
  `;
});

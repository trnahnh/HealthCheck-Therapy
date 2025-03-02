document.getElementById('userProfileForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    console.log("Form submitted!"); // Debugging

    const name = document.getElementById('name')?.value || "N/A";
    const email = document.getElementById('email')?.value || "N/A";
    const height = document.getElementById('height')?.value || "N/A";
    const weight = document.getElementById('weight')?.value || "N/A";
    const bloodPressure = document.getElementById('bloodPressure')?.value || "N/A";
    const heartRate = document.getElementById('heartRate')?.value || "N/A";
    const systolic = document.getElementById('systolic')?.value || "N/A";
    const diastolic = document.getElementById('diastolic')?.value || "N/A";
    const skinTone = document.getElementById('skinTone')?.value || "N/A";
    const dateOfBirth = document.getElementById('dateOfBirth')?.value || "N/A";
    const gender = document.getElementById('gender')?.value || "N/A";
    const additionalInformation = document.getElementById('additionalInformation')?.value || "N/A";

    const userData = 
    `Name: ${name}\nEmail: ${email}\nHeight: ${height}\nWeight: ${weight}\nBlood Pressure: ${bloodPressure}\nHeart Rate: ${heartRate}\nSystolic: ${systolic}\nDiastolic: ${diastolic}\nSkin Tone: ${skinTone}\nDate Of Birth: ${dateOfBirth}\nGender: ${gender}\nAdditional Information: ${additionalInformation}`;

    const blob = new Blob([userData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    
    a.href = url;
    a.download = 'user_data.txt';
    document.body.appendChild(a);
    
    console.log("Attempting to download file..."); // Debugging
    setTimeout(() => {
        a.click();
        URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }, 0);
});
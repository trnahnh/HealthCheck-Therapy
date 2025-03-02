document.getElementById('userProfileForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const skinTone = document.getElementById('skinTone').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const gender = document.getElementById('gender').value;



    const userData = `Name: ${name}\nEmail: ${email}\nHeight: ${height}\nWeight: ${weight}\nSkin Tone: ${skinTone}\nDate Of Birth: ${dateOfBirth}\nGender: ${gender}`;
    const blob = new Blob([userData], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'user_data.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
});

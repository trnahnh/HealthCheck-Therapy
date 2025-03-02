document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const userData = `Name: ${name}\nEmail: ${email}\n`;
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

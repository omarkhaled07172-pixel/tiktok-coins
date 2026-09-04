// جلب الطلبات من Local Storage
let requests = JSON.parse(localStorage.getItem('tiktokRequests')) || [];

// التعامل مع إرسال النموذج
document.getElementById('requestForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (!username || !phone) {
        alert('❌ من فضلك املأ جميع البيانات.');
        return;
    }

    // حفظ الطلب
    requests.push({ username, phone, date: new Date().toLocaleString() });
    localStorage.setItem('tiktokRequests', JSON.stringify(requests));

    // عرض رسالة نجاح
    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('requestForm').reset();
});

// بيانات الباقات
const packages = [
    { coins: 1000, price: 550 },
    { coins: 2000, price: 1000 },
    { coins: 5000, price: 2300 },
    { coins: 10000, price: 4200 },
    { coins: 20000, price: 8000 },
];

// عرض الباقات
const container = document.getElementById('cards-container');

packages.forEach(pkg => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h3>💰 ${pkg.coins} كوينز</h3>
        <div class="price">${pkg.price} ج.م</div>
        <button class="btn" onclick="openForm(${pkg.coins}, ${pkg.price})">اشحن الآن</button>
    `;
    container.appendChild(card);
});

function openForm(coins, price) {
    document.getElementById('order-form').style.display = 'block';
    document.getElementById('coins').value = coins;
    document.getElementById('price').value = price + ' ج.م';
    window.scrollTo({ top: document.getElementById('order-form').offsetTop - 50, behavior: 'smooth' });
}

function closeForm() {
    document.getElementById('order-form').style.display = 'none';
}

// التعامل مع إرسال النموذج
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const phone = document.getElementById('phone').value;
    const coins = document.getElementById('coins').value;
    const price = document.getElementById('price').value;
    const payment = document.getElementById('payment').value;

    if (!username || !phone || !payment) {
        alert('❌ من فضلك املأ جميع البيانات المطلوبة.');
        return;
    }

    const message = `✅ طلب شحن جديد:%0A📌 اسم المستخدم: ${username}%0A📱 رقم الهاتف: ${phone}%0A💰 عدد العملات: ${coins}%0A💵 السعر: ${price}%0A💳 طريقة الدفع: ${payment}`;
    const whatsappUrl = `https://wa.me/201122391756?text=${message}`;

    window.open(whatsappUrl, '_blank');
    alert('✅ تم استلام طلبك! هنتواصل معاك خلال دقائق لتأكيد الشحن.');
    closeForm();
    document.getElementById('orderForm').reset();
});

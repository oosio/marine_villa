// scripts.js
function toggleDropdown() {
    var dropdownContent = document.querySelector(".dropdown-content");
    console.log(dropdownContent);
    dropdownContent.classList.toggle("show");
}

// メニュー外をクリックした場合にドロップダウンを閉じる
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function submitForm(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('すべてのフィールドを入力してください。');
    } else if (!validateEmail(email)) {
        alert('有効なメールアドレスを入力してください。');
    } else {
        alert('問い合わせが送信されました。');
        // 実際にはここでフォームをサーバーに送信する処理を行います。
        // 例: 
        // var formData = new FormData(document.getElementById('contactForm'));
        // fetch('サーバーのエンドポイント', {
        //     method: 'POST',
        //     body: formData
        // }).then(response => response.json()).then(data => {
        //     console.log(data);
        // }).catch(error => {
        //     console.error('Error:', error);
        // });
    }
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

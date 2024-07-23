document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // フォームのデフォルトの送信動作を防ぐ

    // Google FormsのURL
    const googleFormsUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeN263mQebOwkQu1e_9TafyIpA4iKTTDtNIbwXtyDe46PxAXg/formResponse';

    // フォームデータを取得
    const formData = new FormData(event.target);

    // URLSearchParamsを使用してフォームデータをエンコード
    const urlParams = new URLSearchParams();
    formData.forEach((value, key) => {
        urlParams.append(key, value);
    });


    // フォームデータをオブジェクトに変換
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    // データをコンソールに出力
    console.log(formObject);

    fetch(googleFormsUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: urlParams
          })
      .then(response => {
        if (response.ok || response.status === 0) { // no-corsの場合、statusが0になる
            document.getElementById('contactForm').style.display = 'none';
            document.getElementById('thankYouMessage').style.display = 'block';
        } else {
            alert('送信に失敗しました。もう一度お試しください。');
        }
       })
       .catch((error) => {
        console.error('Error:', error);
        alert('送信に失敗しました。もう一度お試しください。');
    });
});

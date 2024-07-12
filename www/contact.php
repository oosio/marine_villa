<!-- contact.php -->
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>お問い合わせ</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <?php include 'header.php'; ?>
    <div class="container">
        <main>
            <section id="contact">
                <h2>お問い合わせ</h2>
                <p>自治会に関する問い合わせ、入退会の申し込みは、随時受け付けております。</p>
                <p>下記フォームからお問い合わせ下さい。</p>
                <p></p>
                <form id="contactForm">
                    <label for="name">名前:</label>
                    <input type="text" id="name" name="name" required>

                    <label for="email">メール:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="message">メッセージ:</label>
                    <textarea id="message" name="message" required></textarea>

                    <button type="submit" onclick="submitForm()">送信</button>
                </form>
            </section>
        </main>
    </div>
    <?php include 'footer.php'; ?>
    <script src="scripts.js"></script>
</body>
</html>

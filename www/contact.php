<!-- contact.php -->
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>お問い合わせ</title>
    <link rel="stylesheet" href="/styles.css">
    <link rel="icon" href="/favicon.ico">
</head>
<body>
    <?php include $_SERVER['DOCUMENT_ROOT'] . '/header.php'; ?>
    <div class="container">
        <main>
            <section id="contact">
                <h2>お問い合わせ</h2>
                <form id="contactForm">
                    <p>自治会に関する問い合わせや入退会の申し込みは、下記フォームからお問い合わせ下さい。</p>
                    <label for="name">お名前:</label>
                    <input type="text" id="name" name="entry.1140815691" required>

                    <label for="email">メールアドレス:</label>
                    <input type="email" id="email" name="entry.1512661131" required>

                    <label for="message">お問い合わせ内容:</label>
                    <textarea id="message" name="entry.904543757" required></textarea>

                    <button type="submit">送信</button>
                </form>
                <div id="thankYouMessage" style="display:none;">
                    <p>お問い合わせありがとうございます。</p>
                    <p>折り返しメール致しますので、お待ちください。</p>
                </div>
            </section>
        </main>
    </div>
    <?php include $_SERVER['DOCUMENT_ROOT'] . '/footer.php'; ?>
    <script src="/scripts.js"></script>
    <script src="/contact.js"></script>
</body>
</html>

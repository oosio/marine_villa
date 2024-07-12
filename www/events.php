<!-- events.php -->
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>年間イベント予定</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <?php include 'header.php'; ?>
    <div class="container">
        <main>
            <section id="events">
                <h2>2024年度 イベント予定</h2>
                <table>
                    <tbody>
                        <tr>
                            <td class="date">2024.07.20</td>
                            <td class="title">自治会設立総会</td>
                        </tr>
                        <tr>
                            <td class="date">2024.10.19</td>
                            <td class="title">高洲地区ハロウィンイベント</td>
                        </tr>
                        <tr>
                            <td class="date">2024.11.02</td>
                            <td class="title">高洲フェスティバル</td>
                        </tr>
                        <tr>
                            <td class="date">2024.12.xx</td>
                            <td class="title">クリスマスイルミネーション点灯式</td>
                        </tr>
                        <tr>
                            <td class="date">2025.3.xx</td>
                            <td class="title">高洲地区小中学校交流会・学校見学</td>
                        </tr>
                        <!-- ここにさらにイベントを追加 -->
                    </tbody>
                </table>
                <h2>近隣イベント</h2>
                <table>
                    <tbody>
                        <tr>
                            <td class="date">2024.08.03</td>
                            <td class="title"><a href="https://akemisummerfes.jp/">明海の丘 夏祭り</a></td>
                        </tr>
                        <tr>
                            <td class="date">2024.10.19</td>
                            <td class="title"><a href="https://www.urayasuhanabi.com/2024/">浦安市花火大会</a></td>
                        </tr>
                        <tr>
                            <td class="date">2024.11.03<br>2024.11.04</td>
                            <td class="title">明海大学 学園祭</td>
                        </tr>
                        <!-- ここにさらにイベントを追加 -->
                    </tbody>
                </table>
            </section>
        </main>
    </div>
    <?php include 'footer.php'; ?>
    <script src="scripts.js"></script>
</body>
</html>

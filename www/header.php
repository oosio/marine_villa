<!-- header.php -->
<header>
    <h1><a href="/www/index.php">新浦安マリンヴィラ自治会</a></h1>
    <div class="gnavi pc-only">
        <?php include $_SERVER['DOCUMENT_ROOT'] . '/www/nav.php'; ?>
    </div>
    <div class="dropdown mobile-only">
        <a href="javascript:void(0)" class="dropbtn" onclick="toggleDropdown()">
            <img src="images\menu.png" class="dropbtn" alt="Button Image">
        </a>        
    </div>
</header>
<div class="dropdown-content mobile-only">
    <?php include $_SERVER['DOCUMENT_ROOT'] . '/www/nav.php'; ?>
</div>

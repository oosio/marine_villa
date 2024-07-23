// scripts.js
function toggleDropdown() {
    var dropdownContent = document.querySelector(".dropdown-content");
    console.log(dropdownContent);
    dropdownContent.classList.toggle("show");

    // 画像を差し替える
    const imgElement = document.getElementById('menubtn');
    if (dropdownContent.classList.contains('show')){
        imgElement.src = "/images/close.png";
    }else{
        imgElement.src = "/images/menu.png"; 
    }
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
        
        // 画像を差し替える
        const imgElement = document.getElementById('menubtn');
        imgElement.src = "/images/menu.png";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption");
    const galleryImages = document.querySelectorAll(".gallery img");

    // モーダル要素が存在するか確認
    if (modal && modalImage && modalCaption && galleryImages.length > 0) {
        galleryImages.forEach(img => {
            img.addEventListener("click", function() {
                modalImage.src = this.src;
                modalImage.alt = this.alt;
                modalCaption.textContent = this.alt;
                modal.style.display = "flex";
            });
        });
    
        modal.addEventListener("click", function() {
            modal.style.display = "none";
        });    
    }
});


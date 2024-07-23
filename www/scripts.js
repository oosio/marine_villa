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

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption");
    const galleryImages = document.querySelectorAll(".gallery img");

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
});


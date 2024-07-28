// モーダルを開く関数
function openModal(element) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-image");
    var highResSrc = element.getAttribute("data-highres");
    modal.style.display = "block";
    modalImg.src = highResSrc;
}

// モーダルを閉じる関数
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

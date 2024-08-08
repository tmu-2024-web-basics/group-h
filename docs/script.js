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

//マップの中のgoalフラッグ表示
function placeGoalFlag(top, left, target) {
    const imageUrl = '../images/goalpin.png'; 

    const img = document.createElement('img');
    img.src = imageUrl;
    img.className = 'goal-flag';
    img.style.top = `${top}vw`;
    img.style.left = `${left}vw`;

        // 画像をクリックしたときに動作するイベントリスナーを追加
        img.addEventListener('click', function() {
            document.getElementById(target).scrollIntoView({ behavior: "smooth" });
        });
    
    document.body.appendChild(img);
}


//マップ内のピン表示
function createPin(top,left,target) {
    const imageUrl = '../images/pin.png'; 
    const img = document.createElement('img');
    img.src = imageUrl;
    img.className = 'pin';
    img.style.left = `${left}vw`;
    img.style.top = `${top}vw`;

    // 画像をクリックしたときに動作するイベントリスナーを追加
    img.addEventListener('click', function() {
        document.getElementById(target).scrollIntoView({ behavior: "smooth" });
    });

    document.body.appendChild(img);
}

//矢印をクリックした時の動作
document.getElementById("allow").addEventListener("click", function() {
    document.getElementById("time01").scrollIntoView({ behavior: "smooth" });
});
//
window.onload = function() {
    var img = document.getElementById('myImage');
    
    // ウィンドウの幅と高さを取得
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    
    // ランダムな位置を計算
    var randomX = Math.random() * (windowWidth - img.width);
    var randomY = Math.random() * (windowHeight - img.height);
    
    // 画像の位置を設定
    img.style.left = randomX + 'px';
    img.style.top = randomY + 'px';
}
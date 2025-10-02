// 移除 jQuery 依賴，使用原生 JavaScript
const loadingBar = document.getElementById("loadingBar");
const percentText = document.getElementById("percent");
const pageLoading = document.getElementById("pageLoading");
const mainText = document.getElementById("mainText");

let percent = 0;
const duration = 3000; // 3秒載入時間
const interval = 30; // 更新間隔
const increment = 100 / (duration / interval);

const timer = setInterval(() => {
  percent += increment;

  if (percent >= 100) {
    percent = 100;
    clearInterval(timer);

    // 載入完成後的動畫
    setTimeout(() => {
      loadingBar.style.width = "100%";
      percentText.textContent = "100";
      pageLoading.classList.add("complete");

      // 改變主文字
      setTimeout(() => {
        mainText.innerHTML = "We are<br>SQUARE<br>MONSTER!";
      }, 500);
    }, 100);
  } else {
    loadingBar.style.width = percent + "%";
    percentText.textContent = Math.floor(percent);
  }
}, interval);

// 為怪獸添加點擊互動
document.querySelectorAll(".monster").forEach((monster) => {
  monster.addEventListener("click", function () {
    this.style.transform = "scale(1.2) rotate(360deg)";
    setTimeout(() => {
      this.style.transform = "";
    }, 500);
  });
});

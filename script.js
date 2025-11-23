// HTML이 다 로드된 다음에 실행
document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // 1. 네잎클로버 클릭 시 회전
  // =========================
  const clover = document.querySelector(".clover"); // 네잎클로버 요소

  if (clover) {
    clover.addEventListener("click", () => {
      // 이미 돌고 있으면 다시 추가 안 함
      if (!clover.classList.contains("spin")) {
        clover.classList.add("spin");

        // 애니메이션 끝난 뒤 클래스 제거해서 다시 돌 수 있게
        setTimeout(() => {
          clover.classList.remove("spin");
        }, 600); // CSS 애니메이션 시간과 맞추기
      }
    });
  }

  // =========================
  // 3. 행운 소나기(클로버/하트 비 내리기)
  // =========================
  const rainButton = document.querySelector(".luck-rain-btn");

  if (rainButton) {
    rainButton.addEventListener("click", () => {
      createLuckRain();
    });
  }

  function createLuckRain() {
    const emojis = ["☘️", "🍀", "💚", "💖"]; // 떨어질 이모지들
    const count = 25; // 한 번에 떨어질 개수

    for (let i = 0; i < count; i++) {
      const item = document.createElement("span");
      item.classList.add("falling-item");
      item.textContent = emojis[Math.floor(Math.random() * emojis.length)];

      // 랜덤 위치 & 속도
      item.style.left = Math.random() * 100 + "vw";
      item.style.animationDuration = 3 + Math.random() * 2 + "s";
      item.style.fontSize = 16 + Math.random() * 16 + "px";

      document.body.appendChild(item);

      // 애니메이션 끝나면 제거
      item.addEventListener("animationend", () => {
        item.remove();
      });
    }
  }

  // =========================
  // 4. 마우스 따라오는 반짝이 효과
  // =========================
  document.addEventListener("mousemove", (event) => {
    createSparkle(event.clientX, event.clientY);
  });

  function createSparkle(x, y) {
    const sparkle = document.createElement("span");
    sparkle.classList.add("sparkle");

    sparkle.style.left = x + "px";
    sparkle.style.top = y + "px";

    document.body.appendChild(sparkle);

    // 애니메이션 끝나면 제거
    setTimeout(() => {
      sparkle.remove();
    }, 600);
  }
});

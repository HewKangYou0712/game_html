let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;

const noTexts = [
  "用瞬移保护你?",
  "给你打蓝?",
  "保你安全?",
  "只奶你一个人?",
  "求求你嘛！",
  "Please! 嘉纹!",
];

noButton.addEventListener("click", function () {
  clickCount++;

  let yesSize = 1 + clickCount * 1.2;
  yesButton.style.transform = `scale(${yesSize})`;

  let noOffset = clickCount * 50;
  noButton.style.transform = `translateX(${noOffset}px)`;

  let moveUp = clickCount * 25;
  mainImage.style.transform = `translateY(-${moveUp}px)`;
  questionText.style.transform = `translateY(-${moveUp}px)`;

  if (clickCount <= 6) {
    noButton.innerText = noTexts[clickCount - 1];
  }

  if (clickCount === 1) mainImage.src = "image/gaiqiang.jpg";
  if (clickCount === 2) mainImage.src = "image/jett.png";
  if (clickCount === 3) mainImage.src = "image/cypher.png";
  if (clickCount === 4) mainImage.src = "image/omen.png";
  if (clickCount === 5) mainImage.src = "image/sage.png";
  if (clickCount >= 6) mainImage.src = "image/angry.png";
});

yesButton.addEventListener("click", function () {
  document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">Oh yes, 谢谢嘉纹！</h1>
            <img src="image/kjraze.png" alt="拥抱" class="yes-image">
        </div>
    `;

  document.body.style.overflow = "hidden";
});

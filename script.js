const words = [
  { english: "create", japanese: "創り出す" },
  { english: "increase", japanese: "増加する" },
  { english: "improve", japanese: "向上させる" },
  { english: "mean", japanese: "意味する" },
  { english: "own", japanese: "所有している" },
  { english: "include", japanese: "含む" },
  { english: "consider", japanese: "見なす" },
  { english: "allow", japanese: "許す" },
  { english: "suggest", japanese: "提案する" },
  { english: "produce", japanese: "生産する" },
  { english: "decide", japanese: "決める" },
  { english: "offer", japanese: "提供する" },
  { english: "require", japanese: "要求する" },
  { english: "share", japanese: "共有する" },
  { english: "store", japanese: "保存する" },
  { english: "tend", japanese: "傾向がある" },
  { english: "concern", japanese: "心配している" },
  { english: "describe", japanese: "述べる、説明する" },
  { english: "involve", japanese: "関与させる" },
  { english: "reduce", japanese: "減らす" }
];

let currentIndex = 0;
let score = 0;
let wrongCount = 0;
let answered = false;

let wrongWords = [];
let questionOrder = [];

// 答えを見る
document.getElementById("answerButton").onclick = function() {
  let wordIndex;

  if (questionOrder.length > 0) {
    wordIndex = questionOrder[currentIndex];
  } else {
    wordIndex = currentIndex;
  }

  document.getElementById("answer").textContent =
    words[wordIndex].japanese;
};

// 次の単語
document.getElementById("nextButton").onclick = function() {
  currentIndex = currentIndex + 1;

  let questionCount;

  if (questionOrder.length > 0) {
    questionCount = questionOrder.length;
  } else {
    questionCount = words.length;
  }

  if (currentIndex >= questionCount) {
    document.getElementById("word").textContent = "終了！";
    document.getElementById("answer").textContent = "";
    return;
  }

  answered = false;

  let wordIndex;

  if (questionOrder.length > 0) {
    wordIndex = questionOrder[currentIndex];
  } else {
    wordIndex = currentIndex;
  }

  document.getElementById("word").textContent =
    words[wordIndex].english;

  document.getElementById("answer").textContent = "";
};

// 正解
document.getElementById("correctButton").onclick = function() {
  if (answered === false) {
    score = score + 1;
    answered = true;

    document.getElementById("score").textContent =
      "正解数：" + score;

    let total = score + wrongCount;
    let accuracy = (score / total) * 100;

    document.getElementById("accuracy").textContent =
      "正解率：" + accuracy.toFixed(1) + "%";

    document.getElementById("nextButton").click();
  }
};

// 不正解
document.getElementById("wrongButton").onclick = function() {
  if (answered === false) {
    wrongCount = wrongCount + 1;
    answered = true;

    let wordIndex;

    if (questionOrder.length > 0) {
      wordIndex = questionOrder[currentIndex];
    } else {
      wordIndex = currentIndex;
    }

    wrongWords.push(wordIndex);

    document.getElementById("wrongCount").textContent =
      "不正解数：" + wrongCount;

    let total = score + wrongCount;
    let accuracy = (score / total) * 100;

    document.getElementById("accuracy").textContent =
      "正解率：" + accuracy.toFixed(1) + "%";

    document.getElementById("nextButton").click();
  }
};

// もう一度やる
document.getElementById("restartButton").onclick = function() {
  currentIndex = 0;
  score = 0;
  wrongCount = 0;
  answered = false;
  questionOrder = [];

  document.getElementById("word").textContent =
    words[currentIndex].english;

  document.getElementById("answer").textContent = "";

  document.getElementById("score").textContent =
    "正解数：0";

  document.getElementById("wrongCount").textContent =
    "不正解数：0";

  document.getElementById("accuracy").textContent =
    "正解率：0%";
};

// ランダム
document.getElementById("randomButton").onclick = function() {
  questionOrder = [];

  for (let i = 0; i < words.length; i++) {
    questionOrder.push(i);
  }

  questionOrder.sort(() => Math.random() - 0.5);

  currentIndex = 0;
  score = 0;
  wrongCount = 0;
  answered = false;

  document.getElementById("word").textContent =
    words[questionOrder[currentIndex]].english;

  document.getElementById("answer").textContent = "";

  document.getElementById("score").textContent =
    "正解数：0";

  document.getElementById("wrongCount").textContent =
    "不正解数：0";

  document.getElementById("accuracy").textContent =
    "正解率：0%";
};

// 順番通り
document.getElementById("normalButton").onclick = function() {
  questionOrder = [];

  currentIndex = 0;
  score = 0;
  wrongCount = 0;
  answered = false;

  document.getElementById("word").textContent =
    words[currentIndex].english;

  document.getElementById("answer").textContent = "";

  document.getElementById("score").textContent =
    "正解数：0";

  document.getElementById("wrongCount").textContent =
    "不正解数：0";

  document.getElementById("accuracy").textContent =
    "正解率：0%";
};

// ランダム10問
document.getElementById("random10Button").onclick = function() {
  questionOrder = [];

  for (let i = 0; i < words.length; i++) {
    questionOrder.push(i);
  }

  questionOrder.sort(() => Math.random() - 0.5);

  questionOrder = questionOrder.slice(0, 10);

  currentIndex = 0;
  score = 0;
  wrongCount = 0;
  answered = false;

  document.getElementById("word").textContent =
    words[questionOrder[currentIndex]].english;

  document.getElementById("answer").textContent = "";

  document.getElementById("score").textContent =
    "正解数：0";

  document.getElementById("wrongCount").textContent =
    "不正解数：0";

  document.getElementById("accuracy").textContent =
    "正解率：0%";
};

// 間違えた単語を復習
document.getElementById("reviewButton").onclick = function() {
  if (wrongWords.length === 0) {
    document.getElementById("word").textContent =
      "間違えた単語はありません！";
    document.getElementById("answer").textContent = "";
    return;
  }

  questionOrder = [...wrongWords];

  currentIndex = 0;
  score = 0;
  wrongCount = 0;
  answered = false;

  document.getElementById("word").textContent =
    words[questionOrder[currentIndex]].english;

  document.getElementById("answer").textContent = "";

  document.getElementById("score").textContent =
    "正解数：0";

  document.getElementById("wrongCount").textContent =
    "不正解数：0";

  document.getElementById("accuracy").textContent =
    "正解率：0%";
};

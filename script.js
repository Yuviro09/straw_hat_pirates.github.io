function calculateResult() {
  const q1 = document.getElementById("q1").value;
  const q2 = document.getElementById("q2").value;
  const q3 = document.getElementById("q3").value;

  const answers = [q1, q2, q3];
  const counts = {};

  answers.forEach(ans => {
    counts[ans] = (counts[ans] || 0) + 1;
  });

  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const top = sorted[0][0];

  let resultText = "";
  switch (top) {
    case "luffy":
      resultText = "You're like Luffy! Brave, adventurous, and full of dreams.";
      break;
    case "zoro":
      resultText = "You're like Zoro! Loyal, powerful, and always training.";
      break;
    case "nami":
      resultText = "You're like Nami! Smart, strategic, and driven by goals.";
      break;
    case "sanji":
      resultText = "You're like Sanji! Kind-hearted and classy with a love for cooking.";
      break;
    case "robin":
      resultText = "You're like Robin! Calm, mysterious, and full of wisdom.";
      break;
    default:
      resultText = "You're a unique pirate! Maybe a new crew member?";
  }

  document.getElementById("quiz-result").textContent = resultText;
}
function calculateResult() {
  const q1 = document.getElementById("q1").value;
  const q2 = document.getElementById("q2").value;
  const q3 = document.getElementById("q3").value;

  const answers = [q1, q2, q3];
  const counts = {};

  answers.forEach(ans => {
    counts[ans] = (counts[ans] || 0) + 1;
  });

  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const top = sorted[0][0];

  let resultText = "";
  switch (top) {
    case "luffy":
      resultText = "You're like Luffy! Brave, adventurous, and full of dreams.";
      break;
    case "zoro":
      resultText = "You're like Zoro! Loyal, powerful, and always training.";
      break;
    case "nami":
      resultText = "You're like Nami! Smart, strategic, and driven by goals.";
      break;
    case "sanji":
      resultText = "You're like Sanji! Kind-hearted and classy with a love for cooking.";
      break;
    case "robin":
      resultText = "You're like Robin! Calm, mysterious, and full of wisdom.";
      break;
    default:
      resultText = "You're a unique pirate! Maybe a new crew member?";
  }

  document.getElementById("quiz-result").textContent = resultText;
}

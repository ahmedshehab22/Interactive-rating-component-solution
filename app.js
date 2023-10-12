let chosen = -1;

function changeTheNStars(nStars) {
  const resultSpan = document.getElementById("nstars");
  resultSpan.innerHTML = nStars;
}

function toogle(nStars) {
  const submitCard = document.getElementById("submit-card");
  submitCard.style.display = "none";
  const thanksCard = document.getElementById("thanks-card");
  thanksCard.style.display = "flex";
  changeTheNStars(nStars);
}

const ratingList = document.querySelectorAll(
  ".submit-card .rating-container span"
);
console.log(ratingList);

for (let i = 0; i < ratingList.length; i++) {
  console.log(ratingList[i]);
  ratingList[i].addEventListener("click", () => {
    for (let j = 0; j < ratingList.length; j++) {
      ratingList[j].classList.remove("focused");
      chosen = -1;
    }
    ratingList[i].classList.add("focused");
    chosen = i + 1;
  });
}

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", () => {
  if (chosen === -1) {
    alert("Please choose your rating!");
  } else {
    toogle(chosen);
  }
});

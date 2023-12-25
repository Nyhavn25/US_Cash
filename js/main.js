let spinsLeft = 2;
let spinsTimeSecond = 3;
let isSpin = false;
let spinLength = {
  2: 88,
  1: 180,
};

function closeModal() {
  if (spinsLeft > 0) {
    let modals = document.getElementsByClassName("modal");
    Array.from(modals).forEach((m) => m.classList.remove("visible"));
    document.getElementById("sweet-overlay").style.display = "none";
  }
}

function spinWheel() {
  closeModal();
  if (spinsLeft > 0 && !isSpin) {
    isSpin = true;
    const spin = document.getElementById("spin");
    spin.style.transition = `transform ${spinsTimeSecond}s cubic-bezier(0.305, 0.010, 0.310, 0.980)`;

    spin.style.transform = `rotate(${spinLength[spinsLeft] * 17}deg)`;

    spin.addEventListener("transitionend", () => {
      spinsLeft--;
      isSpin = false;
      showModal(spinsLeft);
    });
  }
}

function showModal(spinsLeft) {
  const modal02 = document.getElementById("modal02");
  const modal03 = document.getElementById("modal03");

  document.getElementById("sweet-overlay").style.display = "block";
  if (spinsLeft === 1) {
    modal02.classList.add("visible");
  } else {
    modal03.classList.add("visible");
  }
}

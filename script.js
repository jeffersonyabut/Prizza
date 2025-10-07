const hover_Seffect = new Audio("/Prizza/public/Effects/tick.mp3");
const click_Seffect = new Audio("/Prizza/public/Effects/click.mp3");

function playHoverSound() {
  const viewportWidth = window.innerWidth;
  if (viewportWidth < 834) {
    hover_Seffect.muted = true;
    hover_Seffect.muted = true;
    hover_Seffect.volume = 0;
    click_Seffect.volume = 0;

    document.getElementById("mute-unmute").style.display = "none";
    document.getElementById("unmute").style.display = "none";
  }
}

playHoverSound();

document.querySelectorAll(".card").forEach((el) => {
  const title = el.getAttribute("data-title");
  const tech = el.getAttribute("data-tech");

  el.classList.add("box");

  el.innerHTML = `
        <div class="title-bar" style="height: 26px; border: 0">
          <h4>${title}</h4>
          <img src="/Prizza/public/link.svg" alt="" />
        </div>
        <div
          class="thumbnail"
          style="width: 314px; height: 148px; align-items: end"
        >
        ${tech}
        </div>
  `;

  el.addEventListener("mouseenter", () => {
    click_Seffect.play();
  });

  el.addEventListener("click", () => {
    hover_Seffect.play();
    openLink(title);
  });
});

const dl_btn = document.querySelector(".dl_button");

dl_btn.addEventListener("click", () => {
  hover_Seffect.play();
});

dl_btn.addEventListener("mouseenter", () => {
  click_Seffect.play();
});

document.querySelectorAll(".nav-btn").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    click_Seffect.play();
  });

  el.addEventListener("click", () => {
    hover_Seffect.play();
  });
});

function openLink(title) {
  if (title === "Portfolio") {
    window.open("https://jeffersonyabut.github.io/Prizza/", "_blank");
  }
  if (title === "Filmstack") {
    window.open("https://jeffersonyabut.github.io/Filmstack/", "_blank");
  }
  if (title === "Prizzabooth") {
    alert("Project is On Development");
  }
  if (title === "AI Agent") {
    window.open(
      "https://www.facebook.com/profile.php?id=61581264338267",
      "_blank"
    );
  }
}

function scrollProject() {
  document
    .getElementById("project-container")
    .scrollIntoView({ behavior: "smooth" });
}

function downloadCV(filePath) {
  const link = document.createElement("a");
  link.href = filePath;
  link.download = "jefferson_cv.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function unmute(value) {
  if (value) {
    document.getElementById("mute-unmute").style.display = "none";
    document.getElementById("unmute").style.display = "flex";

    hover_Seffect.volume = 1;
    click_Seffect.volume = 1;
    click_Seffect.play();
  }

  if (!value) {
    document.getElementById("unmute").style.display = "none";
    document.getElementById("mute-unmute").style.display = "flex";
    hover_Seffect.volume = 0;
    click_Seffect.volume = 0;
  }
}

document.getElementById("fBook").addEventListener("click", () => {
  hover_Seffect.play();
  window.open("https://www.facebook.com/jefferson.yabut.52", "_blank");
});

document.getElementById("ghProfile").addEventListener("click", () => {
  hover_Seffect.play();
  window.open("https://github.com/jeffersonyabut", "_blank");
});

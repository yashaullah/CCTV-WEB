document.getElementById("year").textContent = new Date().getFullYear();
document
  .querySelectorAll("#navlinks a")
  .forEach((a) =>
    a.addEventListener("click", () =>
      document.getElementById("navlinks").classList.remove("open"),
    ),
  );

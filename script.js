const targetDate = new Date("2025-10-21T09:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
    document.getElementById("countdown").style.display = "none";
    const mission = document.getElementById("mission");
    mission.classList.remove("hidden");
    mission.classList.add("show");
    clearInterval(timer);
    return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();

// Botão do SharePoint
document.getElementById("sharepointBtn")?.addEventListener("click", () => {
    window.open("https://sharepoint.com/completar-quando-fizer", "_blank");
});

// Botão de copiar link
document.getElementById("copyLinkBtn")?.addEventListener("click", () => {
    const link = "https://sharepoint.com/copletar quando fizer";
    navigator.clipboard.writeText(link).then(() => {
    alert("Link copiado para a área de transferência!");
    });
});

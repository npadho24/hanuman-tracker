function calculateProgress() {
  let tasks = document.querySelectorAll(".task");
  let completed = 0;

  tasks.forEach(task => {
    if(task.checked) completed++;
  });

  let percent = Math.round((completed / tasks.length) * 100);
  document.getElementById("progressText").innerText =
    "Progress: " + percent + "%";

  localStorage.setItem("progress", percent);
}

function setReminder() {
  setTimeout(function() {
    alert("🙏 साधना का समय हो गया है!");
  }, 60000); // 1 minute
}

// PWA Service Worker Register
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

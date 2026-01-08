let screenTime = 0;
let timer;

function calculateVisualIntensity() {
    const sceneSpeed = document.getElementById("sceneSpeed").value;
    const colorIntensity = document.getElementById("colorIntensity").value;
  
    let score = 0;
  
    if (sceneSpeed === "fast") score += 2;
    if (colorIntensity === "high") score += 2;
  
    return score;
  }
  
function startWatching() {
  timer = setInterval(() => {
    screenTime++;

    // Update screen time text
    document.getElementById("time").innerText =
      "Screen Time: " + screenTime + " minutes";

    // Decide overstimulation level
    // Calculate visual intensity
const visualIntensity = calculateVisualIntensity();

// Decide overstimulation level
let levelText = "Low";

if (screenTime + visualIntensity > 12) {
  levelText = "High";
} else if (screenTime + visualIntensity > 6) {
  levelText = "Medium";
}


    document.getElementById("level").innerText =
      "Overstimulation Level: " + levelText;
// Save data for parent dashboard
localStorage.setItem("screenTime", screenTime);
localStorage.setItem("overstimulationLevel", levelText);

  }, 1000); // 1 second = 1 minute (simulation)
}

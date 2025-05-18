document.getElementById("moodInput").addEventListener("change", function () {
  const mood = this.value.toLowerCase();
  const suggestions = {
    happy: ["Keep smiling!", "Share your joy with the team!", "Keep the energy up!"],
    stressed: ["Take a deep breath", "Try to stay focused", "Ask for help if you need it"],
    sad: ["Talk to someone", "Take a short break", "Remember good moments"],
    angry: ["Walk it off", "Drink some water", "Cool down before reacting"]
  };

  const suggestionList = suggestions[mood] || ["Stay strong!", "You're doing great!", "Keep going!"];
  const ul = document.getElementById("suggestionsList");
  ul.innerHTML = "";
  suggestionList.forEach(s => {
    const li = document.createElement("li");
    li.textContent = s;
    ul.appendChild(li);
  });

  // Dynamically update image
  const img = document.querySelector(".right-panel img");
  const moodImages = ["happy", "stressed", "sad", "angry"];
  if (moodImages.includes(mood)) {
    img.src = `${mood}.png`;
  } else {
    img.src = "image1.png"; // fallback image
  }
});

// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  this.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

const moodInput = document.getElementById('moodInput');
const spotifyPlayer = document.getElementById('spotifyPlayer');
const songTitle = document.getElementById('songTitle');

// Add moods and playlist IDs
const moodPlaylists = {
  stressed: "5jiVAt7yCJIWhGlZyGze3D",    // Your friend's playlist
  sad: "2d8UxVNhJinc8uat9PoM9y",
  angry: "6RRNNciQGZEXnqk8SQ9yv5",
  happy: "37i9dQZF1Epzi47d4IU6qi"
};

moodInput.addEventListener("change", () => {
  const mood = moodInput.value.toLowerCase().trim();
  const playlistId = moodPlaylists[mood];

  if (playlistId) {
    spotifyPlayer.src = `https://open.spotify.com/embed/playlist/${playlistId}`;
    songTitle.innerText = `Now Playing: ${mood.charAt(0).toUpperCase() + mood.slice(1)} Playlist`;
  } else {
    spotifyPlayer.src = "";
    songTitle.innerText = "Playlist not available for this mood.";
  }
});


// Set default playlist on initial page load
window.addEventListener("DOMContentLoaded", () => {
  const defaultMood = "stressed"; // change to your desired default mood
  const playlistId = moodPlaylists[defaultMood];

  spotifyPlayer.src = `https://open.spotify.com/embed/playlist/${playlistId}`;
  songTitle.innerText = `Now Playing: ${defaultMood.charAt(0).toUpperCase() + defaultMood.slice(1)} Playlist`;
});
 

Kitchen Mood Tracker


Hi! This is a fun and helpful web app I built called Kitchen Mood Tracker. It's designed for chefs or kitchen staff to track their mood and get suggestions and music that can help improve their state of mind while working.

What it does
🔸Lets you type how you're feeling (like stressed, happy, sad, or angry)

🔸Gives mood-based suggestions to help you feel better

🔸Changes the image of a chef based on your mood

🔸Automatically plays a music playlist that matches your mood using Spotify

🔸Includes a dark mode switch for a more comfortable look

Tech Stack Used

🔸HTML, CSS & JavaScript – For the frontend UI and dynamic behavior.

🔸Spotify API (iframe embeds) – For playing playlists based on the user's mood.

🔸Mood Matching Logic (JS) – For mapping moods to images, suggestions, and music.

🔸Dark Mode – A toggle for better accessibility and comfort.

How to use it

🔸Step 1: Get the files
  Make sure you have these 3 files in the same folder:

 –  index.html

 –  style.css

 –  script.js

  Also, you need the following images saved in the same folder:

 –  happy.png

 –  sad.png

 –  stressed.png

 –  angry.png

 –  image1.png (this is the fallback/default image)

🔸Step 2: Open the project
  
  Just open the index.html file in any web browser (like Chrome or Firefox)

🔸Step 3: Try it out

 ● In the input box, type how you're feeling (example: stressed)

 ● You will see new suggestions below

 ● The background image changes depending on your mood

 ● A Spotify playlist will automatically play for that mood

 ● You can also switch between light and dark mode by clicking the button at the top right corner.

🔸Notes
  
  ● This project needs an internet connection to load the Spotify playlist.

  ● If the mood you typed doesn't match one of the preset moods, a default image and message will be shown.

  ● I used my friend's Spotify playlist as the default when the page loads.

🔸Mood Playlists used
  
 –  Stressed: My friend's chill playlist

 –  Sad: Calm & soothing playlist

 –  Angry: Relaxing & focus playlist

 –  Happy: Energetic playlist

🔸Future Advancements (Planned)
 
  I’m actively working on expanding this project into a more intelligent assistant. Here’s what I plan to include next:

 ● FastAPI Backend

  To handle mood processing, log mood data for analytics, and provide an API for mood detection and suggestions.

 ● DeepAI Mood Suggestion API

  I’ll use the DeepAI API or a similar model to generate more personalized and AI-based suggestions depending on the detected mood.

 ●  Spotify API (Advanced)

  Instead of embedded playlists, I’ll use Spotify’s Web API with authentication to dynamically fetch and play curated or personalized playlists based on user mood.

 ●  Voice-Based Mood Detection

  Integrating voice input to detect tone and emotions for hands-free usage in kitchens.

🔸Mobile Friendly

  The entire layout adjusts fluidly for phones and tablets. Whether you're a head chef using a tablet in the kitchen or checking from your phone — it works cleanly everywhere.


🙏 Credits
   
  ● Built and designed by me as a creative real-world project titled:

  ● "Kitchen Mood Tracker: Sentiment Analysis for Chefs"

This project was inspired by a close friend who works in a high-stress kitchen environment. I built it with them in mind — to help bring a little positivity and peace during their busy days.

Music is embedded using Spotify’s public embed player. All images are custom-created or sourced royalty-free.

If you liked this, feel free to fork it or use it in your own portfolio...!

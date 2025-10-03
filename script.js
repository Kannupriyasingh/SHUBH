// Data for each mood
const data = {
  cheer: {
    messages: [
      "Cheer up bestie, you’re amazing 🌈",
      "Your smile is my sunshine ☀️",
      "No sad faces allowed today 😘"
    ],
    photos: ["images/smile1.jpeg", "images/smile2.jpeg", "images/smile3.jpeg"],
    audios: ["audio/cheer1.mp3", "audio/cheer2.mp3"]
  },
  // motivate: {
  //   messages: [
  //     "You can do anything you put your mind to 💪",
  //     "Keep going, I believe in you 🌟",
  //     "Stronger than yesterday ✨"
  //   ],
  //   photos: ["images/motivate1.jpg", "images/motivate2.jpg"],
  //   audios: ["audio/motivate1.mp3"]
  // },
  miss: {
    messages: [
      "I miss you so much 🥺",
      "Thinking of you always 💕",
      "You’re always in my heart ❤️"
    ],
    photos: ["images/miss1.jpeg", "images/miss2.jpeg", "images/miss3.jpeg", "images/miss4.png"],
    audios: ["audio/miss1.mp3", "audio/miss2.mp3"]
  },
  funny: {
    messages: [
      "You’re the peanut butter to my jelly 🥪😂",
      "Bestie + Me = 200% chaos 🤪",
      "Laughter is free, but you’re priceless 😆"
    ],
    photos: ["images/laugh1.jpeg", "images/laugh2.jpeg", "images/laugh3.jpeg"],
    audios: ["audio/funny1.mp3"]
  }
};

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function showRandom(mood) {
  const moodData = data[mood];

  // Pick random
  const message = getRandomItem(moodData.messages);
  const photo = getRandomItem(moodData.photos);
  const audio = getRandomItem(moodData.audios);

  // Display
  document.getElementById("message").textContent = message;

  const img = document.getElementById("photo");
  img.src = photo;
  img.style.display = "block";

  const audioPlayer = document.getElementById("audio");
  audioPlayer.src = audio;
  audioPlayer.style.display = "block";
  audioPlayer.play();
}

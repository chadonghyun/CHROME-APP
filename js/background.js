const images = [
  "beautiful-scenery-greenfield-cloudy-sky.jpg",
  "beautiful-shot-tung-ping-chau-hong-kong-yellow-dark-blue-sky.jpg",
  "fuji-mountain-kawaguchiko-lake-sunset-autumn-seasons-fuji-mountain-yamanachi-japan.jpg",
  "narrow-muddy-road-dark-forest.jpg",
  "pathway-middle-green-leafed-trees-with-sun-shining-through-branches.jpg",
  "przewalskis-horse-portrait-magical-soft-light-during-winter-time-mongolia.jpg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`

document.body.appendChild(bgImage);
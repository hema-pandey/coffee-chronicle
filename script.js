document.addEventListener("scroll", function () {
    document.querySelectorAll('.step').forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            setTimeout(() => {
                element.classList.add("show");
            }, index * 100); 
        }
    });
});


// MENU IMAGE AND SCROLLING
document.addEventListener("scroll", function () {
    document.querySelectorAll(".menu-item").forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            setTimeout(() => {
                item.classList.add("show");
            }, index * 200); 
        }
    });
});
function showPopup(imgSrc, title, description, price) {
    document.getElementById("popup-img").src = imgSrc;
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-description").innerText = description;
    document.getElementById("popup-price").innerText = price;
    
    // Make the popup visible
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup").classList.add("show");
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup").classList.remove("show");
}


// BACKGROUND MUSIC
document.addEventListener("DOMContentLoaded", function() {
    let music = document.querySelector("audio");
    if (music) {
        setTimeout(() => { 
            music.play().catch(() => console.log("Autoplay blocked, requires user interaction.")); 
        }, 500); // ✅ Adds a slight delay so the browser can load the audio
    }
});
document.body.addEventListener("click", function() {
    let music = document.querySelector("audio");
    if (music) {
        music.play();
    }
}, { once: true }); 

// Briew and Review
function toggleReviews() {
    let extraReviews = document.getElementById("extra-reviews");
    let button = document.getElementById("explore-btn");

    if (extraReviews.style.display === "none") {
        extraReviews.style.display = "flex"; // Show additional 4 reviews
        button.textContent = "Explore Less"; // Change button text
    } else {
        extraReviews.style.display = "none"; // Hide extra reviews
        button.textContent = "Explore More Reviews"; // Reset button text
    }
}


// NEED FOR SUGGESTION AI

document.getElementById("btn").addEventListener("click", function() {
  document.getElementById("popup-modal").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function() {
  document.getElementById("popup-modal").style.display = "none";
});

document.getElementById("get-coffee").addEventListener("click", function() {
  let mood = document.getElementById("mood").value;
  let time = document.getElementById("time").value;
  let coffeeResult = document.getElementById("coffee-result");

  coffeeResult.innerHTML = ""; // Clears old result first

  let coffeeSuggestions = {
    morning: {
      energetic: "🔥 **Double Shot Espresso** – Start your day with an energy blast!",
      relaxed: "🌸 **Vanilla Honey Latte** – A smooth, calming start to the morning.",
      focused: "🎯 **Classic Americano** – Bold and clear to boost concentration.",
      sleepy: "☀️ **Caramel Cappuccino** – Wake up gently with a creamy delight!"
    },
    evening: {
      energetic: "⚡ **Iced Mocha** – Chilled energy boost for fun-filled evenings!",
      relaxed: "🍃 **Chamomile Lavender Latte** – Perfect for a peaceful night.",
      focused: "🧐 **Cold Brew Coffee** – Smooth caffeine fix for focused evenings.",
      sleepy: "🌙 **Dark Chocolate Affogato** – Indulgent & dreamy, best before bed!"
    }
  };

            // **Now result appears INSIDE the same box!**
  coffeeResult.innerHTML = `<strong>${coffeeSuggestions[time][mood]}</strong>`; 
});


document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector(".nav");

    menuIcon.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});

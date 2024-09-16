//================= swiper ===============//
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

  //========== Fetch the data from the data.txt file to html file ======================//
  fetch('data.txt')
    .then(response => response.json())
    .then(data => {
      // Select the container to insert cards
      const container = document.getElementById('portfolio-container');

      // Iterate over each project in the data and create HTML elements
      data.forEach(item => {
        // Create a card element for each project
        const card = document.createElement('div');
        card.classList.add('card-item', 'swiper-slide');

        // Set the inner HTML for the card with data
        card.innerHTML = `
          <img src="${item.img}" class="img-certificate" alt="${item.title}">
          <div class="infos">
            <center><h3 class="title">${item.title}</h3></center><br>
            <hr><br>
            <p class="description">${item.description}</p>
          </div><br><br>
          <div class="buttons">
            <a class="btn_primary" href="${item.demo}" target="_blank"><i class="fa-solid fa-laptop-code"></i> Demo</a>&nbsp;&nbsp;
            <a class="btn_primary" href="${item.link}" target="_blank"><i class="fa-brands fa-github"></i> Github</a>
          </div>
        `;

        // Append the card to the container
        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
//================show the content of each experience headers ====================//
    document.addEventListener("DOMContentLoaded", function () {
      const tabs = document.querySelectorAll(".qualification__button");
      const contents = document.querySelectorAll(".qualification__content");
  
      tabs.forEach(tab => {
          tab.addEventListener("click", () => {
              // Remove the active class from all tabs
              tabs.forEach(t => t.classList.remove("qualification__active"));
              // Add the active class to the clicked tab
              tab.classList.add("qualification__active");
  
              // Hide all content sections
              contents.forEach(content => content.classList.remove("qualification__active"));
  
              // Show the content section that matches the clicked tab
              const target = document.querySelector(tab.dataset.target);
              target.classList.add("qualification__active");
          });
      });
  });
//============== Read more and Read less buttons ===========//
document.addEventListener("DOMContentLoaded", function() {
  const readMoreBtns = document.querySelectorAll(".read-more-btn");

  readMoreBtns.forEach((btn) => {
      btn.addEventListener("click", function() {
          const morePoints = this.previousElementSibling;
          if (morePoints.style.display === "none") {
              morePoints.style.display = "block"; // Show additional points
              this.textContent = "Read less"; // Change button text
          } else {
              morePoints.style.display = "none"; // Hide additional points
              this.textContent = "Read more"; // Revert button text
          }
      });
  });
});
// Ajax
// const testimonials = new Promise((resolve, reject) => {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "https://api.npoint.io/b4c63eb54860a0432c16", true);

//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       resolve(JSON.parse(xhr.response));
//     } else {
//       reject("Error loading data!");
//     }
//   };

//   xhr.onerror = function () {
//     reject("Network Error!");
//   };

//   xhr.send();
// });

// Fetch
const testimonials = fetch("https://api.npoint.io/b4c63eb54860a0432c16")
  .then((response) => response.json())
  .then((response) => response);

async function allTestimonials() {
  const response = await testimonials;

  let testimonialHtml = "";

  response.forEach((e) => {
    testimonialHtml += `<div class="card-testi">
    <img src="${e.image}" alt="person" />
    <p class="quote">"${e.quote}"</p>
    <p class="author">- ${e.author}</p>
    <p class="rating">${e.rating}<i class="fa-solid fa-star"></i></p>
    </div>`;
  });

  document.querySelector(".wrap-testi").innerHTML = testimonialHtml;
}

allTestimonials();

async function filterTestimonials(rating) {
  const responseFilter = await testimonials;

  let testimonialHtml = "";

  const testimonialFiltered = responseFilter.filter((e) => {
    return e.rating === rating;
  });

  if (testimonialFiltered.length === 0) {
    testimonialHtml = `<h1>Data not found</h1>`;
  } else {
    testimonialFiltered.forEach((e) => {
      testimonialHtml += `<div      class="card-testi">
      <img src="${e.image}" alt="person" />
      <p class="quote">"${e.quote}"</p>
      <p class="author">- ${e.author}</p>
      <p class="rating">${e.rating}<i class="fa-solid fa-star"></i></p>
      </div>`;
    });
  }

  document.querySelector(".wrap-testi").innerHTML = testimonialHtml;
}

const ratingAll = document.querySelector(".star-all");
const rating1 = document.querySelector(".star-1");
const rating2 = document.querySelector(".star-2");
const rating3 = document.querySelector(".star-3");
const rating4 = document.querySelector(".star-4");
const rating5 = document.querySelector(".star-5");

ratingAll.addEventListener("click", allTestimonials);
rating1.addEventListener("click", function () {
  filterTestimonials(1);
});
rating2.addEventListener("click", function () {
  filterTestimonials(2);
});
rating3.addEventListener("click", function () {
  filterTestimonials(3);
});
rating4.addEventListener("click", function () {
  filterTestimonials(4);
});
rating5.addEventListener("click", function () {
  filterTestimonials(5);
});

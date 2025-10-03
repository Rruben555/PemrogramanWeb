// Array of slides (image + text)

const cardMedia = document.querySelector(".card-media");

const slides = [
  {
    type: "img",
    src: "241401040.jpeg",
    title: "Ruben Sorisena Siregar",
    desc: "241401040 Kom A",
  },
  {
    type: "img",
    src: "https://fgo.gamepress.gg/sites/default/files/2018-01/MHX.png",
    title: "Perkenalan",
    desc: "Halo, saya Ruben. Hobi saya membaca dan bermain game. Motto hidup saya: Terus bernafas",
  },
  {
    type: "table",
    title: "Jadwal Kuliah",
    desc: "",
    
    table: `
      <table>
        <tr><th>Senin</th><th>Selasa</th><th>Rabu</th><th>Kamis</th><th>Jumat</th></tr>
        <tr><th>Desain Interaksi 10:30-12:10</th><th>IELTS Preparation 10:30-12:10</th><th>Pemrograman Web 8:00-10:30
        </th><th></th><th>Wirausaha Digital 8:00-9:40</th></tr>
        <tr><th></th><th>Kecerdasan Buatan 13:50-16:20</th><th>Basis Data 14:40-17:10</th><th></th><th>Struktur Data 13:50-16:20</th></tr>
      </table>
    `
  }
];

let currentIndex = 0;

// Get elements
const cardTitle = document.getElementById("card-title");
const cardDesc = document.getElementById("card-desc");

// Show slide
function showSlide(index) {
  cardMedia.innerHTML = "";
  const slide = slides[index];

  if (slide.type === "img") {
    const img = document.createElement("img");
    img.src = slide.src;
    cardMedia.appendChild(img);
  } else if (slide.type === "table") {
    cardMedia.innerHTML = slide.table;
  }
  cardTitle.textContent = slide.title;
  cardDesc.textContent = slide.desc;
}

// Next/Prev functions
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Initialize first slide
showSlide(currentIndex);
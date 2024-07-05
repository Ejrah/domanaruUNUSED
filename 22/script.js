const menuButton = document.querySelector(".menu-button");
const header = document.querySelector("header");
const menuContainer = document.querySelector(".menu-items");
const mainContent = document.querySelector("main");

let isOpen = false;
let scrollPosition = 0;

menuButton.addEventListener("click", () => {
  isOpen = !isOpen;

  if (isOpen) {
    header.classList.add("menu-open");
    menuContainer.style.display = "flex";
    setTimeout(() => {
      menuContainer.style.maxHeight = "300px";
    }, 10);
    mainContent.classList.add("main-with-menu");
    menuButton.classList.add("close");

    // Ubah simbol menu menjadi simbol silang
    const menuText = menuButton.querySelector(".menu-text");
    menuText.innerHTML = "✕";
  } else {
    menuContainer.style.maxHeight = "0";
    setTimeout(() => {
      menuContainer.style.display = "none";
    }, 300);
    header.classList.remove("menu-open");
    mainContent.classList.remove("main-with-menu");
    menuButton.classList.remove("close");

    // Kembalikan simbol silang menjadi simbol menu
    const menuText = menuButton.querySelector(".menu-text");
    menuText.innerHTML = "☰";
  }
});

function scrollToSection(targetId) {
  const target = document.getElementById(targetId);
  if (target) {
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    });
  }
}

// Add an event listener to the "Lebih Lanjut" button
const lebihLanjutButton = document.querySelector('.scroll-button a');
if (lebihLanjutButton) {
  lebihLanjutButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of the link
    scrollToSection('about-me'); // Scroll to the "About Me" section
  });
}

function handleSelectionChange() {
  var selection = window.getSelection();
  if (selection && selection.rangeCount > 0) {
      var selectedText = selection.toString();

      // Cek apakah teks terpilih tidak kosong
      if (selectedText.trim() !== '') {
          // Ganti warna teks saat terpilih
          document('foreColor', false, 'white');
          document('backColor', false, 'black');
      }
  }
}

// Tambahkan event listener untuk perubahan pemilihan teks
document.addEventListener('selectionchange', handleSelectionChange);


document.addEventListener('DOMContentLoaded', function() {
  fetch('header.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.querySelector('header').innerHTML = data;
    })
    .catch(error => {
      console.error('Error fetching header:', error);
    });

  fetch('footer.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.querySelector('footer').innerHTML = data;
    })
    .catch(error => {
      console.error('Error fetching footer:', error);
    });
});







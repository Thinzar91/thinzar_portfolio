// スクロール時に要素をフェードインさせる
const fadeElements = document.querySelectorAll('.fade-in');

const scrollTrigger = () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.90) {
      el.classList.add('visible');
    }
  });
};

// navbar
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY === 0) {
      navbar.style.position = 'fixed';
    } else {
      navbar.style.position = 'static';
    }
  });

// Resume button
// const btn = document.getElementById("resumeBtn","experienceBtn");
// const container = document.getElementById("pdfContainer1","pdfContainer2");
//
// btn.addEventListener("click", () => {
//   if (container.style.display === "none") {
//     container.style.display = "block";
//     btn.textContent = "レジュメ（非表示）","職務経歴書（非表示）";
//   } else {
//     container.style.display = "none";
//     btn.textContent = "レジュメ（表示）","職務経歴書（表示）";
//   }
// });

// レジュメボタンの処理
const resumeBtn = document.getElementById("resumeBtn");
const pdfContainer1 = document.getElementById("pdfContainer1");

resumeBtn.addEventListener("click", () => {
  const isHidden = pdfContainer1.style.display === "none" || pdfContainer1.style.display === "";
  pdfContainer1.style.display = isHidden ? "block" : "none";
  resumeBtn.textContent = isHidden ? "レジュメ（非表示）" : "レジュメ（表示）";
});

// 職務経歴書ボタンの処理
const careerBtn = document.getElementById("careerBtn");
const pdfContainer2 = document.getElementById("pdfContainer2");

careerBtn.addEventListener("click", () => {
  const isHidden = pdfContainer2.style.display === "none" || pdfContainer2.style.display === "";
  pdfContainer2.style.display = isHidden ? "block" : "none";
  careerBtn.textContent = isHidden ? "職務経歴書（非表示）" : "職務経歴書（表示）";
});

// PDFボタンの処理
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".pdfBtn");

  buttons.forEach(function (btn, index) {
    const container = btn.nextElementSibling; // ボタンの直後のdivを取得

    btn.addEventListener("click", function () {
      if (container.style.display === "none" || container.style.display === "") {
        container.style.display = "block";
        btn.textContent = "詳細を非表示";
      } else {
        container.style.display = "none";
        btn.textContent = "詳細を表示";
      }
    });
  });
});
// 以上

window.addEventListener('scroll', scrollTrigger);
window.addEventListener('load', scrollTrigger);

function toggleDetail(button) {
  const detail = button.nextElementSibling.querySelector(".timeline-detail");
  if (detail) {
    detail.classList.toggle("show");
  }
}

// function toggleMenu() {
//   const navMenu = document.getElementById('navMenu');
//   navMenu.classList.toggle('show');
// }

function toggleMenu() {
  const navMenu = document.getElementById('navMenu');
  const hamburger = document.getElementById('hamburger');

  navMenu.classList.toggle('show');
  hamburger.classList.toggle('active');
}

$(window).load(function() {
        $('a[href^=#]').click(function() {
            var speed = 1000;
            var href = $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top;
            $("html, body").animate({
                scrollTop: position
            }, speed, "swing");
            return false;
        });
    });

// Arkwork JS
const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('.filter-btn.active').classList.remove('active');
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      galleryItems.forEach(item => {
        if (filterValue === 'all' || item.classList.contains(filterValue)) {
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
        }
      });
    });
  });


//js
function openModal(img, modalId) {
  const modal = document.getElementById(modalId);
  const modalImg = modal.querySelector(".modal-content");
  modalImg.src = img.src;
  modal.style.display = "block";
}

function closeModal() {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    modal.style.display = "none";
  });
}

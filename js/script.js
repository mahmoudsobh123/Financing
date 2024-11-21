// document.getElementById('requestForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const idNumber = document.getElementById('idNumber').value;
//     const documentType = document.getElementById('documentType').value;
//     const email = document.getElementById('email').value;

//     if (idNumber && documentType && email) {
//         alert('تم إرسال الطلب بنجاح!');
//     } else {
//         alert('يرجى ملء جميع الحقول.');
//     }
// });




// استمع إلى التغيير في حالة القائمة المفتوحة أو المغلقة
const navbarToggler = document.getElementById("navbar-toggler");
const navbarContent = document.getElementById("navbarContent");

navbarToggler.addEventListener("click", function () {
  // إضافة تأثير التدوير للأيقونة
  const icon = navbarToggler.querySelector(".navbar-toggler-icon");
  icon.classList.add("rotate");
  setTimeout(function () {
    icon.classList.toggle("change");
    icon.classList.remove("rotate");
  }, 300);
  
  // تبديل حالة القائمة المفتوحة
  navbarContent.classList.toggle("collapse");
});


//////// Hide link above header /////////////
let lastScrollTop = 0;
const header = document.getElementById("header");
const topLink = document.getElementById("top-link");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // إذا كان التمرير لأسفل
    header.classList.add("hide-header"); // نقل الـ header إلى الأعلى
    topLink.classList.add("hide-link"); // إخفاء الرابط
  } else {
    // إذا كان التمرير لأعلى
    header.classList.remove("hide-header"); // إعادة الـ header
    topLink.classList.remove("hide-link"); // إظهار الرابط
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // لتجنب السلبية
});

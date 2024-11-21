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


// //////// Hide link above header /////////////
// let lastScrollTop = 0;
// const header = document.getElementById("header");
// const topLink = document.getElementById("top-link");

// window.addEventListener("scroll", function () {
//   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//   if (scrollTop > lastScrollTop) {
//     // إذا كان التمرير لأسفل
//     header.classList.add("hide-header"); // نقل الـ header إلى الأعلى
//     topLink.classList.add("hide-link"); // إخفاء الرابط
//   } else {
//     // إذا كان التمرير لأعلى
//     header.classList.remove("hide-header"); // إعادة الـ header
//     topLink.classList.remove("hide-link"); // إظهار الرابط
//   }
//   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // لتجنب السلبية
// });

let lastScrollTop = 0; // تخزين آخر موضع للتمرير
const header = document.getElementById("header");
const topLink = document.getElementById("top-link");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // عند التمرير لأسفل
        header.classList.add("hide-header");
        topLink.classList.add("hide-link");
    } else {
        // عند التمرير لأعلى
        header.classList.remove("hide-header");
        topLink.classList.remove("hide-link");
    }

    // تحديث قيمة التمرير الأخيرة
    lastScrollTop = Math.max(scrollTop, 0); // تجنب القيم السالبة
});
//////////////////////////////////////////////////////////////////////
// /////// footer
// مثال: عند النقر على أي رابط داخل الفوتر، انتقل إلى القسم المطلوب بسلاسة
// document.querySelectorAll(".footer a").forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault(); // منع السلوك الافتراضي
//     const targetId = e.target.getAttribute("href");
//     document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
//   });
// });

// document.querySelectorAll('li').forEach(li => {
//   li.addEventListener('click', e => {
//       e.preventDefault(); // هذا يمنع الرابط من الفتح
//   });
// });

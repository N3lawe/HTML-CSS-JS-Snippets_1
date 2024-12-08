let slideIndex = 1;
showSlides(slideIndex);

// "هذه الدالة لتحريك الشرائح للأمام أو للخلف عند النقر على الأزرار "السابق" أو "التالي
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// (dots) هذه الدالة لتحديد الشريحة الحالية عند النقر على النقاط 
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// n الدالة الرئيسية لعرض الشريحة المحددة بناءً على قيمة 
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); // الحصول على جميع الشرائح
  let dots = document.getElementsByClassName("dot"); // (dots) الحصول على جميع النقاط 

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  // إخفاء جميع الشرائح
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // إزالة الفئة النشطة "active" من جميع النقاط
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // عرض الشريحة المطلوبة فقط
  slides[slideIndex - 1].style.display = "block";

  // إضافة الفئة النشطة للنقطة التي تتطابق مع الشريحة المعروضة
  dots[slideIndex - 1].className += " active";
}

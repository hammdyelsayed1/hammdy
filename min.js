console.log("Team V is ready 🚀");











document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName  = document.getElementById("lastName").value.trim();
  const phone     = document.getElementById("phone").value.trim();
  const city      = document.getElementById("city").value.trim();
  const email     = document.getElementById("email").value.trim();
  const field     = document.getElementById("field").value;

  // رسالة واتساب
  const message = `
تسجيل جديد - Team V
------------------------
الاسم: ${firstName} ${lastName}
رقم الهاتف: ${phone}
المحافظة: ${city}
البريد الإلكتروني: ${email}
المجال المختار: ${field}
`;

  const whatsappNumber = "201094855679"; // ✅ رقمك
  const whatsappLink =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  // فتح واتساب
  window.open(whatsappLink, "_blank");
});






<script>
const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const el = entry.target;
      const target = +el.dataset.target;
      let count = 0;
      const step = target / 120;

      const update = ()=>{
        count += step;
        if(count < target){
          el.textContent = Math.floor(count);
          requestAnimationFrame(update);
        }else{
          el.textContent = target;
        }
      };
      update();
      observer.unobserve(el);
    }
  });
},{threshold:0.5});

counters.forEach(c=>observer.observe(c));
</script>
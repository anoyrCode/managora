    AOS.init({ duration: 800, once: true, offset: 100 });
 
    const menuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if(menuBtn) {
      menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        const icon = menuBtn.querySelector('i');
        if(navLinks.classList.contains('show')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });
    }
    
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
        const icon = menuBtn.querySelector('i');
        if(icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });
    });
    
    window.addEventListener('resize', () => {
      if(window.innerWidth > 767) {
        if(navLinks) navLinks.classList.remove('show');
        if(menuBtn) {
          const icon = menuBtn.querySelector('i');
          if(icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          }
        }
      }
    });


const contactForm = document.getElementById("contactForm")
contactForm.addEventListener('submit',async (e)=>{
    e.preventDefault()
    const data = {
        nama : document.getElementById('nama').value,
        email : document.getElementById('email').value,
        telepon : document.getElementById('tel').value,
        lembaga : document.getElementById('lembaga').value,
        pesan : document.getElementById('pesan').value
    
    }

    try{
        fetch("https://nonincreasable-jaxen-solenoidal.ngrok-free.dev/index", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify({
          nama: data.nama,
          email: data.email,
          telepon: parseInt(data.telepon),
          lembaga : data.lembaga,
          pesan : data.pesan
      })
    })
        contactForm.reset()
        showAlert('data berhasil tersimpan')
    }catch(err){
      wrongAlert('data gagal dikirim')
    }

})




function showAlert(message) {
  const alertBox = document.getElementById("customAlert");
  const alertText = document.getElementById("alertText");

  alertText.innerText = message;

  alertBox.classList.add("show");

  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 5000);
}

function closeAlert() {
  document.getElementById("customAlert").classList.remove("show");
}



function wrongAlert(message) {
  const alertBox = document.getElementById("customAlert");
  const alertText = document.getElementById("alertText");

  alertText.innerText = message;

  alertBox.classList.add("show");


  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 5000);
}

function closeAlert() {
  document.getElementById("customAlert").classList.remove("show");
}

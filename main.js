// === Smooth Scroll ===
document.querySelectorAll('a[href^="#"]').forEach(a =>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

// === Newsletter submit (simulasi) ===
document.getElementById('newsletterForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  const email = document.getElementById('email').value;
  if(!email){ 
    alert('Masukkan email valid'); 
    return; 
  }
  alert('Terima kasih! Email ' + email + ' telah terdaftar (simulasi).');
  document.getElementById('newsletterForm').reset();
});

// === Musik Player ===
let currentAudio = null;

function playMusic(id) {
  if (currentAudio && currentAudio.id !== id) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  const audio = document.getElementById(id);

  if (audio.paused) {
    audio.play();
    currentAudio = audio;
  } else {
    audio.pause();
  }
}

// === Ganti Member Biodata ===
// Data member
const membersData = {
  jungwon: {
    name: "Yang Jung Won",
    role: "Leader, vocalist, dancer",
    bio: "Lahir 9 Februari 2004. Dikenal sejak program survival I-LAND dan debut bersama ENHYPEN.",
    img: "image/jugwon.jpg"
  },
  heeseung: {
    name: "Lee Hee Seung",
    role: "Main Vocalist",
    bio: "Lahir 15 Oktober 2001. Trainee BigHit sejak awal, dikenal dengan vokal kuat.",
    img: "image/heesueng.jpg"
  },
  jay: {
    name: "Jay Park",
    role: "Rapper, vocalist",
    bio: "Lahir di Seattle, 20 April 2002. Dikenal karismatik dan fasih bahasa Inggris.",
    img: "image/jay.jpg"
  },
  jake: {
    name: "Jake Sim",
    role: "Rapper, vocalist",
    bio: "Lahir di Brisbane, Australia. Bergabung I-LAND dan debut di ENHYPEN.",
    img: "image/jake.jpg"
  },
  sunghoon: {
    name: "Park Sung Hoon",
    role: "Dancer, vocalist",
    bio: "Mantan atlet ice skating, lahir 8 Desember 2002.",
    img: "image/sunghoon.jpg"
  },
  sunoo: {
    name: "Kim Sun Oo",
    role: "Vocalist",
    bio: "Lahir 24 Juni 2003. Dikenal dengan ekspresi panggung yang kuat.",
    img: "image/sunoo.jpg"
  },
  niki: {
    name: "Nishimura Riki",
    role: "Main Dancer, Vocalist",
    bio: "Maknae ENHYPEN, lahir 9 Desember 2005 di Jepang.",
    img: "image/niki.jpg"
  }
};

// Target elemen utama
const mainImg = document.querySelector(".profile-card img");
const mainName = document.querySelector(".profile-info h3");
const mainDesc = document.querySelector(".profile-info p");

// Event listener untuk thumbnail
document.querySelectorAll(".member-list img").forEach(img => {
  img.addEventListener("click", () => {
    const id = img.dataset.id; 
    const member = membersData[id];
    if(member){
      mainImg.src = member.img;
      mainName.textContent = member.name;
      mainDesc.textContent = member.role + ". " + member.bio;
    } else {
      console.warn("Data member tidak ditemukan:", id);
    }
  });
});


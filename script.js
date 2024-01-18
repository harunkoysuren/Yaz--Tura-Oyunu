// TURA VE YAZI SAYILARINI OLUŞTUR VE BAŞLAGIÇTA SIFIRLA

let tura = 0;
let yazi = 0;


// HTML'de bulunan coin , flip butonu ve reset butonu seç

let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");


// flip butonuna tıklanıldığında 

flipBtn.addEventListener("click", () => {

  // rastgele 0 veya 1 sayısını seçer (0:tura , 1:yazi)
  let i = Math.floor(Math.random() * 2);

  coin.style.animation = "none";
  if (i) {
    setTimeout(() => {
      coin.style.animation = "spin-tura 3s forwards"
    }, 100);
    tura++;
  } else {
    setTimeout(() => {
      coin.style.animation = "spin-yazi 3s forwards"
    }, 100);
    yazi++;
  }


  // İstatistikleri Güncelle Ve butonu Devre Dışı Bırak

  setTimeout(uptadeStats, 3000);
  disabledButton();

})


// istatistikleri güncelleme fonksiyonu


function uptadeStats() {
  document.querySelector("#tura-count").textContent = `Tura : ${tura}`;
  document.querySelector("#yazi-count").textContent = `Yazı : ${yazi}`;
}

// BUTONU GEÇİCİ OLARAK DEVRE DIŞI BIRAKMA FONSİYONU

function disabledButton() {
  flipBtn.disabled = true;
  setTimeout(() => {
    flipBtn.disabled = false;

  }, 3000);
}

// RESET BUTONUNA TIKLAMA 

resetBtn.addEventListener("click", () => {
  coin.style.animation = "none";
  tura = 0;
  yazi = 0;
  uptadeStats()
});



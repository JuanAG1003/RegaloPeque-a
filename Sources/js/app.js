
const miBtn = document.querySelector(".btn__btn");
const miAudio = document.querySelector("audio");
const letterContainer = document.getElementById("letter-container");
const miGalleryA = document.querySelector(".galleryA");
const miGalleryB = document.querySelector(".galleryB");
const miMain = document.querySelector(".main");
const intro = document.getElementById("intro");
const introText = document.getElementById("intro-text");
const app = document.getElementById("app");

let letter = [

    {time: 2 ,text : "Quiero ser la calma", speed: 60},
    {time: 4.5 ,text : "Que te cubre en las mañanas", speed: 60},
    {time: 8 ,text : "Quiero ser el viento", speed: 60},
    {time: 11 ,text : "Que se cuela en tu ventana" , speed: 60},
    {time: 13.5 ,text : "Irnos de viaje a donde no pase el tiempo", speed: 60},
    {time: 17 ,text : "Ir contra el mundo hasta nuestro último aliento", speed: 50},
    {time: 20.5 ,text : "O lo que nos dé la gana", speed: 90},
    {time: 24.5 ,text : "Quisiera!!!" , speed: 150},
    {time: 27.5 , text: "Ser la vista que se observa en la montaña", speed: 120},
    {time: 33 ,text : "Ser el río que recorre tu ciudad amurallada" , speed: 160},
    {time: 43 ,text : "Tu ciudad amurallada", speed: 150},
    {time: 49.5 ,text : "Tú y yo", speed: 140},
    {time: 51.5 ,text : "Es lo que pienso cuando me levanto", speed: 60},
    {time: 55 ,text : "Y cuando duermo a veces me adelanto", speed: 60},
    {time: 58 ,text : "Tanto, tanto", speed: 160},
    {time: 63 ,text : "Yo no buscaba nada y de la nada apareciste", speed: 60},
    {time: 66 ,text : "Para reparar algo que nunca rompiste", speed: 80},
    {time: 69.5 ,text : "Y quédate a mi lado", speed: 100},
    {time: 72 ,text : "Quédate a mi lado que", speed: 120},
    {time: 75 ,text : "Quisiera!!!", speed: 160},
    {time: 78 , text: "Ser la vista que se observa en la montaña", speed: 120},
    {time: 84 ,text : "Ser el río que recorre tu ciudad amurallada", speed: 160},
    {time: 93 ,text : "Tu ciudad amurallada", speed: 180},
    {time: 102.5 ,text : "Quiero ser la calma", speed: 80},
    {time: 105.5 ,text : "Que te cubre en las mañanas", speed: 80},
    {time: 109 ,text : "Quiero ser el viento", speed: 80},
    {time: 112 ,text : "Que se cuela en tu ventana", speed: 80},
    {time: 116 ,text : "Quisiera... <3", speed: 450},
    {time: 126 ,text : "Quisiera!!!", speed: 160},
    {time: 128 , text: "Ser la vista que se observa en la montaña", speed: 120},
    {time: 134.5 ,text : "Ser el río que recorre tu ciudad amurallada", speed: 160},
    {time: 144 ,text : "Tu ciudad amurallada.", speed: 200},
    {time: 152 ,text : "By: J <3", speed: 450},
    {time: 167 ,text : "", speed: 10},
    {time: 168 ,text : "", speed: 10},

]

let i = 0;
let w = 0
let isTyping = false;

const videoIntro = document.querySelector("#intro__video")
const btnIntro = document.querySelector(".intro__btn")
const btntext = document.querySelector(".btn__text")

btnIntro.addEventListener("click", () => {

  if(introI >= introLines.length) {
    videoIntro.classList.add("reverhide")
    btnIntro.classList.add("hide")
    videoIntro.play()
    
    setTimeout(() => {
      videoIntro.classList.remove("hidden")
      btnIntro.classList.add("hidden")

    }, 2000)

  }

})

const introLines = [
  { text: "Feliz cumpleaños…", speed: 160 },
  { text: "Pequeña 💖", speed: 160 }
];

let introI = 0, introW = 0;

function introType() {
  if (introW < introLines[introI].text.length) {
    introText.textContent += introLines[introI].text[introW++];
    setTimeout(introType, introLines[introI].speed);
  } else {
    setTimeout(() => {
      introText.textContent = "";
      introW = 0;
      introI++;
      if (introI < introLines.length) introType();
      else {
        btntext.textContent = "Puchurrame <3"
        return
      } 
    }, 1500);
  }
}

videoIntro.addEventListener("timeupdate", () => {
  let t = videoIntro.currentTime

    if (t > 10){
      intro.classList.add("hide");
      setTimeout(() => {
        intro.remove();
        app.classList.remove("hidden");
        document.querySelector("#audio-favorite").play()
        document.querySelector("#audio-favorite").volume = 0.3

      }, 2000);
      
    }
})

introType();

const body = document.querySelector("body")

const btn = () => {
  if(miBtn.id === "disparo") {
    if (i >= letter.length) {
      i = 0
      w = 0
      isTyping = false
      salir = true
    }

    if(mediaQuery.matches || mediaQueryMediun.matches) {
      miGalleryA.classList.remove("reverhide")
      miGalleryB.classList.remove("reverhide")
      miGalleryA.classList.add("hide")
      miGalleryB.classList.add("hide")

    } else {
      miGalleryA.style.animation = "telon 3s both linear"
      miGalleryB.style.animation = "telon 3s both linear"

    }

   setTimeout(() => {
      if(mediaQueryMediun.matches || mediaQuery.matches) {
        miGalleryA.classList.add("hidde")
        miGalleryB.classList.add("hidde")
        document.querySelector(".wrapper").style.justifyContent = "center"

      }
      miMain.style.display = "flex";
      miAudio.play()
      if(toggle){
        btnToggle()
      } else {
        toggle = true
      }
    },3005)
    
 } else {
    document.querySelector(".btn__container-imgs").style.position = "sticky"
    flechas[2].style.display = "block"
    flechas[3].style.display = "block"
    view.style.display = "none"
    miBtn.id = "disparo"
    miBtn.style.backgroundColor = "#fff"
    body.classList.remove("no-scroll")
    miBtn.innerHTML = [`
       <img class="btn__btn-image" src="Sources/Media/img/btn-imagen.png" alt="">
        
      `
    ]
  }  
}

miBtn.addEventListener("click", (e) => {
    btn()
})

let salir = true

miAudio.addEventListener("timeupdate", () => {
    if (i >= letter.length) return;
    

    let t = miAudio.currentTime;

    if(t >= 167 && salir) {
        miMain.style.display = "none";
        btnToggle()
        if(!mediaQueryMediun.matches) {
          miGalleryA.classList.remove("hide")
          miGalleryB.classList.remove("hide")

          miGalleryA.classList.add("reverhide")
          miGalleryB.classList.add("reverhide")

         if(banderaflecha) {
            miGalleryA.classList.remove("hidde")

          } else {
            miGalleryB.classList.remove("hidde")
          }
          document.querySelector(".wrapper").style.justifyContent = "space-between"
          salir = false

        } else {
          miGalleryA.style.animation = "telonClose 5s backward linear"
          miGalleryB.style.animation = "telonClose 5s backward linear"
          
        }


    }

    if (t >= letter[i].time && !isTyping) {
        letterContainer.textContent = "";
        w = 0;
        isTyping = true;
        push();
    }
});

const push = () => {
    
    if (w < letter[i].text.length) {
        letterContainer.textContent += letter[i].text[w];
        w++;
        setTimeout(push, letter[i].speed);
    } else {
        isTyping = false;
        i++;
    }
};

    

const starsContainer = document.querySelector(".stars");

for (let i = 0; i < 60; i++) {
  const star = document.createElement("span");
  star.classList.add("star");

  star.style.left = Math.random() * 100 + "%";
  star.style.animationDuration = 5 + Math.random() * 10 + "s";
  star.style.opacity = Math.random();

  starsContainer.appendChild(star);
}

const imgSeleccion = document.querySelectorAll(`.img`);
const viewContainer = document.querySelector(".view__container");
const view = document.querySelector(".view")
const flechas = document.querySelectorAll(".flecha")
const flechaSig = document.querySelector(".d")
const flechaBack = document.querySelector(".i")
const flechaPagSig = document.querySelector(".ps")
const flechaPagBack = document.querySelector(".pa")
let s = ""
let n = 0
let modulo = 12

  imgSeleccion.forEach(img => {
    img.addEventListener("click", (e) => {

    console.log(imgSeleccion);

      flechaPagBack.style.display = "none"
      flechaPagSig.style.display = "none"
      body.classList.add("no-scroll")

      n = Number(e.target.classList[1])

      view.style.display = "flex"
      document.querySelector(".btn__container-imgs").style.position = "fixed"

      viewContainer.innerHTML =
        `
        <img class="img" src="Sources/Media/img/${n}.jpg" alt="">

        `
      

      miBtn.id = "cerrar"
      miBtn.style.backgroundColor = "#a77fd4"

      miBtn.innerHTML = [`

          <div class = "material-symbols-outlined btn__close-text">
              close
          </div>
        `
      ]

    })
  })

let controlClass = 0
const mediaQuery1k = window.matchMedia('(max-width: 1000px)');

const galleryControl = () => {
  if(mediaQuery1k.matches) {
    miGalleryB.classList.add("hidde")
    modulo = 6

  } else {
    miGalleryA.classList.remove("hidde")
    miGalleryB.classList.remove("hidde")
    modulo = 12
  }
}

mediaQuery1k.addEventListener("change", galleryControl)
galleryControl()
let banderaflecha = true


flechaBack.addEventListener("click", () => {
  n--
  if(n < 1) {
    n = 60
  }

  if(n % modulo === 0) {
    if(mediaQuery1k.matches) {
      if(banderaflecha) {
        miGalleryA.classList.toggle("hidde")
        miGalleryB.classList.toggle("hidde")
        pa()
        banderaflecha = false

      } else {
        miGalleryA.classList.toggle("hidde")
        miGalleryB.classList.toggle("hidde")
        banderaflecha = true
      }

    } else {
      pa()

    }
  }

  viewContainerHtml()
})

flechaPagBack.addEventListener("click", () => {
  if(mediaQuery1k.matches) {
    if(banderaflecha) {
      miGalleryA.classList.toggle("hidde")
      miGalleryB.classList.toggle("hidde")
      pa()
      banderaflecha = false

    } else {
      miGalleryA.classList.toggle("hidde")
      miGalleryB.classList.toggle("hidde")
      banderaflecha = true
    }

  } else {
    pa()

  }
})

flechaSig.addEventListener("click", () => {
  if(n % modulo === 0) {
    if(mediaQuery1k.matches) {
      if(banderaflecha) {
        miGalleryA.classList.toggle("hidde")
        miGalleryB.classList.toggle("hidde")
        banderaflecha = false

      } else {
        miGalleryA.classList.toggle("hidde")
        miGalleryB.classList.toggle("hidde")
        ps()
        banderaflecha = true
      }

    } else {
      ps()

    }
  }

  n++

  if(n > 60) {
    n = 1
  }  

  viewContainerHtml()

})

flechaPagSig.addEventListener("click", () => {
  if(mediaQuery1k.matches) {
    if(banderaflecha) {
      miGalleryA.classList.toggle("hidde")
      miGalleryB.classList.toggle("hidde")
      banderaflecha = false

    } else {
      miGalleryA.classList.toggle("hidde")
      miGalleryB.classList.toggle("hidde")
      ps()
      banderaflecha = true
    }

  } else {
    ps()

  }
})

const viewContainerHtml = () => {
  viewContainer.innerHTML = [
    `
    <img class="img" src="Sources/Media/img/${n}.jpg" alt="">
    `
  ]
}

let check = true

const pa = () => {

  if(!check) {
    return
  }

  controlClass = Number(imgSeleccion[0].classList[1])
  check = false

  Array.from(imgSeleccion).reverse().forEach(img => {
    img.classList.remove(`${img.classList[1]}`)
    controlClass--
    img.classList.add("animation")
    if(controlClass < 1) {
      controlClass = 60
    }
    img.classList.add(`${controlClass}`)
    img.setAttribute("src", `Sources/Media/img/${controlClass}.jpg`)

    setTimeout(() => {
      img.classList.remove("animation")
      check = true
    },800)
       

  })
}

const ps = () => {
  if(!check) {
    return
  }

  controlClass = Number(imgSeleccion[11].classList[1])
  check = false
      
  imgSeleccion.forEach(img => {
    img.classList.remove(`${img.classList[1]}`)
    controlClass++
    img.classList.add("animation")
    if(controlClass > 60) {
      controlClass = 1
    }
    img.classList.add(`${controlClass}`)
    img.setAttribute("src", `Sources/Media/img/${controlClass}.jpg`)

    setTimeout(() => {
      img.classList.remove("animation")
      check = true
    },800)

  })
}

//video
const videosContainer = document.getElementById("videosContainer");
let videoIndex = 0;
let videosPerPage = 0;

// Definir la media query
const mediaQuery = window.matchMedia('(max-width: 800px)');
const mediaQueryMediun = window.matchMedia('(min-width: 800px) and (max-width: 1600px)');



// si tienes 40 videos por ejemplo
const totalVideos = 51;

const videosArray = Array.from({ length: totalVideos }, (_, i) => ({
  src: `Sources/Media/videos/${i + 1}.mp4`
}));

function renderVideos() {
  if (mediaQuery.matches) {
    videosPerPage = 3
  } else if(mediaQueryMediun.matches) {
    videosPerPage = 5
  } else {
    videosPerPage = 10
  }

  videosContainer.style.opacity = 0;

  setTimeout(() => {

    videosContainer.innerHTML = "";

    const slice = videosArray.slice(videoIndex, videoIndex + videosPerPage);

    slice.forEach(videoData => {

      const div = document.createElement("div");
      div.classList.add("video__container");

      div.innerHTML = `
        <video class="video" src="${videoData.src}"></video>
        <div class="video__overlay"></div>
      `;

      videosContainer.appendChild(div);

    });

    videosContainer.style.opacity = 1;

  }, 200);
}

document.querySelector(".video-next").addEventListener("click", () => {
  if (videoIndex + videosPerPage < totalVideos) {
    videoIndex += videosPerPage;
    renderVideos();
  }
});

document.querySelector(".video-prev").addEventListener("click", () => {
  if (videoIndex - videosPerPage >= 0) {
    videoIndex -= videosPerPage;
    renderVideos();
  }
});

mediaQuery.addEventListener("change", renderVideos)
mediaQueryMediun.addEventListener("change", renderVideos)

renderVideos();

/* =============================
   VIDEO MODAL FUNCIONALIDAD
============================= */

const videoModal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeModal = document.getElementById("closeModal");

// Delegación de eventos para todos los videos
videosContainer.addEventListener("click", (e) => {

  const video = e.target.closest(".video__container");

  if (!video) return;

  const videoElement = video.querySelector("video");

  if (!videoElement) return;

  const src = videoElement.getAttribute("src");

  modalVideo.src = src;
  videoModal.classList.add("active");
  modalVideo.play();
  body.classList.add("no-scroll")
  if(!toggle) {
    toggle = true
    return
  }
  btnToggle()
  

});

// Cerrar con botón X
closeModal.addEventListener("click", () => {
  closeVideoModal()
  body.classList.remove("no-scroll")
  btnToggle()

});

// Cerrar haciendo click fuera del video
videoModal.addEventListener("click", (e) => {
  if (e.target === videoModal) {
    closeVideoModal();
    body.classList.remove("no-scroll")
    btnToggle()
  }
});

view.addEventListener("click", (e) => {
  if(e.target === view){
    btn()
  }
})

// Cerrar con ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeVideoModal();
    body.classList.remove("no-scroll")
    btnToggle()
  }

  if(miBtn.id === "disparo" ) {
    return
  }

  if(e.key === "Escape") {
    btn()
    body.classList.remove("no-scroll")

  }
});

function closeVideoModal() {
  modalVideo.pause();
  modalVideo.src = "";
  videoModal.classList.remove("active");
}

let toggle = true

const btnToggle = () => {
  if(toggle) {
    document.querySelector("#audio-favorite").pause()
    toggle = false
  } else {
    document.querySelector("#audio-favorite").play()
    toggle = true
  }
}

document.querySelector("#btn__sound").addEventListener("click", () => {
  btnToggle()
})


// Header & NavBar & SideBar
const headerNavSidebar = `<!-- Desktop Header -->
  <header>
  <a href="https://www.facebook.com/profile.php?id=100092201421394"><button><div class="material-symbols-outlined">call</div> تواصل معي</button></a>
    <br>
    <a href="https://mohamed-waleed.vercel.app">فريق العمل</a>
    <a onclick="showAboutBox()" href="#">نبذة عن الموقع</a>
    <a href="index.html">الرئيسية</a>
    <br>
    <img src="imgs/logo.webp" class="logo-img" alt="img">
  </header>
  
  <!-- Mobile Header -->
  <nav>
    <!-- Logo -->
    <img src="imgs/logo.webp" class="logo-img" alt="img">
    
    
    <div id="show" onclick="show()">
      <div class="line"></div>
      <div class="line3"></div>
      <div class="line2"></div>
    </div>
  </nav>
  
  <!-- SideBar -->
  <aside>
    <center>
    <br><br>
    <li><a href="index.html">الرئيسية</a></li>
    <br><br>
    <li><a onclick="showAboutBox()" href="#">نبذة عن الموقع</a></li>
    <br><br>
    <li><a href="https://mohamed-waleed.vercel.app">فريق العمل</a></li>
    <br><br>
     <a href="https://www.facebook.com/profile.php?id=100092201421394"><button><div class="material-symbols-outlined">call</div> تواصل معي</button></a>
     </center>
  </aside>`;
  
  let headerCont = document.getElementById("header");
  headerCont.innerHTML = headerNavSidebar;





// About Box
const aboutBox = `<!-- About Box -->
<div align="center" class="about-box">
    <h2 onclick="removeAboutBox()">x</h2><br>
    <h1>؟ Courses Hub ما هو موقع</h1>
    <h3>موقع كورسيز هاب هو موقعي تعليمي هدفه إعطاء الكورسات ليسهل علي الناس التعلم اكثر، و إن شاء الله سوف احاول جاهداً ان اطوره ليسهل علي الناس أكثر</h3>
  </div>`;
  const aboutCont = document.getElementById("about-box");
  aboutCont.innerHTML = aboutBox;
  
  
  
  //Footer
  let footer = `<footer align="center">
      <h4>Made With 💙 By <a href="">Mohamed Waleed.</a>
      <br>
      <div class="icons">
      <a href="https://www.facebook.com/profile.php?id=100092201421394&mibextid=2JQ9oc">
        <svg xmlns="http://www.w3.org/2000/svg" height="27px" style="margin-left:0" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
      </a>
      <a href="https://wa.me/+201282758797">
        <svg xmlns="http://www.w3.org/2000/svg" height="29px" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
        </a>
        
        <!-- Github -->
        <a href="https://github.com/Mohamedwaleeddd">
        <svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 0 496 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
        </a>
      </div>
      </h4>
    </footer>`;
    let footerCont = document.getElementById("footer");
    footerCont.innerHTML = footer
  

// Show Side Bar
const line = document.querySelector('.line');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const menuBox = document.querySelector('aside');

menuBox.style.right = "-200%";

function show() {
  if (menuBox.style.right === "-200%") {
    line2.style.marginBottom = "5px";
    line2.style.position = "absolute";
    line2.style.transform = "rotate(130deg)";
    line.style.transform = "rotate(50deg)";
    line.style.marginTop = "1px";
    menuBox.style.right = "0px";
    line3.style.display = "none";
  }

  else if (menuBox.style.right === "0px") {
    line2.style.marginBottom = "0px";
    line2.style.position = "relative";
    line2.style.transform = "rotate(0deg)";
    line.style.transform = "rotate(0deg)";
    line3.style.display = "block";

    menuBox.style.right = "-200%";
  }
}

//Arrow Up Btn
const arrowUp = document.getElementById("arrow-up");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
    arrowUp.style.display = "block";
  } else {
    arrowUp.style.display = "none";
  }
});
arrowUp.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//Show And Hide The About Box
const about = document.querySelector(".about-box");
about.style.top = "-100%";
function removeAboutBox(){
  about.style.top = "-100%";
}

function showAboutBox(){
  about.style.top = "50%";
}


//Show And Hide Nav & Header

let header = document.querySelector("header");
let nav = document.querySelector("nav");

if(nav.style.display = "flex"){
  header.style.display = "none";
} else if(header.style.display = "flex"){
  nav.style.display = "none";
}


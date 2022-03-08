function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("NavBtn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// 샌드위치 선택시 버튼 색 변경
var sandwichLinks = document.querySelectorAll(".select");

function MenuSelect() {
  var SandwichMenu = document.querySelector(".sandwich");
  if (SandwichMenu) {
    SandwichMenu.classList.remove("sandwich");
  }
  this.classList.add("sandwich");
}

for (var i = 0; i < sandwichLinks.length; i++) {
  sandwichLinks[i].addEventListener("click", MenuSelect);
}

// 빵 선택시 버튼 변경
var breadLinks = document.querySelectorAll(".select2");

function BreadSelect() {
  var BreadMenu = document.querySelector(".bread");
  if (BreadMenu) {
    BreadMenu.classList.remove("bread");
  }
  this.classList.add("bread");
}

for (var i = 0; i < breadLinks.length; i++) {
  breadLinks[i].addEventListener("click", BreadSelect);
}
//소스 선택시 버튼 변경 (다수 가능)

// 치즈 선택시 버튼 변경
var cheeseLinks = document.querySelectorAll(".select4");

function CheeseSelect() {
  var CheeseMenu = document.querySelector(".cheese");
  if (CheeseMenu) {
    CheeseMenu.classList.remove("cheese");
  }
  this.classList.add("cheese");
}

for (var i = 0; i < cheeseLinks.length; i++) {
  cheeseLinks[i].addEventListener("click", CheeseSelect);
}

// 다 더해지는 값

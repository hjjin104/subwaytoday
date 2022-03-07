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
  var activeMenu =
    document.querySelector(
      ".sandwich"
    ); /* querySelector 자체가 dom을 다 뒤져야 되므로 이것도 비효율적이라고 할 수 ㅇ..dom에 의존적 */
  if (activeMenu) {
    activeMenu.classList.remove("sandwich");
  }
  this.classList.add("sandwich");
}

for (var i = 0; i < sandwichLinks.length; i++) {
  sandwichLinks[i].addEventListener("click", MenuSelect);
}

// 빵 선택시 버튼 변경
var breadLinks = document.querySelectorAll(".select2");

function BreadSelect() {
  var activeMenu =
    document.querySelector(
      ".bread"
    ); /* querySelector 자체가 dom을 다 뒤져야 되므로 이것도 비효율적이라고 할 수 ㅇ..dom에 의존적 */
  if (activeMenu) {
    activeMenu.classList.remove("bread");
  }
  this.classList.add("bread");
}

for (var i = 0; i < breadLinks.length; i++) {
  breadLinks[i].addEventListener("click", BreadSelect);
}

// 치즈 선택시 버튼 변경
var breadLinks = document.querySelectorAll(".select3");

function CheeseSelect() {
  var activeMenu =
    document.querySelector(
      ".cheese"
    ); /* querySelector 자체가 dom을 다 뒤져야 되므로 이것도 비효율적이라고 할 수 ㅇ..dom에 의존적 */
  if (activeMenu) {
    activeMenu.classList.remove("cheese");
  }
  this.classList.add("cheese");
}

for (var i = 0; i < breadLinks.length; i++) {
  breadLinks[i].addEventListener("click", CheeseSelect);
}

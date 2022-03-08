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

// 최신순 리스트 함수
const sandwich = [
  { id: "menu01", name: "에그마요", url: "img/에그마요.png" },
  { id: "menu02", name: "비엠티", url: "img/에그마요.png" },
];

const list = document.getElementById("list");

function showList(val = "") {
  list.innerHTML = "";
  const res = sandwich.forEach((menu) => {
    if (menu.name.includes(val)) {
      const li = document.createElement("li");
      li.innerHTML = `
      <div class="new-sandwich">
        <img src=${menu.url}>
        <p>메뉴 이름: ${menu.name}</p>
      </div>
      `;
      list.appendChild(li);
    }
  });
}

showList();

// 검색 기능
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const val = searchInput.value;
  // console.log(val);
  showList(val);
});

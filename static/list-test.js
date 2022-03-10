function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("btn-top10");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
// 인기순 정렬 및 검색 기능
const popularSandwich = [
  {
    img: "https://www.subway.co.kr/upload/menu/Egg-Mayo_20211231094817112.png",
    name: "에그마요",
    sauce: "스모크 바비큐",
    cheese: "모짜렐라 치즈",
    kcal: "450kcal",
    tip: "아보카도를 넣어 먹으세요",
    like: 5,
  },
  {
    name: "에그마요",
    sauce: "핫칠리",
    cheese: "모짜렐라 치즈",
    kcal: "450kcal",
    tip: "아보카도를 넣어 먹으세요",
    like: 3,
  },
  {
    name: "에그마요",
    sauce: "스위트 어니언",
    cheese: "모짜렐라 치즈",
    kcal: "450kcal",
    tip: "아보카도를 넣어 먹으세요",
    like: 7,
  },
  {
    name: "에그마요",
    sauce: "스모크 바비큐",
    cheese: "모짜렐라 치즈",
    kcal: "450kcal",
    tip: "아보카도를 넣어 먹으세요",
    like: 20,
  },
];
const Pop = popularSandwich.sort(function (a, b) {
  return b.like - a.like;
});

const PopularRank = Pop.splice(0, 10);

const popular = document.getElementById("popularSandwich");

function popularList(val = "") {
  popular.innerHTML = "";
  const res = PopularRank.forEach((sandwich) => {
    if (sandwich.name.includes(val)) {
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="white-cards">
          1
          </div>
        </div>
      `;
      popular.appendChild(li);
    }
  });
}
popularList();

const PopularSearchInput = document.getElementById("PopularSearch");
const PopularSearchBtn = document.getElementById("PopularBtn");

PopularSearchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const val = PopularSearchInput.value;
  console.log(val);
  popularList(val);
});

// 최선순 정렬
const newSandwich = [
  {
    name: "에그마요",
    like: 3,
    date: "2020-01-02",
  },
  {
    name: "미트볼",
    like: 5,
    date: "2020-01-04",
  },
  {
    name: "로스트 치킨",
    like: 20,
    date: "2020-01-05",
  },
];
const NewMake = newSandwich.sort(function (a, b) {
  return new Date(b.date) - new Date(a.date);
});

const NewMaking = NewMake.splice(0, 10);

const newdate = document.getElementById("newSandwich");

function newList(val = "") {
  newdate.innerHTML = "";
  const res = NewMaking.forEach((NewSandwich) => {
    if (NewSandwich.name.includes(val)) {
      const li = document.createElement("li");
      li.innerHTML = `
      <div class="white-cards">
        <p>좋아요 : ${NewSandwich.like}</p>
        <p>이름 : ${NewSandwich.name}</p>
      </div>
        
      `;
      newdate.appendChild(li);
    }
  });
}
newList();

const NewSearchInput = document.getElementById("NewSearch");
const NewSearchBtn = document.getElementById("NewBtn");

NewSearchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const val = NewSearchInput.value;
  console.log(val);
  newList(val);
});

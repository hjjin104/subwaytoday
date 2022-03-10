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
    name: "bmt",
    sauce: "핫칠리",
    cheese: "모짜렐라 치즈",
    kcal: "450kcal",
    tip: "아보카도를 넣어 먹으세요",
    like: 3,
  },
  {
    name: "blt",
    sauce: "스위트 어니언",
    cheese: "모짜렐라 치즈",
    kcal: "450kcal",
    tip: "아보카도를 넣어 먹으세요",
    like: 7,
  },
  {
    name: "미트볼",
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
        <div class="white-cards" style=" top: 95vw; left: 4vw">
          <div style="position: absolute; right: 70vw; top: 1vw; z-index: +3">
          </div>
          <!--   바 -->
          <div style="position: absolute; left: 32vw; top: 5vw">
            <img class="bar-bread" id="bar-bread"
              src="https://drive.google.com/uc?id=11X3DD4jXWBJqg5lp-qdYaDb8L7wFyOeu" />
          </div>
          <div style="position: absolute; left: 32.5vw; top: 11vw">
            <img class="bar-sauce" id="bar-sauce"
              src="https://drive.google.com/uc?id=1xgMJMT19UtQnUmG96rKRvSOjFwJX4kOt" />
          </div>
          <div style="position: absolute; left: 32.5vw; top: 15vw">
            <img class="bar-cheese" id="bar-cheese"
              src="https://drive.google.com/uc?id=1UmUNlUiUlHS6l1RxTEHImZwlBogi_olA" />
          </div>

          <!--   샌드위치 -->

          <div id="menu" class="name-div" style="position: absolute; left: 6.2vw; top: 2vw">
            <span class="name">${sandwich.name}</span>
          </div>
          <div id="bread" style="
                position: absolute;
                left: 43vw;
                top: 4.6vw;
                font-size: 2vw;
                font-weight: bold;
              ">
            플랫브래드
          </div>
          <div id="sauce" style="
                position: absolute;
                left: 44.5vw;
                top: 10.7vw;
                font-size: 1.8vw;
                font-weight: bold;
              ">
            스위트 칠리, 허니머스타드
          </div>
          <div id="cheese" style="
                position: absolute;
                left: 41.3vw;
                top: 16vw;
                font-size: 2vw;
                font-weight: bold;
              ">
            아메리칸 치즈
          </div>
          <div style="position: absolute; left: 6vw; top: 1vw">
            <img class="img-sdw" id="img-sdw"
              src="https://www.subway.co.kr/upload/menu/%EC%95%B1%EC%9A%A9_%EB%A1%9C%ED%8B%B0%EC%84%B8%EB%A6%AC_%EB%B0%94%EB%B9%84%ED%81%90_%EC%B9%98%ED%82%A8_%EC%95%84%EB%B3%B4%EC%B9%B4%EB%8F%84_15cm_%EB%8B%A8%ED%92%88_20220228055941893.png" />
          </div>

          <!--   칼로리 -->

          <div style="position: absolute; left: 5.2vw; top: 13vw">
            <img class="kcal" src="https://drive.google.com/uc?id=19qeR0F8hoSlvnYKefzSjy8Cj3ouY2Tkp" />
          </div>

          <div id="txt-kcal" style="
                position: absolute;
                left: 6vw;
                top: 15.5vw;
                font-size: 1.4vw;
                font-weight: bold;
              ">
            456kcal
          </div>

          <!--   팁박스 -->

          <div style="position: absolute; left: 4.5vw; top: 20vw; z-index: +2">
            <img class="img-tip" src="https://drive.google.com/uc?id=1G5_vQiPjjTp_I5aMpe8ZZ5ITvSmIAqPU" />
          </div>

          <div class="input-tip" style="position: absolute; left: 8vw; top: 22vw; z-index: +1"></div>

          <div id="input-tip" class="input-tip2" style="position: absolute; left: 8.5vw; top: 22.7vw; z-index: +1">
            <span>일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육</span>
          </div>

          <button style="position: absolute; top: 20vw; left: 65vw" class="btn-top10" id="btn-like" type="submit">
            <img class="img-like" src="https://drive.google.com/uc?id=1DpuLAgFekl6djt-tXoVtn0yGzfTQFYUk" />
          </button>

          <div class="nb-like" style="position: absolute; top: 21.6vw; left: 68vw; z-index: +1">
            <span id="nb-like">132</span>
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

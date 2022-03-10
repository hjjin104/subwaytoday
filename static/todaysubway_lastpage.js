 $(document).ready(function () {
                showResult();
            });

 function showResult() {
                $.ajax({
                    type: 'GET',
                    url: '/check/check',
                    data: {},
                    success: function (response) {
                        let recipes = response['all_mychoices']
                        for (let i = 0; i < recipes.length; i++) {
                            // let userid = recipes[i]['userid']
                            let sandwich = recipes[i]['sandwich']
                            let bread = recipes[i]['bread']
                            let sauce = recipes[i]['sauce']
                            let cheese = recipes[i]['cheese']
                            let comment = recipes[i]['comment']

                            let temp_html = ` <div style="position: absolute; left: 23vw; top: 3vw">
            <img
              class="img-title"
              id="img-title"
              src="https://drive.google.com/uc?id=1lQK68KG4QmEZBMWxRhUxewkMpFxeWdT3"
            />
          </div>
          <div style="position: absolute; left: 25vw; top: 7vw">
            <img
              class="bar-title"
              id="bar-title"
              src="https://drive.google.com/uc?id=1Ways8U1w59n0EtAMRI1PQkFQ_MQV4vVM"
            />
          </div>

          <!--   바 -->
          <div style="position: absolute; left: 33vw; top: 14vw">
            <img
              class="bar-bread"
              id="bar-bread"
              src="https://drive.google.com/uc?id=11X3DD4jXWBJqg5lp-qdYaDb8L7wFyOeu"
            />
          </div>
          <div style="position: absolute; left: 34.5vw; top: 19.5vw">
            <img
              class="bar-sauce"
              id="bar-sauce"
              src="https://drive.google.com/uc?id=1xgMJMT19UtQnUmG96rKRvSOjFwJX4kOt"
            />
          </div>
          <div style="position: absolute; left: 34vw; top: 24vw">
            <img
              class="bar-cheese"
              id="bar-cheese"
              src="https://drive.google.com/uc?id=1UmUNlUiUlHS6l1RxTEHImZwlBogi_olA"
            />
          </div>

          <!--   샌드위치 -->

          <div
            id="menu"
            class="name-div"
            style="position: absolute; left: 6.2vw; top: 12vw"
          >
            <span class="name">${sandwich}</span>
          </div>
          <div
            id="bread"
            style="
              position: absolute;
              left: 45vw;
              top: 13.4vw;
              font-size: 2vw;
              font-weight: bold;
            "
          >
            ${bread}
          </div>
          <div
            id="sauce"
            style="
              position: absolute;
              left: 47vw;
              top: 19vw;
              font-size: 1.8vw;
              font-weight: bold;
            "
          >
            ${sauce}
          </div>
          <div
            id="cheese"
            style="
              position: absolute;
              left: 43.8vw;
              top: 24.5vw;
              font-size: 2vw;
              font-weight: bold;
            "
          >
            ${cheese}
          </div>
          <div style="position: absolute; left: 8vw; top: 10vw">
            <img
              class="img-sdw"
              id="img-sdw"
              src="https://www.subway.co.kr/upload/menu/%EC%95%B1%EC%9A%A9_%EB%A1%9C%ED%8B%B0%EC%84%B8%EB%A6%AC_%EB%B0%94%EB%B9%84%ED%81%90_%EC%B9%98%ED%82%A8_%EC%95%84%EB%B3%B4%EC%B9%B4%EB%8F%84_15cm_%EB%8B%A8%ED%92%88_20220228055941893.png"
            />
          </div>

          <!--   칼로리 -->

          <div style="position: absolute; left: 7.2vw; top: 21vw">
            <img
                    class="kcal"
                    src="https://drive.google.com/uc?id=19qeR0F8hoSlvnYKefzSjy8Cj3ouY2Tkp"
            />
          </div>


          <!--   팁박스 -->

          <div style="position: absolute; left: 6.8vw; top: 28vw; z-index: +1;">
            <img
                    class="img-tip"
                    src="https://drive.google.com/uc?id=1G5_vQiPjjTp_I5aMpe8ZZ5ITvSmIAqPU"
            />
          </div>

          <div class="input-tip" style="position: absolute; left: 12vw; top: 30vw">
          </div>

          <div id="input-tip" class="input-tip2" style="position: absolute; left: 12vw; top: 30.7vw; z-index: +1">
            <span>${sandwich}</span> </div>

          <!--   데코 오브젝트 -->


          <div style="position: absolute; left: 6.2vw; top: 6.5vw; z-index: +1;">
            <img
                    class="img-tape"
                    src="https://drive.google.com/uc?id=1M9jF8VYSwDLTr4p7N3DF8WQEDnrfoKHw"
            />
          </div>

          <div style="position: absolute; left: 65vw; top: 27vw; z-index: +1;">
            <img
                    class="img-tape"
                    src="https://drive.google.com/uc?id=1M9jF8VYSwDLTr4p7N3DF8WQEDnrfoKHw"
            />
          </div>

          <!--   공유버튼 -->


          <button class="btn-share" id="btn-link" style="position: absolute; left: 29.2vw; top: 40vw; z-index: +1;">
            <img
                    class="img-share"
                    src="https://drive.google.com/uc?id=1FAPLC1AUmDDQWzlU8g2QK8hRkR5oTc6n"
            />
          </button>

          <button class="btn-share" id="btn-kakao" style="position: absolute; left: 36.7vw; top: 40vw; z-index: +1;">
            <img
                    class="img-share"
                    src="https://drive.google.com/uc?id=1bhbYUgEwBsw64vqD7ixAmFDHF3mZDVZg"
            />
          </button>

          <button class="btn-share" id="btn-facebook" style="position: absolute; left: 44.2vw; top: 40vw; z-index: +1;">
            <img
                    class="img-share"
                    src="https://drive.google.com/uc?id=1nmkdRjr5Mi_Xa1KtLX2gkHBHtGSZlLag"
            />
          </button>

          <button class="btn-share" id="btn-map" style="position: absolute; left: 29.2vw; top: 47.5vw; z-index: +1;">
            <img
                    class="img-map"
                    src="https://drive.google.com/uc?id=1_G__Vqbz5knvZ2XiKhIo7iFaiR2Hqzet"
            />
          </button>

          <button class="btn-share" id="btn-home" style="position: absolute; left: 29vw; top: 52vw; z-index: +1;">
            <img
                    class="img-map"
                    src="https://drive.google.com/uc?id=10To65RsDf6yVF25yIVIrtHALN5Co02bn"
            />
          </button>
`

                            $('.result-box').append(temp_html)
                        }

// function likeRecipe(userid) {
//   $.ajax({
//   type: 'POST',
//  url: '/recipe/like',
//  data: {name_give: userid},
//  success: function (response) {
//   alert(response['msg']);
//  window.location.reload()
//      }
//   });
                    }

                });
 }
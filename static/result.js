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
                            let img = recipes[i]['img']

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
          <div style="position: absolute; left: 33vw; top: 15vw">
            <img
              class="bar-bread"
              id="bar-bread"
              src="https://drive.google.com/uc?id=11X3DD4jXWBJqg5lp-qdYaDb8L7wFyOeu"
            />
          </div>
          <div style="position: absolute; left: 34.5vw; top: 20.5vw">
            <img
              class="bar-sauce"
              id="bar-sauce"
              src="https://drive.google.com/uc?id=1xgMJMT19UtQnUmG96rKRvSOjFwJX4kOt"
            />
          </div>
          <div style="position: absolute; left: 34vw; top: 25vw">
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
            style="position: absolute; left: 6.9vw; top: 13vw"
          >
            <span class="name">[${sandwich}]</span>
          </div>
          <div
            id="bread"
            style="
              position: absolute;
              left: 45vw;
              top: 14.4vw;
              font-size: 1.8vw;
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
              top: 20vw;
              font-size: 1.8vw;
              font-weight: bold;
              width: 26vw;
            "
          >
            ${sauce}
          </div>
          <div
            id="cheese"
            style="
              position: absolute;
              left: 43.8vw;
              top: 25.5vw;
              font-size: 1.8vw;
              font-weight: bold;
            "
          >
            ${cheese}
          </div>
          <div style="position: absolute; left: 8vw; top: 12vw">
            <img
              class="img-sdw"
              id="img-sdw"
              src="${img}"
            />
          </div>


          <!--   팁박스 -->

          <div style="position: absolute; left: 6.8vw; top: 29vw; z-index: +1;">
            <img
                    class="img-tip"
                    src="https://drive.google.com/uc?id=1G5_vQiPjjTp_I5aMpe8ZZ5ITvSmIAqPU"
            />
          </div>

          <div class="input-tip" style="position: absolute; left: 12vw; top: 31vw">
          </div>

          <div id="input-tip" class="input-tip2" style="position: absolute; left: 12vw; top: 31.7vw; z-index: +1">
            <span>${comment}</span> </div>

          <!--   데코 오브젝트 -->


          <div style="position: absolute; left: 2vw; top: 6.5vw; z-index: +1;">
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

           <button onclick="window.open('https://www.subway.co.kr/storeSearch')" type="button" class="btn-share" id="btn-map" style="position: absolute; left: 29.2vw; top: 47.5vw; z-index: +1;">
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
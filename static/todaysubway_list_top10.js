
//이것은 "최신순" 리스트를 위한 ajax

$(document).ready(function () {
                showRecent();
            });

 function showRecent() {
                $.ajax({
                    type: 'GET',
                    url: '/listing',
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

                            // 여기에 최신순 탭 리스트에 들어갈 html뼈대 붙이면 됩니다
                            let temp_html = ` <div style="position: absolute; left: 23vw; top: 3vw">`

                            $('.result-box').append(temp_html)
                        }
                    }

                });
 }
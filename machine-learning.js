    // More API functions here:
    // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

    // the link to your model provided by Teachable Machine export panel
    const URL = "./my_model/";

    let model, webcam, labelContainer, maxPredictions;

    // Load the image model and setup the webcam
    async function init() {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // or files from your local hard drive
        // Note: the pose library adds "tmImage" object to your window (window.tmImage)
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Convenience function to setup a webcam

        // append elements to the DOM
        labelContainer = document.getElementById("label-container");
        for (let i = 0; i < 5; i++) { // and class labels
            labelContainer.appendChild(document.createElement('span'));
        }
    }

    // run the webcam image through the image model
    async function predict() {
        // predict can take in an image, video or canvas html element
        var image = document.getElementById('face-image')
        const prediction = await model.predict(image, false);
        const celebrity = document.getElementById('match_who');
        const description = document.getElementById('discription');
        prediction.sort(function(a, b) {
            return parseFloat(b.probability) - parseFloat(a.probability);
        });
        switch(prediction[0].className){
                case "빌리 아일리시":
                    celebrity.innerText = '당신은 빌리 아일리시와\n ' + prediction[0].probability.toFixed(2)*100 + '%로 가장 닮았습니다!';
                    description.innerHTML = "<a target='_blank' href='https://www.youtube.com/channel/UCiGm_E4ZwYSHV3bcW1pnSeQ'>빌리 아일리시 알아보기</a><br><p>18세의 어린 나이로 세계스타 반열에 오른 뛰어난 재능의 아티스트, 빌리 아일리시입니다!<br>뛰어난 음색과 표현력으로 인기가 하루하루 치솟고 있는 스타입니다!"
                    break;
                case "부르노 마스":
                    celebrity.innerText = '당신은 부르노 마스와\n ' + prediction[0].probability.toFixed(2)*100 + '%로 가장 닮았습니다!';
                    description.innerHTML = "<a target='_blank' href='https://www.youtube.com/channel/UCoUM-UJ7rirJYP8CQ0EIaHA'>부르노 마스 알아보기</a><br><p>Uptown Funk, Count on me 등을 부른 세계적인 아티스트, 부르노 마스입니다!<br>수많은 인기를 누리고 있는 아티스트인 만큼 노래도 좋답니다!";
                    break;
                case "저스틴 비버":
                    celebrity.innerText = '당신은 저스틴 비버와\n ' + prediction[0].probability.toFixed(2)*100 + '%로 가장 닮았습니다!';
                    description.innerHTML = "<a target='_blank' href='https://www.youtube.com/user/kidrauhl'>저스틴 비버 알아보기</a><br><p>15세의 어린 나이로 데뷔해 지금도 활동을 이어가고 있는 세게적인 스타, 저스틴 비버입니다!<br>굉장한 팬덤을 보유하고 있는 유명한 아티스트랍니다!";
                    break;
                case "카디 비":
                    celebrity.innerText = '당신은 카디 비와\n ' + prediction[0].probability.toFixed(2)*100 + '%로 가장 닮았습니다!';
                    description.innerHTML = "<a target='_blank' href='https://www.youtube.com/channel/UCxMAbVFmxKUVGAll0WVGpFw'>카디 비 알아보기</a><br><p>최근 WAP이라는 곡으로 폭발적인 인기를 끌고 있는 래퍼, 카디 비입니다!!<br>하루하루 굉장히 가파른 상승세를 보이고 있는 유명한 아티스트랍니다!";
                    break;
                case "마이클 잭슨":
                    celebrity.innerText = '당신은 마이클 잭슨\n ' + prediction[0].probability.toFixed(2)*100 + '%로 가장 닮았습니다!';
                    description.innerHTML = "<a target='_blank' href='https://www.youtube.com/user/michaeljackson'>마이클 잭슨 알아보기</a><br><p>지금은 죽었지만 살아생전 엄청난 인기를 끌었던 세계적인 아티스트, 마이클 잭슨입니다!<br>정말 전 세계적으로 모르는 사람이 없을 정도로 굉장히 인기있는 가수입니다!";
                    break;
                case "찰리 푸스":
                    celebrity.innerText = '당신은 찰리 푸스와\n ' + prediction[0].probability.toFixed(2)*100 + '%로 가장 닮았습니다!';
                    description.innerHTML = "<a target='_blank' href='https://www.youtube.com/user/CharliesVlogs'>찰리 푸스 알아보기</a><br><p>We don't talk anymore 을 부른 세계적인 아티스트, 찰리 푸스입니다!<br>뛰어난 음색으로 여심을 저격하는 아티스트입니다!";
                    break;
                case "에드시런":
                    celebrity.innerText = '당신은 에드시런\n ' + prediction[0].probability.toFixed(2)*100 + '%로 가장 닮았습니다!';
                    description.innerHTML = "<a target='_blank' href='https://www.youtube.com/user/EdSheeran'>에드시런 알아보기</a><br><p>shape of you 를 부른 세게적인 아티스트, 에드시런입니다!<br>뛰어난 음색을 바탕으로 엄청난 인기를 누리고 있는 아티스트입니다!";
                    break;
                case "할시":
                    celebrity.innerText = '당신은 할시와\n ' + prediction[0].probability.toFixed(2)*100 + '%로 가장 닮았습니다!';
                    description.innerHTML = "<a target='_blank' href='https://www.youtube.com/user/iamhalsey'>할시 알아보기</a><br><p>최근 BTS와의 콜라보로 익숙한 아티스트, 할시입니다!<br>BTS와의 콜라보로 한국 팬들과 전세계의 사랑을 받았던 아티스트입니다!";
                    break;
                case "핀 울프하드":
                    celebrity.innerText = '당신은 핀 울프하드와\n ' + prediction[0].probability.toFixed(2)*100 + '%로 가장 닮았습니다!';
                    description.innerHTML = "<a target='_blank' href='https://www.youtube.com/channel/UCJnit-cbjIZuEqDcJFLWvxQ'>핀 울프하드 알아보기</a><br><p>연기, 노래, 얼굴 어느 하나 모자란 것 없는 아티스트, 핀 울프하드입니다!<br>기묘한 이야기로 유명해져 현재 Calpurnia 라는 밴드에서 활동하고 있는 아티스트입니다!";
                    break;
                case "앤 마리":
                    celebrity.innerText = '당신은 앤 마리와\n ' + prediction[0].probability.toFixed(2)*100 + '%로 가장 닮았습니다!';
                    description.innerHTML = "<a target='_blank' href='https://www.youtube.com/user/OfficiallyAnneMarie'>앤 마리 알아보기</a><br><p>2002, Birthday등을 부른 아티스트, 앤 마리입니다!<br>뛰어난 음색으로 굉장한 인기를 얻고있는 세계적인 아티스트입니다!";
                    break;
                case "루이스 폰시":
                    celebrity.innerText = '당신은 루이스 폰시와\n ' + prediction[0].probability.toFixed(2)*100 + '%로 가장 닮았습니다!';
                    description.innerHTML = "<a target='_blank' href='https://www.youtube.com/user/LuisFonsiVivo'>루이스 폰시 알아보기</a><br><p>despacito를 부른 푸에르토리코의 아티스트, 루이스 폰시입니다!<br>느끼하지만 중독되는 기묘한 매력의 아티스트입니다! 뒈스빠씨또~";
                    break;
                case "두아 리파":
                    celebrity.innerText = '당신은 두아 리파와\n ' + prediction[0].probability.toFixed(2)*100 + '%로 가장 닮았습니다!';
                    description.innerHTML = "<a target='_blank' href='https://www.youtube.com/user/DuaLipa1'>두아 리파 알아보기</a><br><p>강한 음색을 가진 세계스타, 두아 리파입니다!<br>뛰어난 음색으로 인기가 하루하루 치솟고 있는 스타입니다!";
                    break;
                case "아리아나 그란데":
                    celebrity.innerText = '당신은 아리아나 그란데와\n ' + prediction[0].probability.toFixed(2)*100 + '%로 가장 닮았습니다!';
                    description.innerHTML = "<a target='_blank' href='https://www.youtube.com/user/osnapitzari'>아리아나 그란데 알아보기</a><br><p>천사의 얼굴, 아리아나 그란데입니다!<br>뛰어난 음색과 천사같은 얼굴로 엄청난 인기를 누리고 있는 아티스트입니다!!";
                    break;
                case "케이티 페리":
                    celebrity.innerText = '당신은 케이티 페리와\n ' + prediction[0].probability.toFixed(2)*100 + '%로 가장 닮았습니다!';
                    description.innerHTML = "<a target='_blank' href='https://www.youtube.com/user/KatyPerryMusic'>케이티 페리 알아보기</a><br><p>완벽한 목소리의 소유자, 케이티 페리입니다!<br>엄청난 음색을 가진 세계적인 아티스트입니다!";
                case "샘 스미스":
                    celebrity.innerText = '당신은 샘 스미스와\n ' + prediction[0].probability.toFixed(2)*100 + '%로 가장 닮았습니다!';
                    description.innerHTML = "<a target='_blank' href='https://www.youtube.com/user/samsmithworld'>샘 스미스 알아보기</a><br><p>완벽한 목소리의 소유자, 샘 스미스입니다!<br>여심을 사로잡는 엄청난 음색으로 엄청난 인기를 누리고 있는 아티스트입니다!";
                    break;
                default:
            }
        var barWidth;
        for (let i = 0; i < 5; i++) {
            if (prediction[i].probability.toFixed(2) > 0.1) {
                barWidth = Math.round(prediction[i].probability.toFixed(2) * 100) + "%";
            } else if (prediction[i].probability.toFixed(2) >= 0.01) {
                barWidth = "10%"
            } else {
                barWidth = "5%"
            }
            var labelTitle;
            switch (prediction[i].className) {
                case "빌리 아일리시":
                    labelTitle = "빌리 아일리시"
                    break;
                case "부르노 마스":
                    labelTitle = "부르노 마스"
                    break;
                case "저스틴 비버":
                    labelTitle = "저스틴 비버"
                    break;
                case "카디 비":
                    labelTitle = "카디 비"
                    break;
                case "마이클 잭슨":
                    labelTitle = "마이클 잭슨"
                    break;
                case "찰리 푸스":
                    labelTitle = "찰리 푸스"
                    break;
                case "에드시런":
                    labelTitle = "에드시런"
                    break;
                case "할시":
                    labelTitle = "할시"
                    break;
                case "핀 울프하드":
                    labelTitle = "핀 울프하드"
                    break;
                case "앤 마리":
                    labelTitle = "앤 마리"
                    break;
                case "루이스 폰시":
                    labelTitle = "루이스 폰시"
                    break;
                case "두아 리파":
                    labelTitle = "두아 리파"
                    break;
                case "아리아나 그란데":
                    labelTitle = "아리아나 그란데"
                    break;
                case "케이티 페리":
                    labelTitle = "케이티 페리"
                    break;
                case "샘 스미스":
                    labelTitle = "샘 스미스"
                    break;
                default:
                    labelTitle = "알수없음"
            }
            var label = "<div class='animal-label d-flex align-items-center'>" + labelTitle + "</div>"
            var bar = "<div class='bar-container position-relative container'><div class='" + prediction[i].className + "-box'></div><div class='d-flex justify-content-center align-items-center " + prediction[i].className + "-bar' style='width: " + barWidth + "'><span class='d-block percent-text'>" + Math.round(prediction[i].probability.toFixed(2) * 100) + "%</span></div></div>"
            labelContainer.childNodes[i].innerHTML = label + bar;
        }
    }
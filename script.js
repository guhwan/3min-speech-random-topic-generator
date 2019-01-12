const randomButton = document.getElementById('random-button')
var text = ['목표', '사랑', '인생의 터닝포인트', '추천할만한 휴가 여행지', '내가 만약 1억이 있다면 무엇을 하고 싶은가?', '친구와 재미있었던 경험담', '장래희망', '꿈', '미래', '옷을 잘 입는 방법', '가장 가보고 싶은 여행지와 그 이유는?', '나의 취미생활', ' 추천하는 음식점', '얼굴에서 가장 매력적인 부분',
'성공', '행복', '가치관', '내가 존경하는 사람과 이유', '나만의 스트레스 해소방법', '생일날 받고 싶은 선물', '나만의 독서비법']
const displayBox = document.getElementById('random-word')

function makeWord() {
    displayBox.innerHTML = text[Math.floor(Math.random()*text.length)]
}

randomButton.addEventListener('click', makeWord)
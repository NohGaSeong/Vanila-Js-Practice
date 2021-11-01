
let answer = document.getElementById("answer-input");
let question = document.getElementById("question");
let i = 0;
let now = new Date();
let month = now.getMonth() + 1;
let date = now.getDate();
let year = now.getFullYear();

document.getElementById("prev-btn").addEventListener("click", handlePrev);
document.getElementById("next-btn").addEventListener("click", handleNext);
document.getElementById("save-btn").addEventListener("click", handleSave);

/**
 * 저장 버튼 클릭 함수
 */
function handleSave() {
    localStorage.setItem(String(month) + String(date), answer.value);
}

function look() {
    answer. value= localStorage.getItem(String(month) + String(date));
}
/**
 * 오른쪽 화살표 버튼 클릭 함수
 */
function handleNext() {
    date = date + 1;
    if (date === new Date(year, month, 0).getDate() + 1) {
        date = 1;
        if (month === 12) {
            month = 0;
        }
        month = month + 1;
    }
    document.getElementById("month").innerText = month;
    document.getElementById("day").innerText = date;
    look();
    fetchData();
}

/**
 * 왼쪽 화살표 버튼 클릭 함수
 */
function handlePrev() {
    date = date - 1;
    if (date === 0) {
        month = month - 1;
        date = new Date(year, month, 0).getDate();
        if (month === 0) {
            month = 12;
        }
    }
    document.getElementById("month").innerText = month;
    document.getElementById("day").innerText = date;
    look();
    fetchData();
}

function fetchData(){
    fetch("./db/data.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        for (let i = 0; i < data.questions.length; i++) {
            if (String(month) + String(date) === data.questions[i].id) {
                question.innerText = data.questions[i].question;
            }
        }
    })
}

/**
 * 서비스 초기화 함수
 */
function init() {
    fetchData();
    document.getElementById("month").innerText = month;
    document.getElementById("day").innerText = date;
   
}
init();
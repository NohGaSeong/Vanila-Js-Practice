let date = new Date();
let currentMonth = date.getMonth()+1;
let currentDate = date.getUTCDate();
let list = [31,28,31,30,31,30,31,31,30,31,30,31];
let current = String(currentMonth)+currentDate;
let question;
let dataArr;

let prevBtn = document.querySelector("#prev-btn");
let nextBtn = document.querySelector("#next-btn");
let saveBtn = document.querySelector("#save-btn");

prevBtn.addEventListener("click", handlePrev);
nextBtn.addEventListener("click", handleNext);
saveBtn.addEventListener("click", handleSave);

import {getAnswer,setAnswer } from './utils/storage.js';


/**
 * 저장 버튼 클릭 함수
 */
function handleSave() { 
    setAnswer(answerkey,answerInput.value);
}

/**
 * 오른쪽 화살표 버튼 클릭 함수
 */
function handleNext() {
    if (currentDate == list[currentMonth-1]) {
        currentMonth++;
        currentDate=1;
    } else {
        currentDate++;
    }
    checkDate(currentMonth,currentDate);
    printDate();
}

/**
 * 왼쪽 화살표 버튼 클릭 함수
 */
function handlePrev() {
    if (currentDate == 1) {
        currentMonth--;
        currentDate=list[currentMonth-1];
    } else {
        currentDate--;
    }
    checkDate(currentMonth,currentDate);
    printDate();
}

/**
 * 서비스 초기화 함수
 */
function init() {
    fetch("../db/data.json")
    .then(response => response.json())
    .then(datas =>{ 
        datas = datas.questions;
        dataArr = datas;
        printDate();
        });
    }


function printDate() {
    dataArr.forEach(data => {
        if (data.id === current) {
            question = data.question;
        }
        document.querySelector("#month").innerText = currentMonth;
        document.querySelector("#day").innerText = currentDate;
        document.querySelector("#question").innerText = question;
    });
}

function checkDate(currentMonth,currentDate) {
    if (currentMonth<10) {
        currentMonth = "0"+currentMonth;
    }
    if (currentDate<10) {
        currentDate = "0"+currentDate;
    }
    current = String(currentMonth)+currentDate;
    console.log(current)
}

init();

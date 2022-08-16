const dailyBtn = document.querySelector(".timing li:nth-child(1) a");
const weeklyBtn = document.querySelector(".timing li:nth-child(2) a");
const monthlyBtn = document.querySelector(".timing li:nth-child(3) a");
const linksArray = [dailyBtn, weeklyBtn, monthlyBtn];

const workCurrent = document.querySelector(".work p:first-of-type");
const workPrevious = document.querySelector(".work p:last-of-type span");
const playCurrent = document.querySelector(".play p:first-of-type");
const playPrevious = document.querySelector(".play p:last-of-type span");
const studyCurrent = document.querySelector(".study p:first-of-type");
const studyPrevious = document.querySelector(".study p:last-of-type span");
const exerciseCurrent = document.querySelector(".exercise p:first-of-type");
const exercisePrevious = document.querySelector(
  ".exercise p:last-of-type span"
);
const socialCurrent = document.querySelector(".social p:first-of-type");
const socialPrevious = document.querySelector(".social p:last-of-type span");
const selfCareCurrent = document.querySelector(".self-care p:first-of-type");
const selfCarePrevious = document.querySelector(
  ".self-care p:last-of-type span"
);

async function getData() {
  const response = await fetch("data.json");
  const data = await response.json();
  console.log(data[0].timeframes);

  // Add Daily Data
  dailyData(data);
  // Add Weekly Data
  weeklyData(data);
  // Add Monthly Data
  monthlyData(data);
}

function dailyData(data) {
  dailyBtn.addEventListener("click", () => {
    // Add Class Active In Daily Button
    linksArray.forEach((link) => {
      link.classList.remove("active");
    });
    dailyBtn.classList.add("active");
    // Append Data From Json File To The DOM
    workCurrent.innerHTML = `${data[0].timeframes.daily.current} hrs`;
    workPrevious.innerHTML = `${data[0].timeframes.daily.previous} hrs`;
    playCurrent.innerHTML = `${data[1].timeframes.daily.current} hrs`;
    playPrevious.innerHTML = `${data[1].timeframes.daily.previous} hrs`;
    studyCurrent.innerHTML = `${data[2].timeframes.daily.current} hrs`;
    studyPrevious.innerHTML = `${data[2].timeframes.daily.previous} hrs`;
    exerciseCurrent.innerHTML = `${data[3].timeframes.daily.current} hrs`;
    exercisePrevious.innerHTML = `${data[3].timeframes.daily.previous} hrs`;
    socialCurrent.innerHTML = `${data[4].timeframes.daily.current} hrs`;
    socialPrevious.innerHTML = `${data[4].timeframes.daily.previous} hrs`;
    selfCareCurrent.innerHTML = `${data[5].timeframes.daily.current} hrs`;
    selfCarePrevious.innerHTML = `${data[5].timeframes.daily.previous} hrs`;
  });
}

function weeklyData(data) {
  weeklyBtn.addEventListener("click", () => {
    // Add Class Active In Weekly Button
    linksArray.forEach((link) => {
      link.classList.remove("active");
    });
    weeklyBtn.classList.add("active");
    // Append Data From Json File To The DOM
    workCurrent.innerHTML = `${data[0].timeframes.weekly.current} hrs`;
    workPrevious.innerHTML = `${data[0].timeframes.weekly.previous} hrs`;
    playCurrent.innerHTML = `${data[1].timeframes.weekly.current} hrs`;
    playPrevious.innerHTML = `${data[1].timeframes.weekly.previous} hrs`;
    studyCurrent.innerHTML = `${data[2].timeframes.weekly.current} hrs`;
    studyPrevious.innerHTML = `${data[2].timeframes.weekly.previous} hrs`;
    exerciseCurrent.innerHTML = `${data[3].timeframes.weekly.current} hrs`;
    exercisePrevious.innerHTML = `${data[3].timeframes.weekly.previous} hrs`;
    socialCurrent.innerHTML = `${data[4].timeframes.weekly.current} hrs`;
    socialPrevious.innerHTML = `${data[4].timeframes.weekly.previous} hrs`;
    selfCareCurrent.innerHTML = `${data[5].timeframes.weekly.current} hrs`;
    selfCarePrevious.innerHTML = `${data[5].timeframes.weekly.previous} hrs`;
  });
}

function monthlyData(data) {
  monthlyBtn.addEventListener("click", () => {
    // Add Class Active In Monthly Button
    linksArray.forEach((link) => {
      link.classList.remove("active");
    });
    monthlyBtn.classList.add("active");
    // Append Data From Json File To The DOM
    workCurrent.innerHTML = `${data[0].timeframes.monthly.current} hrs`;
    workPrevious.innerHTML = `${data[0].timeframes.monthly.previous} hrs`;
    playCurrent.innerHTML = `${data[1].timeframes.monthly.current} hrs`;
    playPrevious.innerHTML = `${data[1].timeframes.monthly.previous} hrs`;
    studyCurrent.innerHTML = `${data[2].timeframes.monthly.current} hrs`;
    studyPrevious.innerHTML = `${data[2].timeframes.monthly.previous} hrs`;
    exerciseCurrent.innerHTML = `${data[3].timeframes.monthly.current} hrs`;
    exercisePrevious.innerHTML = `${data[3].timeframes.monthly.previous} hrs`;
    socialCurrent.innerHTML = `${data[4].timeframes.monthly.current} hrs`;
    socialPrevious.innerHTML = `${data[4].timeframes.monthly.previous} hrs`;
    selfCareCurrent.innerHTML = `${data[5].timeframes.monthly.current} hrs`;
    selfCarePrevious.innerHTML = `${data[5].timeframes.monthly.previous} hrs`;
  });
}

getData();

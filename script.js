//점수 계산
function cac() {
  document.getElementById("change_score_res").value = null;
  var v_major = document.getElementById("major_line").value;
  var v_kor = Number(document.getElementById("kor").value);
  var v_math = Number(document.getElementById("math").value);
  var v_eng = Number(document.getElementById("eng").value);
  var v_hist = Number(document.getElementById("hist").value);
  var v_tam1 = Number(document.getElementById("tam1").value);
  var v_tam2 = Number(document.getElementById("tam2").value);
  var res = 0;

  if (!v_kor || !(0 <= v_kor && v_kor <= 200)) {
    alert("국어 표준점수를 확인해주세요!");
  } else if (!v_math || !(0 <= v_math && v_math <= 200)) {
    alert("수학 표준점수를 확인해주세요!");
  } else if (!v_eng || !(1 <= v_eng && v_eng <= 9)) {
    alert("영어 등급을 확인해주세요!");
  } else if (!v_hist || !(1 <= v_hist && v_hist <= 9)) {
    alert("역사 등급을 확인해주세요!");
  } else if (!v_tam1 || !(0 <= v_tam1 && v_tam1 <= 100)) {
    alert("탐구1 표준 점수를 확인해주세요!");
  } else if (!v_tam2 || !(0 <= v_tam2 && v_tam2 <= 100)) {
    alert("탐구2 표준 점수를 확인해주세요!");
  } else {
    res += 200 - 10 * (v_eng - 1);
    if (v_hist <= 4) res += 10;
    else res += 10 - (v_hist - 4) * 0.2;
    if (v_major == "인문사회계") {
      res += v_kor * 1.5;
      res += v_math * 1.25;
      res += v_tam1 * 1.25;
      res += v_tam2 * 1.25;
    } else if (v_major == "자연계") {
      res += v_kor * 1;
      res += v_math * 1.5;
      res += v_tam1 * 1.5;
      res += v_tam2 * 1.5;
    }
    res = res.toFixed(2);
    document.getElementById("change_score_res").value = res;
  }
}

//초기화
function reset() {
  document.getElementById("kor").value = null;
  document.getElementById("math").value = null;
  document.getElementById("eng").value = null;
  document.getElementById("hist").value = null;
  document.getElementById("tam1").value = null;
  document.getElementById("tam2").value = null;
  document.getElementById("change_score_res").value = null;
  document.getElementById("major_aver_score").value = null;
  document.getElementById("answer").value = null;
  document.getElementById("major_line").value = null;
}

//과 선택 뒤 환산점수와 비교
function show_major() {
  document.getElementById("answer").value = null;
  fetch("Busan_Univ.csv")
    .then((response) => response.text())
    .then((data) => {
      const parsedData = Papa.parse(data).data;
      const select = document.getElementById("major_select");
      const selectedIndex = select.selectedIndex;
      document.getElementById("major_line").value = parsedData[selectedIndex + 1][0];
      document.getElementById("major_aver_score").value = parsedData[selectedIndex + 1][7];
    });
}

function show_res() {
  if (document.getElementById("change_score_res").value == "") {
    alert("환산 점수를 계산해주세요!");
  } else {
    if (
      document.getElementById("change_score_res").value >
      document.getElementById("major_aver_score").value
    ) {
      document.getElementById("answer").value = "평균이상";
    } else document.getElementById("answer").value = "평균이하";
  }
}

function hum_soci() {
  //인문사회계열
}
function cac() {
  //점수 불러오기
  document.getElementById("change_score_res").value = null;
  var v_major = document.querySelector('input[name="major"]:checked').value;
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
    //점수 계산
    res += 200 - 10 * (v_eng - 1);
    if (v_hist <= 4) res += 10;
    else res += 10 - (v_hist - 4) * 0.2;
    if (v_major == "m_kor") {
      res += v_kor * 1.5;
      res += v_math * 1.25;
      res += v_tam1 * 1.25;
      res += v_tam2 * 1.25;
    } else {
      res += v_kor * 1;
      res += v_math * 1.5;
      res += v_tam1 * 1.5;
      res += v_tam2 * 1.5;
    }
    res = res.toFixed(2);
    document.getElementById("change_score_res").value = res;
  }
}

function reset() {
  document.getElementById("change_score_res").value = null;
  var major_radio = document.querySelector("input[type=radio][name=major]:checked");
  major_radio.checked = false;
  document.getElementById("kor").value = null;
  document.getElementById("math").value = null;
  document.getElementById("eng").value = null;
  document.getElementById("hist").value = null;
  document.getElementById("tam1").value = null;
  document.getElementById("tam2").value = null;
}

function show_res() {
  document.getElementById("answer").value = null;
  fetch("Busan_Univ.csv")
    .then((response) => response.text())
    .then((data) => {
      const parsedData = Papa.parse(data).data;
      const select = document.getElementById("major_select");
      const selectedIndex = select.selectedIndex;
      document.getElementById("major_aver_score").value = parsedData[selectedIndex + 1][7];
      if (
        document.getElementById("change_score_res").value >
        document.getElementById("major_aver_score").value
      ) {
        document.getElementById("answer").value = "평균이상";
      } else document.getElementById("answer").value = "평균이하";
    });
}

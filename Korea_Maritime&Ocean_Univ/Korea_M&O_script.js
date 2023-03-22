function read_csv() {
  fetch("Korea_M&O_csv.csv")
    .then((response) => response.text())
    .then((data) => {
      const parsedData = Papa.parse(data).data;
      const select = document.getElementById("major_select");
      // "과 선택" 옵션을 추가합니다.
      const defaultOption = document.createElement("option");
      defaultOption.text = "과 선택";
      defaultOption.disabled = true;
      defaultOption.selected = true;
      select.appendChild(defaultOption);
      // 첫 번째 행은 헤더로 사용되므로 제외합니다.
      for (let i = 1; i < parsedData.length; i++) {
        const option = document.createElement("option");
        option.value = parsedData[i][0];
        option.text = parsedData[i][1];
        select.appendChild(option);
      }
    });
}

//초기화
function reset() {
  document.getElementById("kor").value = null;
  document.getElementById("math").value = null;
  document.getElementById("eng").value = null;
  document.getElementById("hist").value = null;
  document.getElementById("tam1").value = null;
  document.getElementById("tam2").value = null;
  document.getElementById("kor_grade").value = null;
  document.getElementById("math_grade").value = null;
  document.getElementById("tam1_grade").value = null;
  document.getElementById("tam2_grade").value = null;
  document.getElementById("change_score_res").innerHTML = "환산 점수 : ";
  document.getElementById("major_aver_score").value = null;
  document.getElementById("major_70_score").value = null;
  document.getElementById("answer").value = null;
}

//과 선택
function show_major() {
  document.getElementById("answer").value = null;
  fetch("Korea_M&O_csv.csv")
    .then((response) => response.text())
    .then((data) => {
      const parsedData = Papa.parse(data).data;
      const select = document.getElementById("major_select");
      const selectedIndex = select.selectedIndex;
      document.getElementById("major").value = parsedData[selectedIndex][1];
      document.getElementById("major_line").value = parsedData[selectedIndex][0];
      document.getElementById("major_aver_score").value = parsedData[selectedIndex][6];
      document.getElementById("major_70_score").value = parsedData[selectedIndex][7];
      document.getElementById("add_Univ").value = parsedData[selectedIndex][9];
      document.getElementById("v1").innerHTML = parsedData[selectedIndex][2];
      document.getElementById("v2").innerHTML = parsedData[selectedIndex][3];
      document.getElementById("v3").innerHTML = parsedData[selectedIndex][4];
      document.getElementById("v4").innerHTML = parsedData[selectedIndex][5];
      document.getElementById("v5").innerHTML = parsedData[selectedIndex][8];
    });
}

//점수 계산
function cac() {
  document.getElementById("change_score_res").innerHTML = "환산 점수 : ";
  var v_major_line = document.getElementById("major_line").value;
  var v_major = document.getElementById("major").value;
  var v_kor = Number(document.getElementById("kor").value);
  var v_math = Number(document.getElementById("math").value);
  var v_eng = Number(document.getElementById("eng").value);
  var v_hist = Number(document.getElementById("hist").value);
  var v_tam1 = Number(document.getElementById("tam1").value);
  var v_tam2 = Number(document.getElementById("tam2").value);
  var v_add_Univ = document.getElementById("add_Univ").value;
  var res = 0;
  //선택과목관련
  const v_math_select = document.getElementById("math_select").value;
  var v_tam1_select = document.getElementById("tam1_select").value;
  var v_tam2_select = document.getElementById("tam2_select").value;
  const v_tam1_label = document.getElementById("tam1_select").options[document.getElementById("tam1_select").selectedIndex].parentNode.label;
  const v_tam2_label = document.getElementById("tam2_select").options[document.getElementById("tam2_select").selectedIndex].parentNode.label;

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
  } else if (v_tam1_select == v_tam2_select) {
    alert("탐구 과목 2개가 같은 과목입니다!");
  } else {
    kor_grade_cac();
    math_grade_cac();
    tam1_grade_cac();
    tam2_grade_cac();
    if (v_major_line == "예체능") {
      if (v_eng == 1) v_eng = 280;
      else if (v_eng == 2) v_eng = 274.4;
      else if (v_eng == 3) v_eng = 266;
      else if (v_eng == 4) v_eng = 252;
      else if (v_eng == 5) v_eng = 224;
      else if (v_eng == 6) v_eng = 196;
      else if (v_eng == 7) v_eng = 168;
      else if (v_eng == 9) v_eng = 140;
      else v_eng = 112;
    } else {
      if (v_eng == 1) v_eng = 200;
      else if (v_eng == 2) v_eng = 196;
      else if (v_eng == 3) v_eng = 190;
      else if (v_eng == 4) v_eng = 180;
      else if (v_eng == 5) v_eng = 160;
      else if (v_eng == 6) v_eng = 140;
      else if (v_eng == 7) v_eng = 120;
      else if (v_eng == 9) v_eng = 100;
      else v_eng = 80;
    }

    if (v_hist < 7) {
      res += 3 - (v_hist - 1) * 0.5;
    }
    //가산점
    if (v_major_line == "자연계") {
      if (v_add_Univ == "해사대학" && v_major != "해양경찰학부(기관전공)" && v_major != "해양경찰학부(항해전공)") {
        if (v_math_select == "미적분") v_math *= 1.1;
      } else if (v_add_Univ == "해양과학기술융합대학" && v_major != "해양스포츠과학과") {
        if (v_math_select == "미적분") v_math *= 1.2;
        if (v_tam1_label == "과학탐구" && v_tam2_label == "과학탐구") {
          v_tam1 *= 1.1;
          v_tam2 *= 1.1;
        }
      }
    }

    if (v_major_line == "인문·사회계") {
      res += (v_kor * 4 * 32.5) / 100;
      res += (v_math * 4 * 32.5) / 100;
      res += v_eng;
      res += (v_tam1 * 4 * 20) / 100;
      res += (v_tam2 * 4 * 20) / 100;
      res = res.toFixed(2);
      document.getElementById("change_score_res").innerHTML += res;
    } else if (v_major_line == "자연계") {
      res += (v_kor * 4 * 22.5) / 100;
      res += (v_math * 4 * 32.5) / 100;
      res += v_eng;
      res += (v_tam1 * 4 * 20) / 100;
      res += (v_tam2 * 4 * 20) / 100;
      res = res.toFixed(2);
      document.getElementById("change_score_res").innerHTML += res;
    } else if (v_major_line == "예체능") {
      let largest1 = -Infinity;
      let largest2 = -Infinity;

      if (v_kor > largest1) {
        largest2 = largest1;
        largest1 = v_kor;
      } else if (v_kor > largest2) {
        largest2 = v_kor;
      }

      if (v_math > largest1) {
        largest2 = largest1;
        largest1 = v_math;
      } else if (v_math > largest2) {
        largest2 = v_math;
      }

      if (v_eng > largest1) {
        largest2 = largest1;
        largest1 = v_eng;
      } else if (v_eng > largest2) {
        largest2 = v_eng;
      }
      res += (largest1 * 4 * 35) / 100;
      res += (largest2 * 4 * 35) / 100;
      res += ((v_tam1 + v_tam2) * 4 * 30) / 100;
      res = res.toFixed(2);
      document.getElementById("change_score_res").innerHTML += res;
    } else {
      alert("에러! 알수없는 계열정보");
    }
  }
}

//결과 출력
function show_res() {
  var input_res = document.getElementById("change_score_res").innerHTML;
  var input_aver = document.getElementById("major_aver_score").value;
  var input_70 = document.getElementById("major_70_score").value;
  if (input_res == "") {
    alert("환산 점수를 계산해주세요!");
  } else {
    if (input_res >= input_aver) {
      document.getElementById("answer").value = "평균이상";
    } else if (input_res >= input_70) {
      document.getElementById("answer").value = "70% 이상";
    } else document.getElementById("answer").value = "70% 미만";
  }
}

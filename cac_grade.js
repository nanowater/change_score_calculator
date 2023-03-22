function kor_grade_cac() {
  var v_kor = Number(document.getElementById("kor").value);
  const v_kor_select = document.getElementById("kor_select").value;
  var v_kor_grade = 9;
  if (v_kor_select == "화법과 작문") {
    if (v_kor >= 131) v_kor_grade = 1;
    else if (v_kor >= 124) v_kor_grade = 2;
    else if (v_kor >= 116) v_kor_grade = 3;
    else if (v_kor >= 108) v_kor_grade = 4;
    else if (v_kor >= 97) v_kor_grade = 5;
    else if (v_kor >= 84) v_kor_grade = 6;
    else if (v_kor >= 71) v_kor_grade = 7;
    else if (v_kor >= 62) v_kor_grade = 8;
    else v_kor_grade = 9;
  } else if (v_kor_select == "언어와 매체") {
    if (v_kor >= 131) v_kor_grade = 1;
    else if (v_kor >= 124) v_kor_grade = 2;
    else if (v_kor >= 116) v_kor_grade = 3;
    else if (v_kor >= 108) v_kor_grade = 4;
    else if (v_kor >= 97) v_kor_grade = 5;
    else if (v_kor >= 84) v_kor_grade = 6;
    else if (v_kor >= 71) v_kor_grade = 7;
    else if (v_kor >= 62) v_kor_grade = 8;
    else v_kor_grade = 9;
  }
  document.getElementById("kor_grade").value = v_kor_grade + "등급";
}

function math_grade_cac() {
  var v_math = Number(document.getElementById("math").value);
  var v_math_grade = -1;
  if (v_math >= 137) v_math_grade = 1;
  else if (v_math >= 127) v_math_grade = 2;
  else if (v_math >= 117) v_math_grade = 3;
  else if (v_math >= 106) v_math_grade = 4;
  else if (v_math >= 92) v_math_grade = 5;
  else if (v_math >= 81) v_math_grade = 6;
  else if (v_math >= 75) v_math_grade = 7;
  else if (v_math >= 71) v_math_grade = 8;
  else v_math_grade = 9;
  document.getElementById("math_grade").value = v_math_grade + "등급";
}

function tam1_grade_cac() {
  var v_tam1 = Number(document.getElementById("tam1").value);
  const v_tam1_select = document.getElementById("tam1_select").value;
  var v_tam1_grade = 9;

  if (v_tam1_select == "생활과 윤리") {
    if (v_tam1 >= 64) v_tam1_grade = 1;
    else if (v_tam1 >= 62) v_tam1_grade = 2;
    else if (v_tam1 >= 60) v_tam1_grade = 3;
    else if (v_tam1 >= 54) v_tam1_grade = 4;
    else if (v_tam1 >= 47) v_tam1_grade = 5;
    else if (v_tam1 >= 41) v_tam1_grade = 6;
    else if (v_tam1 >= 36) v_tam1_grade = 7;
    else if (v_tam1 >= 33) v_tam1_grade = 8;
    else v_tam1_grade = 9;
  } else if (v_tam1_select == "윤리와 사상") {
    if (v_tam1 >= 66) v_tam1_grade = 1;
    else if (v_tam1 >= 64) v_tam1_grade = 2;
    else if (v_tam1 >= 60) v_tam1_grade = 3;
    else if (v_tam1 >= 55) v_tam1_grade = 4;
    else if (v_tam1 >= 45) v_tam1_grade = 5;
    else if (v_tam1 >= 40) v_tam1_grade = 6;
    else if (v_tam1 >= 37) v_tam1_grade = 7;
    else if (v_tam1 >= 35) v_tam1_grade = 8;
    else v_tam1_grade = 9;
  } else if (v_tam1_select == "한국지리") {
    if (v_tam1 >= 65) v_tam1_grade = 1;
    else if (v_tam1 >= 63) v_tam1_grade = 2;
    else if (v_tam1 >= 60) v_tam1_grade = 3;
    else if (v_tam1 >= 54) v_tam1_grade = 4;
    else if (v_tam1 >= 46) v_tam1_grade = 5;
    else if (v_tam1 >= 40) v_tam1_grade = 6;
    else if (v_tam1 >= 37) v_tam1_grade = 7;
    else if (v_tam1 >= 34) v_tam1_grade = 8;
    else v_tam1_grade = 9;
  } else if (v_tam1_select == "세계지리") {
    if (v_tam1 >= 66) v_tam1_grade = 1;
    else if (v_tam1 >= 64) v_tam1_grade = 2;
    else if (v_tam1 >= 61) v_tam1_grade = 3;
    else if (v_tam1 >= 54) v_tam1_grade = 4;
    else if (v_tam1 >= 45) v_tam1_grade = 5;
    else if (v_tam1 >= 41) v_tam1_grade = 6;
    else if (v_tam1 >= 37) v_tam1_grade = 7;
    else if (v_tam1 >= 35) v_tam1_grade = 8;
    else v_tam1_grade = 9;
  } else if (v_tam1_select == "동아시아사") {
    if (v_tam1 >= 66) v_tam1_grade = 1;
    else if (v_tam1 >= 64) v_tam1_grade = 2;
    else if (v_tam1 >= 60) v_tam1_grade = 3;
    else if (v_tam1 >= 54) v_tam1_grade = 4;
    else if (v_tam1 >= 46) v_tam1_grade = 5;
    else if (v_tam1 >= 41) v_tam1_grade = 6;
    else if (v_tam1 >= 37) v_tam1_grade = 7;
    else if (v_tam1 >= 35) v_tam1_grade = 8;
    else v_tam1_grade = 9;
  } else if (v_tam1_select == "세계사") {
    if (v_tam1 >= 66) v_tam1_grade = 1;
    else if (v_tam1 >= 64) v_tam1_grade = 2;
    else if (v_tam1 >= 61) v_tam1_grade = 3;
    else if (v_tam1 >= 53) v_tam1_grade = 4;
    else if (v_tam1 >= 45) v_tam1_grade = 5;
    else if (v_tam1 >= 40) v_tam1_grade = 6;
    else if (v_tam1 >= 38) v_tam1_grade = 7;
    else if (v_tam1 >= 36) v_tam1_grade = 8;
    else v_tam1_grade = 9;
  } else if (v_tam1_select == "경제") {
    if (v_tam1 >= 66) v_tam1_grade = 1;
    else if (v_tam1 >= 64) v_tam1_grade = 2;
    else if (v_tam1 >= 60) v_tam1_grade = 3;
    else if (v_tam1 >= 53) v_tam1_grade = 4;
    else if (v_tam1 >= 46) v_tam1_grade = 5;
    else if (v_tam1 >= 41) v_tam1_grade = 6;
    else if (v_tam1 >= 38) v_tam1_grade = 7;
    else if (v_tam1 >= 35) v_tam1_grade = 8;
    else v_tam1_grade = 9;
  } else if (v_tam1_select == "정치와 법") {
    if (v_tam1 >= 63) v_tam1_grade = 1;
    else if (v_tam1 >= 62) v_tam1_grade = 2;
    else if (v_tam1 >= 60) v_tam1_grade = 3;
    else if (v_tam1 >= 56) v_tam1_grade = 4;
    else if (v_tam1 >= 47) v_tam1_grade = 5;
    else if (v_tam1 >= 39) v_tam1_grade = 6;
    else if (v_tam1 >= 36) v_tam1_grade = 7;
    else if (v_tam1 >= 33) v_tam1_grade = 8;
    else v_tam1_grade = 9;
  } else if (v_tam1_select == "사회문화") {
    if (v_tam1 >= 64) v_tam1_grade = 1;
    else if (v_tam1 >= 62) v_tam1_grade = 2;
    else if (v_tam1 >= 59) v_tam1_grade = 3;
    else if (v_tam1 >= 55) v_tam1_grade = 4;
    else if (v_tam1 >= 48) v_tam1_grade = 5;
    else if (v_tam1 >= 40) v_tam1_grade = 6;
    else if (v_tam1 >= 36) v_tam1_grade = 7;
    else if (v_tam1 >= 33) v_tam1_grade = 8;
    else v_tam1_grade = 9;
  } else if (v_tam1_select == "물리학I") {
    if (v_tam1 >= 66) v_tam1_grade = 1;
    else if (v_tam1 >= 63) v_tam1_grade = 2;
    else if (v_tam1 >= 59) v_tam1_grade = 3;
    else if (v_tam1 >= 54) v_tam1_grade = 4;
    else if (v_tam1 >= 46) v_tam1_grade = 5;
    else if (v_tam1 >= 41) v_tam1_grade = 6;
    else if (v_tam1 >= 37) v_tam1_grade = 7;
    else if (v_tam1 >= 34) v_tam1_grade = 8;
    else v_tam1_grade = 9;
  } else if (v_tam1_select == "화학I") {
    if (v_tam1 >= 63) v_tam1_grade = 1;
    else if (v_tam1 >= 61) v_tam1_grade = 2;
    else if (v_tam1 >= 59) v_tam1_grade = 3;
    else if (v_tam1 >= 55) v_tam1_grade = 4;
    else if (v_tam1 >= 49) v_tam1_grade = 5;
    else if (v_tam1 >= 41) v_tam1_grade = 6;
    else if (v_tam1 >= 36) v_tam1_grade = 7;
    else if (v_tam1 >= 31) v_tam1_grade = 8;
    else v_tam1_grade = 9;
  } else if (v_tam1_select == "생명과학I") {
    if (v_tam1 >= 65) v_tam1_grade = 1;
    else if (v_tam1 >= 62) v_tam1_grade = 2;
    else if (v_tam1 >= 59) v_tam1_grade = 3;
    else if (v_tam1 >= 54) v_tam1_grade = 4;
    else if (v_tam1 >= 47) v_tam1_grade = 5;
    else if (v_tam1 >= 40) v_tam1_grade = 6;
    else if (v_tam1 >= 37) v_tam1_grade = 7;
    else if (v_tam1 >= 33) v_tam1_grade = 8;
    else v_tam1_grade = 9;
  } else if (v_tam1_select == "지구과학I") {
    if (v_tam1 >= 68) v_tam1_grade = 1;
    else if (v_tam1 >= 63) v_tam1_grade = 2;
    else if (v_tam1 >= 59) v_tam1_grade = 3;
    else if (v_tam1 >= 53) v_tam1_grade = 4;
    else if (v_tam1 >= 46) v_tam1_grade = 5;
    else if (v_tam1 >= 41) v_tam1_grade = 6;
    else if (v_tam1 >= 38) v_tam1_grade = 7;
    else if (v_tam1 >= 35) v_tam1_grade = 8;
    else v_tam1_grade = 9;
  } else if (v_tam1_select == "물리학II") {
    if (v_tam1 >= 66) v_tam1_grade = 1;
    else if (v_tam1 >= 63) v_tam1_grade = 2;
    else if (v_tam1 >= 60) v_tam1_grade = 3;
    else if (v_tam1 >= 54) v_tam1_grade = 4;
    else if (v_tam1 >= 45) v_tam1_grade = 5;
    else if (v_tam1 >= 41) v_tam1_grade = 6;
    else if (v_tam1 >= 38) v_tam1_grade = 7;
    else if (v_tam1 >= 35) v_tam1_grade = 8;
    else v_tam1_grade = 9;
  } else if (v_tam1_select == "화학II") {
    if (v_tam1 >= 67) v_tam1_grade = 1;
    else if (v_tam1 >= 64) v_tam1_grade = 2;
    else if (v_tam1 >= 59) v_tam1_grade = 3;
    else if (v_tam1 >= 53) v_tam1_grade = 4;
    else if (v_tam1 >= 46) v_tam1_grade = 5;
    else if (v_tam1 >= 41) v_tam1_grade = 6;
    else if (v_tam1 >= 38) v_tam1_grade = 7;
    else if (v_tam1 >= 35) v_tam1_grade = 8;
    else v_tam1_grade = 9;
  } else if (v_tam1_select == "생명과학II") {
    if (v_tam1 >= 66) v_tam1_grade = 1;
    else if (v_tam1 >= 63) v_tam1_grade = 2;
    else if (v_tam1 >= 50) v_tam1_grade = 3;
    else if (v_tam1 >= 54) v_tam1_grade = 4;
    else if (v_tam1 >= 46) v_tam1_grade = 5;
    else if (v_tam1 >= 40) v_tam1_grade = 6;
    else if (v_tam1 >= 37) v_tam1_grade = 7;
    else if (v_tam1 >= 35) v_tam1_grade = 8;
    else v_tam1_grade = 9;
  } else if (v_tam1_select == "지구과학II") {
    if (v_tam1 >= 67) v_tam1_grade = 1;
    else if (v_tam1 >= 63) v_tam1_grade = 2;
    else if (v_tam1 >= 59) v_tam1_grade = 3;
    else if (v_tam1 >= 53) v_tam1_grade = 4;
    else if (v_tam1 >= 46) v_tam1_grade = 5;
    else if (v_tam1 >= 40) v_tam1_grade = 6;
    else if (v_tam1 >= 37) v_tam1_grade = 7;
    else if (v_tam1 >= 35) v_tam1_grade = 8;
    else v_tam1_grade = 9;
  }
  document.getElementById("tam1_grade").value = v_tam1_grade + "등급";
}

function tam2_grade_cac() {
  var v_tam2 = Number(document.getElementById("tam2").value);
  const v_tam2_select = document.getElementById("tam2_select").value;
  var v_tam2_grade = 9;
  if (v_tam2_select == "생활과 윤리") {
    if (v_tam2 >= 64) v_tam2_grade = 1;
    else if (v_tam2 >= 62) v_tam2_grade = 2;
    else if (v_tam2 >= 60) v_tam2_grade = 3;
    else if (v_tam2 >= 54) v_tam2_grade = 4;
    else if (v_tam2 >= 47) v_tam2_grade = 5;
    else if (v_tam2 >= 41) v_tam2_grade = 6;
    else if (v_tam2 >= 36) v_tam2_grade = 7;
    else if (v_tam2 >= 33) v_tam2_grade = 8;
    else v_tam2_grade = 9;
  } else if (v_tam2_select == "윤리와 사상") {
    if (v_tam2 >= 66) v_tam2_grade = 1;
    else if (v_tam2 >= 64) v_tam2_grade = 2;
    else if (v_tam2 >= 60) v_tam2_grade = 3;
    else if (v_tam2 >= 55) v_tam2_grade = 4;
    else if (v_tam2 >= 45) v_tam2_grade = 5;
    else if (v_tam2 >= 40) v_tam2_grade = 6;
    else if (v_tam2 >= 37) v_tam2_grade = 7;
    else if (v_tam2 >= 35) v_tam2_grade = 8;
    else v_tam2_grade = 9;
  } else if (v_tam2_select == "한국지리") {
    if (v_tam2 >= 65) v_tam2_grade = 1;
    else if (v_tam2 >= 63) v_tam2_grade = 2;
    else if (v_tam2 >= 60) v_tam2_grade = 3;
    else if (v_tam2 >= 54) v_tam2_grade = 4;
    else if (v_tam2 >= 46) v_tam2_grade = 5;
    else if (v_tam2 >= 40) v_tam2_grade = 6;
    else if (v_tam2 >= 37) v_tam2_grade = 7;
    else if (v_tam2 >= 34) v_tam2_grade = 8;
    else v_tam2_grade = 9;
  } else if (v_tam2_select == "세계지리") {
    if (v_tam2 >= 66) v_tam2_grade = 1;
    else if (v_tam2 >= 64) v_tam2_grade = 2;
    else if (v_tam2 >= 61) v_tam2_grade = 3;
    else if (v_tam2 >= 54) v_tam2_grade = 4;
    else if (v_tam2 >= 45) v_tam2_grade = 5;
    else if (v_tam2 >= 41) v_tam2_grade = 6;
    else if (v_tam2 >= 37) v_tam2_grade = 7;
    else if (v_tam2 >= 35) v_tam2_grade = 8;
    else v_tam2_grade = 9;
  } else if (v_tam2_select == "동아시아사") {
    if (v_tam2 >= 66) v_tam2_grade = 1;
    else if (v_tam2 >= 64) v_tam2_grade = 2;
    else if (v_tam2 >= 60) v_tam2_grade = 3;
    else if (v_tam2 >= 54) v_tam2_grade = 4;
    else if (v_tam2 >= 46) v_tam2_grade = 5;
    else if (v_tam2 >= 41) v_tam2_grade = 6;
    else if (v_tam2 >= 37) v_tam2_grade = 7;
    else if (v_tam2 >= 35) v_tam2_grade = 8;
    else v_tam2_grade = 9;
  } else if (v_tam2_select == "세계사") {
    if (v_tam2 >= 66) v_tam2_grade = 1;
    else if (v_tam2 >= 64) v_tam2_grade = 2;
    else if (v_tam2 >= 61) v_tam2_grade = 3;
    else if (v_tam2 >= 53) v_tam2_grade = 4;
    else if (v_tam2 >= 45) v_tam2_grade = 5;
    else if (v_tam2 >= 40) v_tam2_grade = 6;
    else if (v_tam2 >= 38) v_tam2_grade = 7;
    else if (v_tam2 >= 36) v_tam2_grade = 8;
    else v_tam2_grade = 9;
  } else if (v_tam2_select == "경제") {
    if (v_tam2 >= 66) v_tam2_grade = 1;
    else if (v_tam2 >= 64) v_tam2_grade = 2;
    else if (v_tam2 >= 60) v_tam2_grade = 3;
    else if (v_tam2 >= 53) v_tam2_grade = 4;
    else if (v_tam2 >= 46) v_tam2_grade = 5;
    else if (v_tam2 >= 41) v_tam2_grade = 6;
    else if (v_tam2 >= 38) v_tam2_grade = 7;
    else if (v_tam2 >= 35) v_tam2_grade = 8;
    else v_tam2_grade = 9;
  } else if (v_tam2_select == "정치와 법") {
    if (v_tam2 >= 63) v_tam2_grade = 1;
    else if (v_tam2 >= 62) v_tam2_grade = 2;
    else if (v_tam2 >= 60) v_tam2_grade = 3;
    else if (v_tam2 >= 56) v_tam2_grade = 4;
    else if (v_tam2 >= 47) v_tam2_grade = 5;
    else if (v_tam2 >= 39) v_tam2_grade = 6;
    else if (v_tam2 >= 36) v_tam2_grade = 7;
    else if (v_tam2 >= 33) v_tam2_grade = 8;
    else v_tam2_grade = 9;
  } else if (v_tam2_select == "사회문화") {
    if (v_tam2 >= 64) v_tam2_grade = 1;
    else if (v_tam2 >= 62) v_tam2_grade = 2;
    else if (v_tam2 >= 59) v_tam2_grade = 3;
    else if (v_tam2 >= 55) v_tam2_grade = 4;
    else if (v_tam2 >= 48) v_tam2_grade = 5;
    else if (v_tam2 >= 40) v_tam2_grade = 6;
    else if (v_tam2 >= 36) v_tam2_grade = 7;
    else if (v_tam2 >= 33) v_tam2_grade = 8;
    else v_tam2_grade = 9;
  } else if (v_tam2_select == "물리학I") {
    if (v_tam2 >= 66) v_tam2_grade = 1;
    else if (v_tam2 >= 63) v_tam2_grade = 2;
    else if (v_tam2 >= 59) v_tam2_grade = 3;
    else if (v_tam2 >= 54) v_tam2_grade = 4;
    else if (v_tam2 >= 46) v_tam2_grade = 5;
    else if (v_tam2 >= 41) v_tam2_grade = 6;
    else if (v_tam2 >= 37) v_tam2_grade = 7;
    else if (v_tam2 >= 34) v_tam2_grade = 8;
    else v_tam2_grade = 9;
  } else if (v_tam2_select == "화학I") {
    if (v_tam2 >= 63) v_tam2_grade = 1;
    else if (v_tam2 >= 61) v_tam2_grade = 2;
    else if (v_tam2 >= 59) v_tam2_grade = 3;
    else if (v_tam2 >= 55) v_tam2_grade = 4;
    else if (v_tam2 >= 49) v_tam2_grade = 5;
    else if (v_tam2 >= 41) v_tam2_grade = 6;
    else if (v_tam2 >= 36) v_tam2_grade = 7;
    else if (v_tam2 >= 31) v_tam2_grade = 8;
    else v_tam2_grade = 9;
  } else if (v_tam2_select == "생명과학I") {
    if (v_tam2 >= 65) v_tam2_grade = 1;
    else if (v_tam2 >= 62) v_tam2_grade = 2;
    else if (v_tam2 >= 59) v_tam2_grade = 3;
    else if (v_tam2 >= 54) v_tam2_grade = 4;
    else if (v_tam2 >= 47) v_tam2_grade = 5;
    else if (v_tam2 >= 40) v_tam2_grade = 6;
    else if (v_tam2 >= 37) v_tam2_grade = 7;
    else if (v_tam2 >= 33) v_tam2_grade = 8;
    else v_tam2_grade = 9;
  } else if (v_tam2_select == "지구과학I") {
    if (v_tam2 >= 68) v_tam2_grade = 1;
    else if (v_tam2 >= 63) v_tam2_grade = 2;
    else if (v_tam2 >= 59) v_tam2_grade = 3;
    else if (v_tam2 >= 53) v_tam2_grade = 4;
    else if (v_tam2 >= 46) v_tam2_grade = 5;
    else if (v_tam2 >= 41) v_tam2_grade = 6;
    else if (v_tam2 >= 38) v_tam2_grade = 7;
    else if (v_tam2 >= 35) v_tam2_grade = 8;
    else v_tam2_grade = 9;
  } else if (v_tam2_select == "물리학II") {
    if (v_tam2 >= 66) v_tam2_grade = 1;
    else if (v_tam2 >= 63) v_tam2_grade = 2;
    else if (v_tam2 >= 60) v_tam2_grade = 3;
    else if (v_tam2 >= 54) v_tam2_grade = 4;
    else if (v_tam2 >= 45) v_tam2_grade = 5;
    else if (v_tam2 >= 41) v_tam2_grade = 6;
    else if (v_tam2 >= 38) v_tam2_grade = 7;
    else if (v_tam2 >= 35) v_tam2_grade = 8;
    else v_tam2_grade = 9;
  } else if (v_tam2_select == "화학II") {
    if (v_tam2 >= 67) v_tam2_grade = 1;
    else if (v_tam2 >= 64) v_tam2_grade = 2;
    else if (v_tam2 >= 59) v_tam2_grade = 3;
    else if (v_tam2 >= 53) v_tam2_grade = 4;
    else if (v_tam2 >= 46) v_tam2_grade = 5;
    else if (v_tam2 >= 41) v_tam2_grade = 6;
    else if (v_tam2 >= 38) v_tam2_grade = 7;
    else if (v_tam2 >= 35) v_tam2_grade = 8;
    else v_tam2_grade = 9;
  } else if (v_tam2_select == "생명과학II") {
    if (v_tam2 >= 66) v_tam2_grade = 1;
    else if (v_tam2 >= 63) v_tam2_grade = 2;
    else if (v_tam2 >= 50) v_tam2_grade = 3;
    else if (v_tam2 >= 54) v_tam2_grade = 4;
    else if (v_tam2 >= 46) v_tam2_grade = 5;
    else if (v_tam2 >= 40) v_tam2_grade = 6;
    else if (v_tam2 >= 37) v_tam2_grade = 7;
    else if (v_tam2 >= 35) v_tam2_grade = 8;
    else v_tam2_grade = 9;
  } else if (v_tam2_select == "지구과학II") {
    if (v_tam2 >= 67) v_tam2_grade = 1;
    else if (v_tam2 >= 63) v_tam2_grade = 2;
    else if (v_tam2 >= 59) v_tam2_grade = 3;
    else if (v_tam2 >= 53) v_tam2_grade = 4;
    else if (v_tam2 >= 46) v_tam2_grade = 5;
    else if (v_tam2 >= 40) v_tam2_grade = 6;
    else if (v_tam2 >= 37) v_tam2_grade = 7;
    else if (v_tam2 >= 35) v_tam2_grade = 8;
    else v_tam2_grade = 9;
  }
  document.getElementById("tam2_grade").value = v_tam2_grade + "등급";
}

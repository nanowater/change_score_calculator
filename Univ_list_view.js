// 메뉴에 학교이름 추가

function load_Univ_list() {
  const arr = [
    ["부산대", "https://almini718.github.io/change_score_calculator/Busan_Univ/Busan.html"],
    ["부경대", "https://almini718.github.io/change_score_calculator/Pukyong_Univ/Pukyong.html"],
    ["한국해양대", "https://almini718.github.io/change_score_calculator/Korea_Maritime&Ocean_Univ/Korea_M&O.html"],
  ];
  arr.sort();
  const menuList = document.querySelector(".menu");
  arr.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item[1];
    a.textContent = item[0];
    li.appendChild(a);
    menuList.appendChild(li);
  });
}

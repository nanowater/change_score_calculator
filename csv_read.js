fetch("Busan_Univ.csv")
  .then((response) => response.text())
  .then((data) => {
    const parsedData = Papa.parse(data).data;
    const select = document.getElementById("major_select");

    // 첫 번째 행은 헤더로 사용되므로 제외합니다.
    for (let i = 1; i < parsedData.length; i++) {
      const option = document.createElement("option");
      option.value = parsedData[i][0];
      option.text = parsedData[i][1];
      select.appendChild(option);
    }
  });

function convertBinIntoDec(event) {
    console.log(event);

    // 입력창에서 넘어오는 이진수 데이터를 dataInput에 할당
    let dataInput = document.getElementById("binInput").value;
    console.log("입력값(이진수):", dataInput);

    // 이진수 데이터를 십진수 변환 후 dataOutput에 할당
    let dataOutput = parseInt(dataInput, 2);
    console.log("출력값(십진수):", dataOutput);

    // dataOutput의 데이터를 #result의 innerHTML으로 직접 출력
    let dataPrint = document.getElementById("result");
    dataPrint.innerHTML = dataOutput;

    // Input 창 포커스
    document.getElementById("binInput").focus();
}
    // Convert 버튼 클릭시 convertBinIntoDec 함수 호출
    window.addEventListener("load", function(event) {
        document.getElementById("convert").addEventListener("click", convertBinIntoDec);
    });
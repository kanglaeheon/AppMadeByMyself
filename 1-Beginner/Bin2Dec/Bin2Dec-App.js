// decOutput을 출력창으로 전송
function convertBinIntoDec(event) {
    console.log(event);
    // binInput 변수에 입력창에서 넘어오는 이진수 데이터 저장
    let dataInput = document.getElementById("binInput").value;
    console.log("입력값(이진수):", dataInput);
    // 이진수 데이터를 십진수 변환 후 decOutput에 저장
    let dataOutput = parseInt(dataInput, 2);
    console.log("출력값(십진수):", dataOutput);
    let dataPrint = document.getElementById("result");
    dataPrint.innerHTML = dataOutput;
    // Input 창에 포커스
    document.getElementById("binInput").focus();
}

    window.addEventListener("load", function(event) {
        document.getElementById("convert").addEventListener("click", convertBinIntoDec);
    });
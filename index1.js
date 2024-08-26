function show_result() {
    let K = parseFloat(document.getElementById('K').value);
    let M = parseFloat(document.getElementById('M').value);
    let P = parseFloat(document.getElementById('P').value);
    let C = parseFloat(document.getElementById('C').value);         
    let B = parseFloat(document.getElementById('B').value);
    let H = parseFloat(document.getElementById('H').value);
    let E = parseFloat(document.getElementById('E').value);

    let total = K + M + P + C + B + H + (E - 25);
    document.getElementById('total').innerText = total;

    let grade;
    if (total >= 427 && total <= 475) {
        grade = 'A';
    } else if (total >= 380 && total <= 426) {
        grade = 'B';
    } else if (total >= 332 && total <= 379) {
        grade = 'C';
    } else if (total >= 286 && total <= 331) {
        grade = 'D';
    } else if (total >= 237 && total <= 285) {
        grade = 'E';
    } else if (total < 237) {
        grade = 'F';
    }

    function getGradeForSubject(score, ranges) {
        if (score >= ranges[0] && score <= ranges[1]) return 'A';
        if (score >= ranges[2] && score <= ranges[3]) return 'B';
        if (score >= ranges[4] && score <= ranges[5]) return 'C';
        if (score >= ranges[6] && score <= ranges[7]) return 'D';
        if (score >= ranges[8] && score <= ranges[9]) return 'E';
        return 'F';
    }

    let rangesK = [67, 75, 60, 66, 52, 59, 45, 51, 37, 44];
    let rangesM = [112, 125, 100, 111, 87, 99, 75, 86, 62, 74];
    let rangesP = [67, 75, 60, 66, 52, 59, 45, 51, 37, 44];
    let rangesC = [67, 75, 60, 66, 52, 59, 45, 51, 37, 44];
    let rangesH = [45, 50, 40, 44, 35, 39, 30, 34, 25, 29];
    let rangesE = [45, 50, 40, 44, 35, 39, 30, 34, 25, 29];

    document.getElementById('resultK').innerText = getGradeForSubject(K, rangesK);
    document.getElementById('resultM').innerText = getGradeForSubject(M, rangesM);
    document.getElementById('resultP').innerText = getGradeForSubject(P, rangesP);
    document.getElementById('resultC').innerText = getGradeForSubject(C, rangesC);
    document.getElementById('resultH').innerText = getGradeForSubject(H, rangesH);
    document.getElementById('resultE').innerText = getGradeForSubject(E, rangesE);

    document.getElementById('grade').innerText = grade;
    let result = total >= 237 ? 'Pass' : 'Fail';
    document.getElementById('final_result').innerText = result;
}

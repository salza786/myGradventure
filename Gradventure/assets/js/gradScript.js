/// <reference path="C:\Users\SFatmi\Documents\BGL\Group Project\Gradventure\myGradventure\Gradventure\Views/Home/Marketing.cshtml" />
/// <reference path="C:\Users\SFatmi\Documents\BGL\Group Project\Gradventure\myGradventure\Gradventure\Views/Home/Finance.cshtml" />
/// <reference path="C:\Users\SFatmi\Documents\BGL\Group Project\Gradventure\myGradventure\Gradventure\Views/Home/Finance.cshtml" />
/// <reference path="C:\Users\SFatmi\Documents\BGL\Group Project\Gradventure\myGradventure\Gradventure\Views/Home/Finance.cshtml" />
var overallMarketingWeight = 0;
var overallTechWeight = 0;
var overallFinanceWeight = 0;

var questionsArray = [
[0, 0, 0],
[0, 0, 0],
[0, 0, 0],
[0, 0, 0],
[0, 0, 0],
];

function weightingScore(marketingWeight, techWeight, financeWeight, questionNumber) {
    questionsArray[questionNumber - 1][0] = marketingWeight;
    questionsArray[questionNumber - 1][1] = techWeight;
    questionsArray[questionNumber - 1][2] = financeWeight;
}

function showResult() {
    overallMarketingWeight = questionsArray[0][0] + questionsArray[1][0] + questionsArray[2][0] + questionsArray[3][0] + questionsArray[4][0];
    overallTechWeight = questionsArray[0][1] + questionsArray[1][1] + questionsArray[2][1] + questionsArray[3][1] + questionsArray[4][1];
    overallFinanceWeight = questionsArray[0][2] + questionsArray[1][2] + questionsArray[2][2] + questionsArray[3][2] + questionsArray[4][2];

    if (overallMarketingWeight > overallTechWeight && overallMarketingWeight > overallFinanceWeight) {
        window.location.href = "/Home/Marketing"
        return;
    }
    else if (overallTechWeight > overallFinanceWeight) {
        window.location.href = "/Home/Technology"
        return;
    }
    window.location.href = "/Home/Finance"
    return;
}

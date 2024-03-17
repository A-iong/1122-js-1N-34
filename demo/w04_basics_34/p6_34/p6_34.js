import { bmi_data } from "./data.js";

let bmi_data_34 = bmi_data

console.log('bmi_data', bmi_data_34);

function bmiCalc_34(height,weight) {
    return weight / (height*height);
}
function bmi_normal_low(height){
    return 18.5 * height * height;
}
function bmi_normal_hight(height){
    return 24 * height * height;
}
function bmiCalcResult_34(height, weight) {
    let bmi = bmiCalc_34(height, weight).toFixed(2);
    console.log(`For (h,w) = (${height}/${weight}), the BMI = ${bmi}`);
 }
function bmiDataCalc(data) {
    data.forEach(function (item) {
        bmiCalcResult_34(item.height, item.weight);
    });
}

bmiCalcResult_34(1.75, 55);
bmiCalcResult_34(1.75, 70);
bmiCalcResult_34(1.75, 85);

// bmiDataCalc(bmi_data_34);

//////////////////////////////////////////////////////////



function bmiCalcSuggestion_34(height, weight){
    let bmi = bmiCalc_34(height,weight).toFixed(2);
    if (bmi < 18.5) {
        let normal_low = bmi_normal_low(height);
        // console.log(`For (h/w) = (${height}/${weight}), the BMI = ${bmi} which is ${(normal_low - weight).toFixed(2)} kg lower than normal.`);
     } else if(bmi <=24) {
        //  console.log(`For (h/w) = (${height}/${weight}), the BMI = ${bmi} which is normal.`);
     } else {
         let normal_high = bmi_normal_hight(height);
        //  console.log('normal_high', normal_high);
        //  console.log(`For (h/w) = (${height}/${weight}), the BMI = ${bmi} which is ${(weight - normal_high).toFixed(2)} kg lower than normal.`);
 
     }

}






function bmiDataCalcsuggestion(data) {
    data.forEach(function (item){
        bmiCalcSuggestion_34(item.height, item.weight);
    });
}

bmiDataCalcsuggestion(bmi_data_34);
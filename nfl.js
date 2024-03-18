let input2 = document.querySelector(".happyormad");
let button = document.querySelector("button");
let results = document.querySelector(".results");
let input1 = document.querySelector(".age")





button.addEventListener("click", function () {
    console.log("button check");
    let answer1 = input1.value;
    console.log(answer1);
    let answer2 = input2.value;
    console.log(answer2);




    if (answer1 <= 20 && answer2 === "happy") {


        console.log("JSN");
        results.innerHTML = "You are JSN...!";



}


    if (answer1 >= 19  && answer2 === "mad") {


        console.log("CJ");
        results.innerHTML = "You are Cj Stroud...!";
    }
    if (answer1 > 15 && answer2 === "happy") {


        console.log("JC");
        results.innerHTML = "You are Jack Campbell...!";


    }
    if (answer1 < 16 && answer2 === "mad") {


        console.log("DW");
        results.innerHTML = "You are Devin Witherspoon...!";
    }
});

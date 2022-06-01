const score = [1, 2, 3, 4, 5, 6]
console.log(score)

for (i = 1; i < score.length; i++){
    console.log(score[i])
}

function yoyo (a, b, c){
    console.log(a+b*c)
}

yoyo (1, 2, 3)

if (score.length > 5) {
    console.log(true)
}
else {
    console.log(false)
}
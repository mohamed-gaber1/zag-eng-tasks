const students=[
    {
        name:"mohamed",
        grades:[90,75,80,50]
    },
    {
        name:"ali",
        grades:[90,100,80,75]
    },
    {
        name:"ahmed",
        grades:[80,75,80,50]
    },
    {
        name:"hossam",
        grades:[90,90,65,78]
    },
    {
        name:"nada",
        grades:[70,75,80,90]
    }
]

function calculateAverage(grades){
    let sum=0;
    for(let i=0;i<grades.length;i++){
        sum+=grades[i];
    }
    return (sum/grades.length);
}

const stuAvg= students.map((p)=>{
    return {
        "name" : p.name,
        "average" : calculateAverage(p.grades)
    }
})
console.log(stuAvg);

stuAvg.forEach(element => {
    if(element.average>=85)
        element.classify="Excellent"
    else if(element.average>=60)
        element.classify="Passed"
    else
        element.classify = "Failed";

    switch(element.classify){
        case("Excellent"):
            console.log("ممتاز");
            break;
        case("Passed"):
            console.log("شد شويه");
            break;
        default:
            console.log("لاحول ولا قوه الي بالله");
    }
});
const maxAverage = Math.max(...stuAvg.map(student => student.average));

const highestStudent = stuAvg.find(student => student.average === maxAverage);
console.log(`the highest average is ${maxAverage} for student ${highestStudent.name}`);


// function program
interface  TypeStudents {
    id : number,
    name : string,
    score : null | number
}
let students = [
    {id : 1, name : "ali",score : 19},
    {id : 2, name : "reza",score : 20},
    {id : 3, name : "hasan",score : 15},
    {id : 4, name : "amir",score : 10},
]

// Average-ScoreAllStudents
function averageScore (arr:TypeStudents[]){
     let totalled = arr.reduce((a,b)=> a + (b.score ?? 0) ,0) / arr.length;
    return arr.length > 0 ? totalled / arr.length : 0;
}



// add new student
function newStudent(student : TypeStudents){
    if(student) {
        students.push(student)
        return "student added successfully "
    }else {
        return "student no found invalid !"
    }
}

newStudent({name:"mohamed",id  : 22,score: 12})

// remove student
function  removeStudent (id :number){
    const initialStudent= students.length;
     students =  students.filter(i => i.id !== id)
    return initialStudent > students.length ? "student is remove" : "not found student";
}

// update score this is not work
function updateScore (id:number,newScore: number){
    let seUpdateFind = false;
    students = students.map(i => {
      if(i.id === id){
          seUpdateFind = true;
          return {...i,score: newScore}
      }
      return i;
    })
    return seUpdateFind ? "Score updated successfully" : "student not found !"
}

// return the all student is score !Question

function  returnAllStudent(){
    return students.map(({name,score})=>({name,score}))
}

console.log(returnAllStudent())


function topScore ():TypeStudents | null{
    if(students.length === 0)return null;
     return students.reduce((topScore,currentScore)=>{
        return (currentScore.score ?? 0) > (topScore.score ?? 0) ? currentScore : topScore;
    },students[0])
}

console.log(topScore())

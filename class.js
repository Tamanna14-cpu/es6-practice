class Student {
     constructor(sId, sName){
         this.id = sId;
         this.name = sName;
         this.school = 'kolimunnesa school';
     }
}

const student1 = new Student(12, 'shuvo');
const student2 = new Student(22, 'mahi');
console.log(student1, student2);


// create object from class. aikhane school hoilo akta shared element jeta sobar jonno common. classer nam suru hoy uppercase diye.
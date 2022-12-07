// function Box(_width,_hight,_books) {
//     this.width= _width;
//     this.hight= _hight;
//     this.books= _books;
// }
// function Book(_id,_name,_writer_name,_numOfPages) {
//     this.id=_id;
//     this.uname=_name;
//     this.writerName=_writer_name;
//     this.NumOfPages=_numOfPages;
// }
// Box.prototype.calcArea =function() {
//     let x= this.width*this.hight
// }

// let b1 = new Book(1,"ali","ahmed",20)
// let b2 = new Book(1,"zeyad","rio",30)
// let b3 = new Book(1,"reda","ali",50)

// let sumPages= new Box(100,120,[b1,b2,b3])
// Box.prototype.valueOf = function (params) {
//     let num=0;
//     for (let i = 0; i <this.books.length; i++) {
//         num += this.books[i].NumOfPages;
        
//     }
//     return num;
// }
// console.log(sumPages.valueOf())
///////////////////////lab2/////////////////////
// function Point3D(x,y,z) {
//     this. x=x||0;
//     this. y=y||0;
//     this. z=z||0;

// Point3D.prototype.print3DPoint=function(p1,p2){
//  result=Math.sqrt((p1.x-p2.x)^2+(p1.y-p2.y)^2+(p1.z-p2.z)^2);

//  console.log(result);
// }


// }

// var p1=new Point3D(9,8,7);
// var p2=new Point3D(3,2,1);


// p1.print3DPoint(p1,p2);


///////////////////////////////////////////////



function Course(id, _name) {
    this.id = id;
    this.name = _name;
    this.grade = 0;
}

function Student(id, name, course) {
    this.id = id;
    this.name = name;
    this.course = course;
}
var courses1 = new Course(1, "HTML");
var courses2 = new Course(2, "JS");
var courses3 = new Course(3, "PHP");
var x = [courses1, courses2, courses3];
var stu1 = new Student(1, 'Rio', x);
console.log(stu1);

Student.prototype.display = function () {
    console.log(this.id, this.name);
    for (var i = 0; i < this.course.length; i++) {
        console.log(this.course[i].name )
        console.log(this.course[i].grade)
    }
}
Student.prototype.grades =function()
{
    for(var i=0; i < this.course.length; i++){
        var z = parseInt(prompt("(Enter your  grade of course: "+this.course[i].name))
        this.course[i].grade = z;
    }
}

Student.prototype.allgrades=function()
{
    var sum = 0;
    for(var i=0; i < this.courses.length; i++){
        sum += this.courses[i].grade;
    }
    return sum;
}
stu1.grades ()
stu1.display()
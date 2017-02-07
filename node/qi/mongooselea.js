var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/students');

//三步走，Schema注册，
var Schema = mongoose.Schema;
var Students = new Schema({
    name:String,
    sexy:String
})
mongoose.model('Student',Students);
//数据增加
/*var Student = mongoose.model('Student');
var student = new Student();
student.name = 'xiaohai';
student.sexy = "man";
student.save(function  (err) {
    if (err) {
        console.log(err);
        return;
    }else{
        console.log('succed is saved')
    }
})*/
//查询数据
/*var Student = mongoose.model('Student');
Student.find({
    'name':'xiaohai'
},function  (err,students) {
    console.log(students);
})*/
//更改数据
/*var Student = mongoose.model('Student');
Student.update({_id:'58996f42163201278c0f1066'}, {
    sexy:'woman'},{multi:false},function  (err,row_x) {
        if (err) {
        console.log(err);
        return;
    }else{
        console.log(row_x);
    }
    })*/
var Student = mongoose.model('Student');
Student.findById({_id:'58996f42163201278c0f1066'},
    function  (err,student) {
    console.log(student);
    student.remove();
})
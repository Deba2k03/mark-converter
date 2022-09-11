var s1 = document.getElementById('sem1');
var s2 = document.getElementById('sem2');
var s3 = document.getElementById('sem3');
var s4 = document.getElementById('sem4');
var s5 = document.getElementById('sem5');
var s6 = document.getElementById('sem6');
var s7 = document.getElementById('sem7');
var m1 = document.getElementById('m1');
var m2 = document.getElementById('m2');
var m3 = document.getElementById('m3');
var m4 = document.getElementById('m4');
var per = document.getElementById('per');
var percen = document.getElementById('percentage');
[s1,s2,s3,s4,s5,s6].forEach((element)=> {
    element.addEventListener('input',function() {
        let f = ((20*s1.value) + (20*s2.value) + (26*s3.value)+(26*s4.value)+(24*s5.value)+(24*s6.value))/140;
        if(!Number.isInteger(f)) {
            f = f.toFixed(2);
        }
        s7.value =f;
    });
});

per.addEventListener('input',function() {
    let x = this.value;
    percen.value = (x-0.5)*10;
})

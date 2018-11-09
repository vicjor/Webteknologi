var column1 = document.getElementById('c1');
var column2 = document.getElementById('c2');
var column3 = document.getElementById('c3');
var text1 = document.getElementById('innertext1');
var text2 = document.getElementById('innertext2');
var text3 = document.getElementById('innertext3');
var columnlist = [column1,column2,column3];
var textlist = [text1,text2,text3];
var text = ['MUSIC','MOVIES','SERIES','DISCOVER','NEW RELEASES','EDITORS PICKS','DISCOVER','THE<br>BEST<br>OF','EVERY<br>THING','NEW','CONTENT','EVERY WEEK','WE','ARE','MEDIAFY','THE','LATEST','IN','MUSIC','MOVIES','SERIES'];
var list = ['#DEB887','#DEB887','#DEB887','#b89866','#D2B48C','#d3b17d'];
var index = 0;


var x = window.matchMedia("(max-width: 1000px)");
myFunction(); // Call listener function at run time
x.addListener(myFunction);

//imageChangeResponsive();
function imageChange(){
    var x = window.matchMedia("(max-width: 1000px)");
    if(x.matches){
        clearTimeout(time);
        return;
    }
    var color = list[index%list.length];
    var column = columnlist[index%3];
    var txt = text[index];
    var t = textlist[index%3];
    index++;
    if(index==text.length){index=0};
    t.innerHTML = txt;
    column.style.background = color;
    var time = setTimeout(imageChange, 700);

}
function imageChangeResponsive(x){
    var x = window.matchMedia("(max-width: 1000px)");
    if(x.matches){
    var color = list[index%list.length];
    var column = columnlist[0];
    var txt = text[index];
    var t = textlist[0];
    index++;
    if(index==text.length){index=0};
    t.innerHTML = txt;
    column.style.background = color;
    var time2 = setTimeout(imageChangeResponsive, 700);
    }
    else{
        clearTimeout(time2)
        return;
    }

}



function myFunction(){
    imageChange(); // Call listener function at run time
    imageChangeResponsive();
}

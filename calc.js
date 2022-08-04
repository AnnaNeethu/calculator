function display(num){
    t1.value+=num
}

function clearAll(){
    t1.value=""
}
function output(){
    t1.value=eval(t1.value)
}
function del(){
    t1.value = t1.value.slice(0, -1);
}
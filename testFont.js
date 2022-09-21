var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var div = document.getElementById('content');

// Thiết lập click cho button 1
button1.onclick = function(){
    div.innerHTML = 'Hello 2';
};

// Thiết lập click cho button 2
button2.onclick = function(){
    div.innerHTML = 'Nội dung của thẻ div đã bị thay đổi';
};
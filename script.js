var inp = document.getElementById("inp");
var btn = document.getElementById("btn");
var boxs = document.querySelectorAll('.box');
let drag = null;
btn.onclick = function () {
    if (inp.value != '') {
        boxs[0].innerHTML += ` <div class="item" draggable="true">${inp.value}</div>`
        inp.value = "";
    }
    dragitem(); 
}
function dragitem() {
    let items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('dragstart', function () {
            drag = item
            item.style.opacity = '0.5';

        });
        item.addEventListener('dragend', function () {
            drag = null;
            item.style.opacity = '1';
        });
        boxs.forEach(box => {
            box.addEventListener('dragover', function (e) {
                e.preventDefault();
                this.style.backgroundColor = "#090";
                this.style.color = "#fff";
            });
            box.addEventListener('dragleave', function () {

                this.style.backgroundColor = "#fff";
                this.style.color = "#000";
            });
            box.addEventListener('drop', function () {
                box.append(drag);
                this.style.backgroundColor = "#fff";
                this.style.color = "#000";

            });
        });
    });
}
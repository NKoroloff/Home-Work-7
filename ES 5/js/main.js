document.addEventListener("DOMContentLoaded", () => {
    let pushBtn = document.getElementById('push__btn');
    let popBtn = document.getElementById('pop__btn');
    /*let pushInput = document.getElementById('push__input').value;*/
    let popInput = document.getElementById('pop__input').value;


    let presentation = document.querySelector('lList-noda');

    pushBtn.addEventListener("click", function () {
        pushToPresentation();
        console.log(lList);
    });

    popBtn.addEventListener("click", function () {
        popFromPresentation();
        console.log(lList);
    });


    function pushToPresentation() {
        let pushInput = document.getElementById('push__input').value;
        let node = document.getElementsByClassName("lList-noda");
        node[0].insertAdjacentHTML("beforeend",
            `<div class="nodes">${pushInput} </div>`);
        lList.push(pushInput);

    };


    function popFromPresentation(){
        var elem = document.getElementsByClassName("lList-noda").lastChild;
        elem.parentNode.removeChild(elem);


        //lList.pop();
    };




});


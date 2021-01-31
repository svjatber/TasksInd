
// Task 1
let sumAndPrice = document.querySelectorAll('.sumAndPrice')
let buttonRest = document.getElementById('buttonRest')
let restValue = document.getElementById('restValue')
buttonRest.onclick = ()=> {
    let rest;
    if(Math.round(sumAndPrice[0].value) > Math.round(sumAndPrice[1].value)){ // sumAndPrice[0].value = SUM, sumAndPrice[1] = PRICE
        rest = String((sumAndPrice[0].value - sumAndPrice[1].value).toFixed(2));
        let restSplit = rest.split('')
        let index = restSplit.indexOf('.')
        let restSplice = restSplit.splice(0, ++index).slice(0, -1); // restSplice amount first values to .
        rest = `Your rest is ${restSplice.join('')} dollars ${restSplit[0]}0 cents ${restSplit[1]} cents`
    }else {
        rest = 'Sorry, sum more than price';
    }
    restValue.innerHTML = rest

    sumAndPrice.forEach((v) => v.value = '')// sumAndPrice = ''
}



//Task 2
let divTask2 = document.getElementById('task2');
let buttonShowWindow = document.getElementById('buttonShowWindow')
let i = 0;
buttonShowWindow.onclick = () => {
        ++i
        let newWindow = document.createElement("div"); // createWindow
        newWindow.style.backgroundColor = '#afe787'
        newWindow.style.width = `calc(100px + ${i*20}px)`
        newWindow.style.height = `calc(50px + ${i*10}px)`
        newWindow.style.position = 'absolute'
        newWindow.style.left = '20%'
        newWindow.style.right = '20%'
        newWindow.classList.add('anime')


        let h3 = document.createElement('h3') // numeration windows
        h3.style.textAlign = 'center'
        h3.style.margin = '0 auto'
        h3.innerHTML = `${i}`


        let buttonRemoveWindow = document.createElement('button') // button for deleting window
        buttonRemoveWindow.innerHTML = '&#10006'
        buttonRemoveWindow.style.backgroundColor = 'inherit'
        buttonRemoveWindow.style.border = 'none'
         buttonRemoveWindow.addEventListener('click', ()=>{
        newWindow.remove()
        i--
        });


        newWindow.appendChild(buttonRemoveWindow)
        newWindow.appendChild(h3)

        divTask2.appendChild(newWindow)
}


// Task 3
let divTask3 = document.getElementById('divTask3')
let fileForm = document.forms['fileForm']
document.body.appendChild(fileForm)
fileForm[2].onblur = () =>{ // validator for input email
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(reg.test(fileForm[2].value) == false){
        alert('Enter correct email');
        return false;
    }

}
fileForm[3].onclick = () =>{
    let dataStr = new Date().toLocaleTimeString() // get Time creating forms
    let divMain = document.createElement('div') // main div which includes ready forms

    for(let i = 0; i < fileForm.length; i++){
        let divForm = document.createElement('div') // create div for other part of forms
        divForm.style.display = 'flex'
        divForm.style.justifyContent = 'row'
        divForm.style.alignItems = 'center'


        let checkForm = document.createElement('input') // create  checkbox
        checkForm.type = 'checkbox';


        let parEditForm = document.createElement('p') // create p with value from form
        parEditForm.innerText = i === 3 ? `${dataStr}` : `${fileForm[i].value}` // FOR DATA
        // EDIT PARAGRAPH
        parEditForm.addEventListener('click',  function func(){ // To edit please click on paragraph
            let input = document.createElement('input');
            input.value = parEditForm.innerText;

            parEditForm.innerHTML = '';
            parEditForm.appendChild(input);

            input.addEventListener('blur', function () {
                parEditForm.innerHTML = this.value;
                parEditForm.addEventListener('click', func);
            });

            parEditForm.removeEventListener('click', func);
        })


        let buttonRemoveForm = document.createElement('button') // button for removing p
        buttonRemoveForm.innerHTML = '&#10006'
        // DELETE PARAGRAPH single
        buttonRemoveForm.onclick = () => {
            divForm.remove()
        }


        divForm.appendChild(checkForm)
        divForm.appendChild(parEditForm)
        divForm.appendChild(buttonRemoveForm)
        divMain.appendChild(divForm)
        fileForm[i].value = '';
    }


    let buttonRemoveSelected = document.createElement('button') // button for removing selected forms
    buttonRemoveSelected.innerText = 'deleteAny';

    // REMOVE SELECTED FORMS
    buttonRemoveSelected.onclick = () => {
        Array.from(divMain.children).forEach(el => {
            if(el.firstElementChild.checked){
                el.remove()
            }

        });
        if(divMain.children.length < 1){
            buttonRemoveSelected.remove()
        }
    }

    document.body.appendChild(divMain)
    document.body.appendChild(buttonRemoveSelected)

}




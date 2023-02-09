
const courseid = document.querySelector('#course-id');
const courseunit = document.querySelector('#course-unit');
const scoregrade = document.querySelector('#score-grade');
const add = document.querySelector('#add');
const tbody = document.querySelector('#tbody');
const tfoot = document.querySelector('#tfoot');
const table = document.querySelector('#table');
const calcgp = document.querySelector('#calc-gp');
const clear = document.querySelector('#clear');
const printt = document.querySelector('#print');
let Gparray = [];

add.addEventListener('click', () => {
if (courseid.value === "" || courseunit.value <= 0 || scoregrade.selectedIndex === "0" ){
    alert("One or more field is empty");
}else {
    const tr = document.createElement("tr");
    const tdcourseid = document.createElement('td');
    tdcourseid.innerHTML = courseid.value;
    const tdcourseunit = document.createElement('td');
    tdcourseunit.innerHTML = courseunit.value;
    const tdscoregrade = document.createElement('td');
    tdscoregrade.innerHTML = scoregrade.options[scoregrade.selectedIndex].text;

    tr.appendChild(tdcourseid);
    tr.appendChild(tdcourseunit);
    tr.appendChild(tdscoregrade);
    tbody.appendChild(tr);
    table.classList.remove('display');
    calcgp.classList.remove('display');
    clear.classList.remove('display');
    printt.classList.remove('display');
    

    Gparray.push({'courseunit':courseunit.value, 'scoregrade' : scoregrade.options[scoregrade.selectedIndex].value})
   courseid.value = "";
   courseunit.value = "";
   scoregrade.selectedIndex = "0";
}

})

calcgp.addEventListener('click', ()=> {
    let courseunits = 0, product = 0, sumofproduct = 0;

    Gparray.forEach(result => {
        courseunits += parseInt(result.courseunit);
        product = parseInt(result.courseunit) * parseInt(result.scoregrade);
        sumofproduct += product;

    })

    const tr = document.createElement('tr')
    tdtotalcourseunit = document.createElement('td');
    tdtotalcourseunit.innerHTML = `Your total course unit is ${courseunits}`;
    tdtotalgrade = document.createElement('td');
    tdtotalgrade.innerHTML = `Your GPA is ${(sumofproduct/courseunits). toFixed(2)}`;

    tr.appendChild(tdtotalcourseunit);
    tr.appendChild(tdtotalgrade);
    tfoot.appendChild(tr);

    

})

clear.addEventListener('click', ()=> {
    tbody.querySelectorAll('*').forEach(child => child.remove());
    tfoot.querySelector('tr').remove();
    table.classList.add('display');
    calcgp.classList.add('display');
    clear.classList.add('display');
    printt.classList.add('display');
    
})

printWindow = function print() {
    window.print();
}
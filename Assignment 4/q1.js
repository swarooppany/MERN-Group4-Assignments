const table = document.getElementsByTagName('table')[0];

table.tHead.rows[0].style.backgroundColor = 'red';

var r = table.tBodies[0];

r.rows[0].style.backgroundColor ='crimson';
r.rows[1].style.backgroundColor ='green';
r.rows[2].style.backgroundColor ='purple';
r.rows[3].style.backgroundColor ='blue';
r.rows[4].style.backgroundColor ='hotpink';

for(let i=0; i<r.rows.length; i++){
    var c = r.rows[i];
    for(let j=1; j<c.cells.length; j=j+2){
        console.log(c.cells[j].innerText);
    }
}

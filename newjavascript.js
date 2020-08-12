

function profit() {
    var cost = Number(document.getElementById('cost').value);
    var markup = Number(document.getElementById('markup').value);

     document.getElementById('saleprice').innerHTML = (profit+retailprice)/10;
    document.getElementById('profit').innerHTML =(cost*markup)/100;
    document.getElementById('grossmargin ').innerHTML = (profit/retailprice)*100;
    return false;
}

document.getElementById('submit').addEventListener('click', profit);/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor
 */



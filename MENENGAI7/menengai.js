const heal = document.querySelector('#healings');
const conf1 = document.querySelector('#conf1');
const conf2 = document.querySelector('#conf2'); 
const ordain = document.querySelector('#ordain');
const hdr = document.querySelector('header');
const fconference = document.querySelector('.conference1');
const sconference = document.querySelector('#conference2');
const ordination = document.querySelector('.ordination')
const doc = document.querySelector('html');
const rev = document.querySelector('#back');
conf2.onclick = conference2;
rev.onclick = reverse;
conf1.onclick = conference1;
ordain.onclick  = ordin;
function reverse(){
    conf1.style.display = 'block';
    conf2.style.display = 'block';
    heal.style.display = 'block';
    ordain.style.display = 'block';
    fconference.style.display = 'none';
    sconference.style.display = 'none';
    ordination.style.display = 'none';   
}
function conference2(){
    conf1.style.display = 'none';
    conf2.style.display = 'none';
    heal.style.display = 'none';
    hdr.style.position = 'relative';
    ordain.style.display = 'none';
    fconference.style.display = 'none';
    sconference.style.display = 'block';
    document.querySelector('body').style.backgroundAttachment = 'fixed';
}


function conference1(){
   
    conf1.style.display = 'none';
    conf2.style.display = 'none';
    heal.style.display = 'none';
    hdr.style.position = 'relative';
    ordain.style.display = 'none';
    fconference.style.display = 'block';
    document.querySelector('body').style.backgroundAttachment = 'fixed';
}

function ordin(){
    conf1.style.display = 'none';
    conf2.style.display = 'none';
    heal.style.display = 'none';
    hdr.style.position = 'relative';
    ordain.style.display = 'none';
    ordination.style.display = 'block';
}

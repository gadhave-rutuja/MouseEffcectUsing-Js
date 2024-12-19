let main=document.getElementById('main');
var img1=document.getElementById('img1');
var img2=document.getElementById('img2');
var img3=document.getElementById('img3');
var img4=document.getElementById('img4');
var img5=document.getElementById('img5');
var img6=document.getElementById('img6');


//img1
img1.addEventListener('mouseover', function() {
    img1.style.color = 'white';
    img1.style.scale = '1.2';
    img1.style.rotate="360deg";
    main.style.backgroundImage = "url('Images/04hero.jpg')";
});


img1.addEventListener('mouseleave', function () {
    img1.style.scale = '1';
    img1.style.color = '#ffffffc1'
    main.style.backgroundColor = 'red';
});

//img2
img2.addEventListener('mouseover', function() {
    img2.style.color = 'white';
    img2.style.scale = '1.2';
    img2.style.rotate="360deg";
    main.style.backgroundImage = "url('Images/05hero.jpg')";
});


img2.addEventListener('mouseleave', function () {
    img2.style.scale = '1';
    img2.style.color = '#ffffffc1'
    main.style.backgroundColor = 'red';
});

//img3
img3.addEventListener('mouseover', function() {
    img3.style.color = 'white';
    img3.style.scale = '1.2';
    img3.style.rotate="360deg";
    main.style.backgroundImage = "url('Images/06hero.jpg')";
});


img3.addEventListener('mouseleave', function () {
    img3.style.scale = '1';
    img3.style.color = '#ffffffc1'
    main.style.backgroundColor = 'red';
});

//img4
img4.addEventListener('mouseover', function() {
    img4.style.color = 'white';
    img4.style.scale = '1.2';
    img4.style.rotate="360deg";
    main.style.backgroundImage = "url('Images/07hero.jpg')";
});


img4.addEventListener('mouseleave', function () {
    img4.style.scale = '1';
    img4.style.color = '#ffffffc1'
    main.style.backgroundColor = 'red';
});

//img5
img5.addEventListener('mouseover', function() {
    img5.style.color = 'white';
    img5.style.scale = '1.2';
    img5.style.rotate="360deg";
    main.style.backgroundImage = "url('Images/08hero.jpg')";
});


img5.addEventListener('mouseleave', function () {
    img5.style.scale = '1';
    img5.style.color = '#ffffffc1'
    main.style.backgroundColor = 'red';
});


//img6
img6.addEventListener('mouseover', function() {
    img6.style.color = 'white';
    img6.style.scale = '1.2';
    img6.style.rotate="360deg";
    main.style.backgroundImage = "url('Images/09hero.jpg')";
});


img6.addEventListener('mouseleave', function () {
    img6.style.scale = '1';
    img6.style.color = '#ffffffc1'
    img6.style.zIndex ='1'
    main.style.backgroundColor = 'red';
});
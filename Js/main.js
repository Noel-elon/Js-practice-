var menu = document.getElementById('menu');
    var nav = document.getElementById('nav');
    var exit = document.getElementById('exit');

        menu.addEventListener('click', (e) => {
    nav.classList.toggle('hide-mobile');
    e.preventDefault();
        });

        exit.addEventListener('click', function(e){
    nav.classList.add('hide-mobile');
    e.preventDefault();
        });


        alert("testing my js");


        const myObj = [{
            name: "Noel",
            class: "Jss1",
            age: 21 

        }
        ,
        {
            name: "Noel",
            class: "Jss1",
            age: 21 

        },
        {
            name: "Noel",
            class: "Jss1",
            age: 21 

        }]

        console.log(myObj[2])
const bg = document.getElementById('header');
        window.addEventListener('scroll',function(){
            bg.style.backgroundSize = 100 - +window.pageYOffset/20+'%';
            bg.style.opacity = 1 - +window.pageYOffset/700+'';
        });

        window.addEventListener('scroll', function(){
            var scroll = document.querySelector('.scrollTop');
            scroll.classList.toggle("active", window.scrollY > 500)
        });
window.onscroll = () => {
	
            navbar.classList.remove('active');

            if (window.scrollY > 60) {
                        document.querySelector('#scroll-top').classList.add('active');
            } else {
                        document.querySelector('#scroll-top').classList.remove('active');
            }

}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}



var prevScrollTop = 0;
window.addEventListener('scroll', function(){
	let nowScrollTop = this.document.documentElement.scrollTop;
	let content1 = this.document.querySelector('.content1');
	let content2 = this.document.querySelector('.content2');
	let hole = this.document.getElementById('hole');
	let bird = this.document.querySelector('.hole_bird ');
	let cat = this.document.querySelector('.hole_cat ');
	let leg = this.document.querySelector('.hole_leg ');
	let hole_bg = this.document.querySelector('.hole_bg');
	let horizon = this.document.querySelector('.horizon');
	let valueTop = (nowScrollTop-window.innerHeight)/content2.offsetHeight*100; 
	let innerHeight = this.innerHeight;
	let innerWidth = this.innerWidth;
	let mobileWidth = 768;
	

if(nowScrollTop == 0){
	content1.style.position = 'relative';
	hole.style.display='none';
	hole_bg.style.display='none';
	bird.style.display='none';
	cat.style.display='none';

}	else if(nowScrollTop > 0 && nowScrollTop < innerHeight*4){
		content1.style.position='absolute';
		hole.style.display='block';
		hole.style.position = 'fixed';

		if(nowScrollTop > innerHeight*0.4 ){
			horizon.style.display='block';
		} else{
			horizon.style.display='none';
		}

		if(nowScrollTop > innerHeight*0.2 && nowScrollTop > prevScrollTop ){
			hole_bg.style.display='block';
			hole_bg.style.animation = 'hole_open 0.3s steps(1) both';
		}
		
		if(nowScrollTop <= innerHeight && nowScrollTop < prevScrollTop ){
			hole_bg.style.animation = 'hole_close 0.3s steps(1) both';
		}


		if(innerHeight * 1.2 < nowScrollTop){
			bird.style.display='block';
			bird.style.top = valueTop * 4 + '%';
			bird.style.transform = `rotate(${-valueTop*5}deg) scale(50%)`

			if(innerWidth<mobileWidth) {
			bird.style.transform = `rotate(${-valueTop*5}deg) scale(30%)`
			}
		};

		if(innerHeight * 0.8 < nowScrollTop){
			leg.classList.add('hole_leg_on');
		} else {
			leg.classList.remove('hole_leg_on');
		};
		
		if(innerHeight * 0.6 < nowScrollTop){
			cat.style.display='block';
			cat.style.top = valueTop * 2 + '%';
			cat.style.transform = `rotate(${-valueTop*6}deg) scale(80%)`

			if(innerWidth<mobileWidth) {
				cat.style.transform = `rotate(${-valueTop*6}deg) scale(40%)`
				}
		};
	};

	if(nowScrollTop >= innerHeight*3) {
		hole.style.position = 'absolute';
	};

prevScrollTop = nowScrollTop

});

function view(e) {
	let viewTarget = e.target.parentElement.nextElementSibling;
	viewTarget.classList.toggle('view');
	document.body.style.overflow = 'hidden'
};

function closeEvent(e) {
	let closeTarget = e.target.parentElement.parentElement;
	document.body.style.overflow = 'unset'
	closeTarget.classList.toggle('view');
};

let modal = document.querySelectorAll('.modal');
for(let i = 0; i < modal.length; i++){
	modal[i].addEventListener("click", e =>{
		if (e.target !== e.currentTarget) return;
		e.target.classList.toggle('view');
		document.body.style.overflow = 'unset'
	});
};


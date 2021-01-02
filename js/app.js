const animationLetter = {
	animated: document.querySelector('#oldYear'),

	initAnimated() {
		this.animated.addEventListener('animationend', () => {
		  console.log('Feliz ano novo');
		  animated.innerHTML = '1'
		});
	}
}

const backgroundAnimation = {
	initAnimated() {
		VANTA.WAVES({
		  el: "body",
		  mouseControls: true,
		  touchControls: true,
		  gyroControls: true,
		  minHeight: 200.00,
		  minWidth: 200.00,
		  scale: 1.00,
		  scaleMobile: 1.00,
		  color:0x000000		
		})
	}
}
backgroundAnimation.initAnimated()
animationLetter.initAnimated();

var profileImg = document.getElementById('profileimg')
var nameOut = document.getElementById('namedisplay')
document.body.style.backgroundColor = localStorage.bg

document.title = 'Homepage for '+localStorage.name;

nameOut.innerText = localStorage.name
document.getElementById('desc').innerText = localStorage.desc
profileImg.src = '../images/' + localStorage.profile + '.png'

function setProfile(img) {
	document.getElementById('profileimg').src = 'images/'+img+'.png'
	localStorage.profile = img
}

function changeImage() {
	const pig = document.getElementById('pimg')
	if(pig.style.display === 'none') {
		pig.style.display = 'block'
	} else {
		pig.style.display = 'none'
	}
	if(document.getElementById('password-setup').style.display === 'block') {
		document.getElementById('password-setup').style.display = 'none'
	}
	if(document.getElementById('colors').style.display === 'block') {
		document.getElementById('colors').style.display = 'none'
	}
}

function showPost() {
	var p = document.getElementById('postD')
	var c = document.querySelectorAll('.postcard')
	if(p.style.display === 'none') {
		p.style.display = 'block'
		for(var i = 0; i <= c.length; i++) {
			c[i].style.display = 'none'
		}
	} else {
		p.style.display = 'none'
		for(var i = 0; i <= c.length; i++) {
			c[i].style.display = 'block'
		}
	}
}


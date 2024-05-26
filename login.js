
var access = document.getElementById('login');
var loadUI = document.getElementById('loadUI')
var loadContent = document.getElementById('loadContent')
var emailbox =  document.getElementById('emailbox')
var passbox =  document.getElementById('passbox')
var emptyEmail =  document.getElementById('emptyE')
var emptyPass =  document.getElementById('emptyP')
var signin = document.getElementById('signin')
var signup = document.getElementById('signup')
var signupDist = signup.getBoundingClientRect()
var right =  document.getElementById('right')

access.onclick = function(){
    if(emailbox.value === '' || passbox.value === ''){
    if(emailbox.value === ''){
        console.log('emptyParameters')
        emptyEmail.style.opacity = 100 + "%"
        emailbox.style.borderWidth = 1.5 + "px";
    }
    if(passbox.value === ''){
        console.log('emptyParameters')
        emptyPass.style.opacity = 100 + "%"
        passbox.style.borderWidth = 1.5 + "px"
    }

    emailbox.addEventListener('click', function(){
        emptyEmail.style.opacity = 0 + "%"
        emailbox.style.borderWidth = 0 + "px";
    })

    passbox.addEventListener('click', function(){
        emptyPass.style.opacity = 0 + "%"
        passbox.style.borderWidth = 0 + "px";
    })
    } else {
    loadUI.style.display = 'block'
    }
    
}

loadUI.onclick = function(){
    loadUI.style.display = 'none'
}

function switchdown (){
    
    if(right.classList.contains('slideup')){
        right.classList = ['right']
    }
    signup.style.display = 'block'
    right.classList.add('slideup')
}

function switchup(){
    signup.style.display = 'block'
    right.classList.add('slidedown')
}

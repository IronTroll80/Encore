
var access = document.getElementById('login');
var loadUI = document.getElementById('loadUI')
var close = document.getElementById('close')
var closeX = document.getElementById('closeX')
var loadContent = document.getElementById('loadContent')
var emailbox =  document.getElementById('emailbox')
var passbox =  document.getElementById('passbox')
var emptyEmail =  document.getElementById('emptyE')
var emptyPass =  document.getElementById('emptyP')
var signin = document.getElementById('signin')
var signup = document.getElementById('signup')
var signupDist = signup.getBoundingClientRect()
var right =  document.getElementById ('right')
var forgot =  document.getElementById('forgot')
var timer =  document.getElementById('timer')
var sendCode =  document.getElementById('sendCode')
var menu =  document.getElementById('menu')
var rightMenu =  document.getElementById('rightMenu')

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
    setTimeout(() => {
        window.location.href = 'Home.html'
    }, 2000);
    }
    
}

forgot.onclick = function(){
    loadUI.style.display = 'block'
    loadContent.style.display = 'block' 
    rightMenu.style.display = 'none'
}

loadUI.onclick = function(){
    loadUI.style.display  = 'none'
}

close.onclick = function(){
    loadUI.style.display = 'none'
}

sendCode.onclick = function(){
    var countdown = setInterval(counter, 1000)
    var count = 60;

    function counter(){
        if (count > 0){
            count -= 1
        timer.innerHTML = 'Resend code? 00:' + count
        sendCode.innerHTML = 'Resend code? 00:'+ count
        sendCode.style.fontSize  = 11 + 'px'
        sendCode.style.border  = '1px solid rgb(82, 52, 83)'
        } else
        if (count === 0){
        sendCode.innerHTML = 'Send code'
        sendCode.style.fontSize  = 12 + 'px'
    }
    console.log(count)
    }


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

menu.onclick = function(){
   loadUI.style.display = 'block'
   loadContent.style.display = 'none' 
   rightMenu.style.display = 'block'
}

closeX.onclick = function(){
    loadUI.style.display = 'none'
}
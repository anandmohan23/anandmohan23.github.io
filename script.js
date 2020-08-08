console.log("Anand Mohan")

let theme = localStorage.getItem('theme-dot')
if(theme==null){
    settheme('light')
}else{
    settheme(theme)
}

let themaDots = document.getElementsByClassName('theme-dot')

for (var i=0; themaDots.length > i; i++){
    themaDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('option click:' , mode)
        settheme(mode)
    })
}
function settheme(mode){
    if(mode== 'light'){
        document.getElementById('theme-style').href = 'style.css'
    }
    if(mode== 'blue'){
        document.getElementById('theme-style').href = 'blue.css'
    }
    if(mode== 'green'){
        document.getElementById('theme-style').href = 'green.css'
    }
    if(mode== 'purple'){
        document.getElementById('theme-style').href = 'purple.css'
    }
    localStorage.setItem('theme-dot', mode)
}
console.log("hii");

function gotohome()
{
    location.replace('main_page.html');
}

let s=[
    {songname:"1",filepath:"songs/1.mp3"},
    {songname:"2",filepath:"songs/2.mp3"},
    {songname:"3",filepath:"songs/3.mp3"},
    {songname:"4",filepath:"songs/4.mp3"},
    {songname:"5",filepath:"songs/5.mp3"},
    {songname:"6",filepath:"songs/6.mp3"},
    {songname:"7",filepath:"songs/7.mp3"},
    {songname:"8",filepath:"songs/8.mp3"},
    {songname:"9",filepath:"songs/9.mp3"},
    {songname:"10",filepath:"songs/10.mp3"},
]

let masterplay=document.getElementById('btn2');
let myprogress=document.getElementById('myprogressBar');
// let gif=document.getElementById('gif');

let s1=new Audio('songs/1.mp3');

function sound(id){
    
    if(s1.paused==false)
    {
        s1.pause();
        masterplay.innerHTML="play_circle";
    }
    
    s.forEach((element,i) => {
        if(s[i].songname==id)
        {
            s1=new Audio(s[i].filepath);
        }
    });
    
    myprogress.value=0;
    masterplay.innerHTML="pause_circle";
    s1.play();

    
    //updating the music bar
    s1.addEventListener('timeupdate',()=>{
        progress=parseInt((s1.currentTime/s1.duration)*100);
        myprogress.value = progress;
    })
    //now when u change the bar acc to ur need then the music changes accordingly
    myprogress.addEventListener('change',()=>{
        s1.currentTime= (myprogress.value * s1.duration)/100;
    })

}

//handle play and pause

masterplay.addEventListener('click',()=>{
    if(s1.paused || s1.currentTime<=0)
    {
        s1.play();
        masterplay.innerHTML="pause_circle";
    }
    else{
        s1.pause();
        masterplay.innerHTML="play_circle";
    }

    //updating the music bar
    s1.addEventListener('timeupdate',()=>{
        progress=parseInt((s1.currentTime/s1.duration)*100);
        myprogress.value = progress;
    })
    //now when u change the bar acc to ur need then the music changes accordingly
    myprogress.addEventListener('change',()=>{
        s1.currentTime= (myprogress.value * s1.duration)/100;
    })
});

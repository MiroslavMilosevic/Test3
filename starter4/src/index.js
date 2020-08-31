// Заглавље (header) странице садржи основне информације о SpaceX-у (Назив,Власник,Година оснивања)
// Напомена: Видети документацију API-ја
import {getInfo, getShips} from './modules1'
function repaint(niz, app){
    app.innerHTML='';
    console.log(niz[0])
    for(let i=0;i<niz.length;i++){
        let divJedanBrod=document.createElement('div');
        divJedanBrod.className='brod'
        let p1=document.createElement('p')
        p1.innerText='ship name: '+niz[i].ship_name
        let p2=document.createElement('p')
        p2.innerText='ship type: '+niz[i].ship_type
        let p3=document.createElement('p')
        let status=''
        if(niz[i].active){
            status='active';
        }else{status='not active'; }
        p3.innerText='ship status: '+status
        //slika
        let a=document.createElement('a')
        a.href=niz[i].url;
        a.target='blank'
        let img=document.createElement('img');
        img.className='slika'
        img.src=niz[i].image;
        a.appendChild(img);
        //
        divJedanBrod.append(p1, p2, p3, a)
        
        
        
      // console.log(niz[i].ship_name); 
       app.append(divJedanBrod)
    }

}
getInfo().then((res)=>{
    let divHeder=document.getElementById('gornji');
    divHeder.className='divHeder';
    let h1=document.createElement('h1');
    h1.innerText='Name: '+res.data.name
    let h2=document.createElement('h2')
    h2.innerText='CEO: '+res.data.ceo;
    let h3=document.createElement('h3')
    h3.innerText='founded: '+res.data.founded;
    divHeder.append(h1, h2, h3)  
})

let nizBrodova=[];
nizBrodova;

getShips().then((res)=>{
    nizBrodova=res.data;
    let app=document.getElementById('app');
   // app.innerHTML='';
      repaint(nizBrodova, app);
      
})

let select=document.getElementById('select');
select.className='select';
select.addEventListener('input', function(){
    let value=select.value;
    let nizBrodovaPomocni=[]
 //  console.log('value '+value);
   if(value==true||value=='true'){
   nizBrodovaPomocni=nizBrodova.filter((brod)=>{
            return brod.active==true;
    })
    repaint(nizBrodovaPomocni,document.getElementById('app'))
}else if(value==false||value=='false'){
    nizBrodovaPomocni=nizBrodova.filter((brod)=>{
        return brod.active==false;
})   
repaint(nizBrodovaPomocni,document.getElementById('app'))      
}else{
    repaint(nizBrodova, document.getElementById('app'))
    console.log(nizBrodova.length);
}
console.log(nizBrodovaPomocni.length);

})


for(let i=0;i<60;i++){let h=document.createElement('div');h.className='heart';h.textContent='💖';h.style.left=Math.random()*100+'vw';h.style.animationDelay=Math.random()*8+'s';document.body.appendChild(h);}
continueBtn.onclick=()=>{content.classList.remove('hidden');continueBtn.style.display='none';music.play().catch(()=>{});}
maybe.onmouseover=()=>{maybe.style.transform=`translate(${Math.random()*220-110}px,${Math.random()*120-60}px)`;}
yes.onclick=()=>overlay.classList.remove('hidden');
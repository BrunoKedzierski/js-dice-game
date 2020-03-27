var scores, roundScore, activePl, gameActive;






init();

document.querySelector('.btn-roll').addEventListener('click',function(){
    
    if(gameActive){
        
        
        var dice = Math.floor(Math.random()*6)+1;
        var diceOb =  document.querySelector('.dice');
        diceOb.style.display= 'block';
        diceOb.src = "dice-" + dice + ".png";
    
        if(dice > 1){
        
            roundScore += dice;
            document.querySelector('#current-' + activePl).textContent = roundScore
        
        }else{
        
        
            nextPlayer();
        
        
        }
        
        
        }

    
    
    
})
    
    
    document.querySelector('.btn-hold').addEventListener('click', function(){
        if(gameActive){
             scores[activePl] += roundScore;
        
        document.querySelector("#score-"+activePl).textContent = scores[activePl];
        
        var winConDOM = document.querySelector(".win-con").value;
        var winCon;    
            
        if(winConDOM){
            
            winCon = winConDOM;
        } else{
            winCon = 100;
        }   
            
        if ( scores[activePl] >= winCon){
            document.querySelector("#name-" + activePl).textContent = 'Winner!';
            document.querySelector('.dice').style.display = "none";
            document.querySelector(".player-"+activePl+"-panel").classList.add('winner');
            document.querySelector(".player-"+activePl+"-panel").classList.remove('active');
            gameActive = false;
            
            
            
        }else{
        
        nextPlayer();
        }
            
            
        }
       
        
        
        
    })



    document.querySelector(".btn-new").addEventListener('click',init);
    
    function nextPlayer(){
        
        
        roundScore = 0;
        activePl === 0 ? activePl = 1 : activePl = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
        
        
    }   

    function init (){
        
         scores = [0,0];
         roundScore = 0;
         activePl = 0;
        gameActive = true;
        document.querySelector(".dice").style.display = "none";
  
        
         document.querySelector(".player-0-panel").classList.remove('winner');
         document.querySelector(".player-1-panel").classList.remove('winner');
         document.querySelector(".player-0-panel").classList.remove('active');
         document.querySelector(".player-1-panel").classList.remove('active');
         document.querySelector(".player-0-panel").classList.add('active');
        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent ='0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.getElementById("name-0").textContent = "Player 1"
        document.getElementById("name-1").textContent = "Player 2"


        
    }

    
    

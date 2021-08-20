class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }
  hide(){
    input1.hide()
    input2.hide()
    button.hide()
    title.hide()
        }
  play(){
    //write code here to hide question elements
      
    //write code to change the background color here
background("yellow")
    //write code to show a heading for showing the result of Quiz
text("THE ANSWER IS ENVELOPE",425,200)
    //call getContestantInfo( ) here
Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
if(allContestants !== undefined){
fill("Blue")
textSize(20)
text("NOTE : Contestant who answered correctly are highlighted in green colour !",130,230)
}

var displayPosition=250
    //write code to add a note here
for(var plr in allContestants){
  var correctAns="2"

  if(correctAns===allContestants[plr].answer){
    fill("Green")
  }
    else
      fill("red")
      displayPosition=displayPosition+30
    text(allContestants[plr].name+": "+allContestants[plr].answer,130,displayPosition)
    
  }
}
    //write code to highlight contest who answered correctly
    
  }



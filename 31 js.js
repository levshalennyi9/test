function game(user){
    choices=['rock', 'paper', 'scissors'];
computer=choices[Math.floor(Math.random() * 3)];
result='';

if(user == computer){
    result = 'its a tie';

} else if((user =='rock' && computer == 'scissors') ||
    (user =='scissors' && computer == 'rock')||
    (user =='scissors' && computer == 'paper'))

{
    result = 'win';

    
}

else{
    result('ви програли')
}
document.getElementById('result').innerText = 'You chose' + user + ', computer chose' + computer + '.' + result;
}
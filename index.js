function resultCheck(){
    var score =0;
    if (document.getElementById('correct1').checked)
    {
        score++;
    }
    if (document.getElementById('correct2').checked)
    {
        score++;
    }
    if (document.getElementById('correct3').checked)
    {
        score++;
    }
    if (document.getElementById('correct4').checked)
    {
        score++;
    }
    if (document.getElementById('correct5').checked)
    {
        score++;
    }
    var answer = score *20;
    document.write("Your score is: "+ answer+"% ");
    if(answer >= 80){
        document.write(" :EXCELLENT .")
    }
    else if((answer>=50) && (answer <80)){
        document.write("FAIRLY score.");
    }
    else if(answer<50){
        document.write("POORLY done retake the test.");
    }
 }
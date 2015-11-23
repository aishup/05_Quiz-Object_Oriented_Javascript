
var quiz = new Quiz("Quiz 1");

var q1 = new Choose("What is the latest iPhone Model called?","6C","6S","6 Pro", "6 Lite");
var q2 = new Choose("What is the latest andriod OS called?","Lollipop","Icecream","Kit Kat", "Sandwich");

quiz.add(q1);
quiz.add(q2);

quiz.render();



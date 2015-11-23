function Quiz(name){
	this.quizName = name;
	this.questions = [];
	console.log("Quiz -> constructed", this);
}

Quiz.prototype.add = function(q) {
	this.questions.push(q);
	console.log("Quiz -> 1 question added", q);
} 

Quiz.prototype.render = function()
{
	var content = "";
	content += "Welcome to Quiz; " + this.quizName + "<br>";
	for(var i=0;i<this.questions.length;i++)
	{
		content += this.questions[i].description;
		content += this.questions[i].toHTML();
	}
	document.getElementById("main").innerHTML = content;
}
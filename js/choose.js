function Choose(desc, a, b, c, d)
{
	Question.call(this, desc);
	this.option1 = a;
	this.option2 = b;
	this.option3 = c;
	this.option4 = d;
	console.log("Choose constructor invoked. Values - ", this);
}

Choose.prototype.toHTML = function()
{
	var html = "<UL>";
	html += "<LI>" + this.option1 + "</LI>";
	html += "<LI>" + this.option2 + "</LI>";
	html += "<LI>" + this.option3 + "</LI>";
	html += "<LI>" + this.option4 + "</LI>";
	html += "</UL>";
	return html;
};
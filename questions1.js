/* Question 1 */
function q1(){
  clearCode();
  delCode();
  var nCL = new Question("Question 1: On what line does this program break?<br>");
program.push(nCL);
  var nCL = new Code("10","Scoop Jelly");
program.push(nCL);
  var nCL = new Command("20","get","jellyJar");
program.push(nCL);
  var nCL = new Command("30","get","knife");
program.push(nCL);
  var nCL = new Command("40","open","jellyJar");
program.push(nCL);
  var nCL = new Command("50","scoop","jelly");
program.push(nCL);
nCL.log();
showCode(true);
}

/* Question 2 */
function q2(){
  clearCode();
  delCode();
  var nCL = new Question("Question 2: Which line would break the program?<br>");
program.push(nCL);
  var nCL = new Code("50","Open Jars");
program.push(nCL);
  var nCL = new Command("60","get","peanutButterJar");
program.push(nCL);
  var nCL = new Command("70","hold","peanutButterJar");
program.push(nCL);
  var nCL = new Command("80","open","peanutButter");
program.push(nCL);
  var nCL = new Command("90","get","knife");
program.push(nCL);
nCL.log();
showCode(true);
}

/* Question 3 */
function q3(){
  clearCode();
  delCode();
  var nCL = new Question("Question 3: Which line breaks the program?<br>");
program.push(nCL);
  var nCL = new Code("20","Spread Peanut Butter on Bread");
program.push(nCL);
  var nCL = new Command("120","hold","peanutButterJar");
program.push(nCL);
  var nCL = new Command("130","get","butterKnife");
program.push(nCL);
  var nCL = new Command("140","hold","butterKnife");
program.push(nCL);
  var nCL = new Command("150","scoop","peanutButter");
program.push(nCL);
nCL.log();
showCode(true);
}

/* Question 4 */
function q4(){
  clearCode();
  delCode();
  let myString="";
  myString+="<strong>Question 4:</strong> Which line does <strong>NOT</strong> have a mistake?<br><br><br>"
  myString+="10 open(fridge)<br><br>\n\n";
  myString+="20 get(jellyjar);<br><br>\n\n";
  myString+="30 hold(jelly);<br><br>\n\n";
  myString+="40 close(fridge);<br><br>\n\n";
  code.innerHTML=myString;
}

/* Question 5 */
function q5(){
  clearCode();
  delCode();
  let myString="";
  myString+="<strong>Question 5: Which line is impossible to do in this order?</strong><br><br><br>"
  myString+="110 get(peanutButterJar);<br><br>\n\n";
  myString+="120 hold(peanutButterJar);<br><br>\n\n";
  myString+="130 get(butterKnife);<br><br>\n\n";
  myString+="140 open(peanutButterJar);<br><br><br>\n\n";
  code.innerHTML=myString;
}

/* Question 6 */
function q6(){
  clearCode();
  delCode();
  let myString="";
  myString+="<strong>Question 6: Use these lines to answer the question.</strong><br><br>"
  myString+="110 goTo(pantry);<br><br>\n\n";
  myString+="120 open(pantry);<br><br>\n\n";
  code.innerHTML=myString;

}

/* Question 7 */
function q7(){
  clearCode();
  delCode();
  let myString="<strong>In the Quiz form, which is a bad translation of the lines below?</strong><br><br>";
  myString+="<dt><strong>scoop(CObject)</strong></dt><dd><br><em>Rules: </em><ol><li>Argument CObject is a Container Object.</li><li>CObject contains spread (SObject).</li><li>Left.holding = CObject.</li><li>CObject.open = true.</li><li>Right.holding = knife.</li></ol></dd>";
  code.innerHTML=myString;
}

/* Question 8 */
function q8(){
  clearCode();
  delCode();
  let myString="<strong>Which of these has a bad translation in the Quiz form? </strong><br><br>";
  myString+="1<br> CObject.open = false <em>means</em> Container object is closed.<br><br>\n\n";
  myString+="2<br> Left.holding = knife <em>means</em> Knife is in left hand.<br><br>\n\n";
  myString+="3<br> Argument = CLocation <em>means</em> Command is performed on a container location.<br><br>\n\n";
  myString+="4<br> Right.free = true <em>means</em> Left hand is holding an object.<br>\n\n";
  code.innerHTML=myString;
}

/* Question 9 */
function q9(){
  clearCode();
  delCode();
  let myString="<strong>Paste these into the form and fix all the errors.</strong><br><br>";
  myString+="10 // Get Plate */<br>";
  myString+="20 goto(cupBoard);<br>";
  myString+="30 open cupBoard;<br>";
  myString+="40 get(plate)<br>";
  myString+="50 hold(Plate);<br>";
  myString+="60 close(cupboard);<br>";
  code.innerHTML=myString;
}

/* Question 10 */
function q10(){
  clearCode();
  delCode();
  let myString="<strong>Paste these into the form and put them in the right order.</strong><br><br>";
  myString+="/* Spread Jelly On Bread */<br>";
  myString+="get(jellyJar);<br>";
  myString+="scoop(jelly);<br>";
  myString+="get(knife);<br>";
  myString+="hold(jellyJar);<br>";
  myString+="spread(jelly,leftSlice);<br>";
  myString+="open(jellyJar);<br>";
  code.innerHTML=myString;
}

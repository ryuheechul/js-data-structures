load("bst.js");

var grades = genArray(100);
prArray(grades);
var gradedistro = new BST();
for (var i = 0; i < grades.length; ++i) {
   var g = grades[i];
   var grade = gradedistro.find(g);
   if (grade == null) {
      gradedistro.insert(g);
   }
   else {
      gradedistro.update(g);
   }
}
var cont = "y";

print("tree:")
gradedistro.root.nodePrint();

while (cont == "y") {
   print("\n\nEnter a grade: ");
   var g = parseInt(readline());
   var aGrade = gradedistro.find(g);
   if (aGrade == null) {
      print("No occurrences of " + g);
   }
   else {
      print("Occurrences of " + g + ": " + aGrade.count);
   }
   print("Look at another grade (y/n)? ");
   cont = readline();
}

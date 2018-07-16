function table(x)
{
  var x;
  var tableBody = '';
  for (var i=1; i<10; i++) {
    tableBody += x + "*" + i +"="+x*i + '\n';
  }
  console.log(tableBody);
}
table(2);
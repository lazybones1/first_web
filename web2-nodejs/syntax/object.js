var members = ['egoing', 'k8805', 'hoya'];
console.log(members[2]);

var i = 0;
while(i<members.length){
  console.log(members[i]);
  i = i+1;
}

var roles = {
  'programmer' : 'egoing',
  'designer' : 'k8805',
  'manager' : 'hoya'
}

console.log(roles.designer);
for(var name in roles){
  console.log(name, roles[name]);
}

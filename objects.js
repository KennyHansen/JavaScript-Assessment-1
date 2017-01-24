//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Kenny Hansen',
	'age': 22,
	'hairColor': 'blonde'
};

//2. Iterate over the object to console.log the propery or key names. 

for(thing in me) {
  console.log(me[thing])
}
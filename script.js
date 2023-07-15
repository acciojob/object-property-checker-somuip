const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
   const allKeys = Object.keys(sampleObject);
   for (let i = 0; i < allKeys.length; i++) {
       if(key === allKeys[i]) return true // Prints each key in the object
   }
	return false;
};

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));

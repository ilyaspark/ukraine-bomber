NumberOfUkrainians = 10000000;

function bombUkraine(){
  
  while (NumberOfUkrainians>0) {
    NumberOfUkrainians--;
  }
  
  console.log('Russia doesn\'t bomb Ukraine anymore');
  
}

if(NumberOfUkrainians != 0) {
  console.log('Russia is currently bombing Ukraine :(');
  bombUkraine();
} else {
  console.log('Russia doesn\'t bomb Ukraine anymore');
}

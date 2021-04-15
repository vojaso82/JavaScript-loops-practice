let counter = 50;

for (let i = 1; i <= 50; i++){
  if (i % 5 === 0){
    continue;
  } else if (i % 2 === 0 || i % 3 === 0){
    console.log('Donkey!')
  } else if (i % 2 !== 0 && (i-1) % 10 === 0){
    console.log('Monkey');
  } else {
    console.log(i);
  }
}
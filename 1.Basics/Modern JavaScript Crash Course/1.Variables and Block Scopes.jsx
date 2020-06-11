{
    // Block Scope
  }
  
  if (true) {
    // Block Scope
  }
  
  for (let i = 1; i <= 10; i++) {
    // Block Scope
  }
  
  function sum(a, b) {
    // Function Scope
    var result = a + b;
  }
  
  sum(4 + 3);

  //Scalar Values
  const answer=42;
  const greeting="hello";

  //Array and Objects
  const numbers=[2,4,6];
  const person={
      firstName:'Jhon',
      lastName:'Doe'
  };
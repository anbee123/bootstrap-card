/// Functions 

// we pass arguments into a function in order to use them inside

const add = ( a, b) => {
    return a + b
  }
  
  // We can pass arguments or "properties" into a react component the same 
  // way that we pass them into regular JS function
  
  const Button = () => {
    return <a href={location} className={button-style} >{button-text}</a>
  }
  
  // Passing properties down from one function to another nested function
  const other = (a, b, c ) => {
  
    let sum = add(a, b)
    
    return sum
  
  }
  
  other(1,2,3)
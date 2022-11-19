/// Functions 

import { createNodeArray } from "typescript"

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


  // .map() function is just like forEach but it returns an array os manipulates value
  const array = [1,2,3,4,5,6]
  const newArray=array.map(item => {
    return item + 1
  })
  //newArray -> [2,3,4,5,6,7]

  const stringArray = ["one", "two", "three"]
  const newestArray = stringArray.map (item => {
    return `number-${string}`
    return "number-" + item
  })
  //newstArray ->["number-one", "number-two", "number-three"]

 // Example of mapping with JSX
// cardArray.map(cardObj => {
//   return (
//     // JSX with variables goes here
//   )
// })



//another way to pull all the data
        // title={props.title}
        // text = {props.text}
        // url={props.url}
        // img={props.img}
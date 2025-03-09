export default function Destructing() {
    const person = { name: "John", age: 25 };
    const { name, age } = person;
  
    const numbers = ["one", "two", "three"];
    const [first, second, third] = numbers;
    
    return (
      <div id="wd-destructing">
        <h2>Destructing</h2>
        <h3>Object Destructing</h3>
        {JSON.stringify(person)} <br />
        name = {name} <br />
        age = {age} <br />
        <h3>Array Destructing</h3>
        {JSON.stringify(numbers)} <br />
        first = {first} <br />
        second = {second} <br />
        third = {third} <hr />
      </div>
    );
  }
  
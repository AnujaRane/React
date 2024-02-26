import './App.css'
import  Card from './components/Card'

function App() {

  // let newArray = [1,2,3,4];
  // let myObj = {
  //   username: "hitesh",
  //   age: 21
  // }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me" />
      <Card someObj="hitesh" btnText="visit me"/>
    </>
  )
}

export default App

import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-5 rounded-xl ' >React with Chai Tailwind CSS</h1>
      <Card username="Nikhil" btnText="Click me" imgUrl="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" userProfile="Software Engineer at Google"/>
      <Card username="Mayank"  imgUrl="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" userProfile="Software Engineer at Amazone"/>
    </>
  )
}

export default App

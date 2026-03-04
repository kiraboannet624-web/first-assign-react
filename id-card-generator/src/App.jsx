import "./App.css"
import IdCard from "./components/IdCard"
import { people } from "./data/people"

function App() {
  const name = "kirabo"

  return (
    <div className="min-h-screen p-6">
      <h1 className="rounded-lg bg-amber-200 p-3 text-center text-3xl font-bold">greetings</h1>
      <p className="mt-4 rounded-lg bg-amber-100 p-3 text-center text-2xl">Hello {name}</p>

<div className="mt-8 flex flex-wrap justify-center gap-6">
        {people.map((person) => (
          <IdCard
            key={person.id}
            image={person.image}
            name={person.name}
            role={person.role}
            department={person.department}
            idNumber={person.idNumber}
            email={person.email}
          />
        ))}
      
      </div>
    </div>
  )
}

export default App

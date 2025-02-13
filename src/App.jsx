import Student from "./Student.jsx";

function App() {
  return (
    <>
    <Student name="Spongebob" age="40" isStudent={true}/>
    <Student age={42} isStudent={false}/>
    <Student name="Squiward" age={50} isStudent={false}/>
    <Student name="Sandy" age={27} isStudent={true}/>
    <Student></Student>
    </>
  ); 
}

export default App

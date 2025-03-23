import { useCallback, useState, useEffect, useRef } from 'react'


function App() {

  const [length, setLength] = useState(8);
  const [allowsNumber, setAllowsNumber] = useState(false);
  const [allowCharacter, setAllowCharacter] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook\\
  const passwordRef = useRef(null)

  // const passwordGenerator=useCallback()
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (allowsNumber) str += "0123456789";
    if (allowCharacter) str += "!@#$%^&*(){:<>?/.,';[]</>";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, allowsNumber, allowCharacter, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password) 
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, allowsNumber, allowCharacter, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='my-5 text-center text-white font-bold p-2 text-3xl font-mono '>Random Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-2 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-500 hover:bg-blue-600 transition-colors duration-200 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-5 py-5'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={allowsNumber} id='numberInput' onChange={() => {
              setAllowsNumber((prev) => !prev);
            }} />
            <label className='ml-1' htmlFor='numberInput'>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={allowCharacter} id='characterInput' onChange={() => {
              setAllowCharacter((prev) => !prev);
            }} />
            <label className='ml-1' htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
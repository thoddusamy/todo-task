import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [list, setList] = useState([])

  const [text, setText] = useState('')

  let addList = () => {
    setList([
      ...list,
      {
        id: list.length + 1,
        name: text,
        active: false,
        isDelete: false,
        isCount: 0,
      },
    ])
  }

  let doneBtn = (id) => {
    let findId = list.findIndex((obj) => obj.id === id)
    list[findId].active = true
    list[findId].isCount = 1
    setList([...list])
  }

  let doubleClick = (id) => {
    let findId = list.findIndex((obj) => obj.id === id)
    list[findId].active = false
    list[findId].isCount = 0
    setList([...list])
  }

  let deleteTask = (id) => {
    let findDeleteId = list.findIndex((obj) => obj.id === id)
    list[findDeleteId].isDelete = true
    setList([...list])
  }

  return (
    <div>
      <input
        type='text'
        onChange={(textData) => setText(textData.target.value)}
      />
      <button onClick={addList}>Add</button>
      <ul>
        {list.map((item) => {
          return (
            <li className={item.isDelete ? 'delete' : ''}>
              <span
                className={
                  item.active == true && item.isCount == 1
                    ? 'strike-out'
                    : item.active == false && item.isCount == 0
                    ? 'non-strike-out'
                    : ''
                }
              >
                {item.name}
              </span>{' '}
              -{' '}
              <button
                onClick={() => doneBtn(item.id)}
                onDoubleClick={() => doubleClick(item.id)}
              >
                Done
              </button>{' '}
              - <button onClick={() => deleteTask(item.id)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App

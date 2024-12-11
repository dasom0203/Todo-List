import React, { useState, useEffect } from 'react';
import './App.css';
import TodoBoard from './components/todoBoard';
//import customAxios from './customAxios';

// Todo List 만들기
// ▶ 중요 여부 체크 + 인풋창 + 추가 버튼
// ▶ 인풋창에 값을 입력하고 추가 버튼을 누르면 아이템이 추가된다
// ▶ 아이템 수정 버튼을 누르면 내용, 중요 여부 수정이 가능하다.
// ▶ 아이템 삭제 버튼을 누르면 삭제가 가능하다.
// ▶ 필터링 보기 드롭다운 버튼을 누르면 완료/미완료/전체 선택이 가능하고, 필터링 조회가 가능하다
// ▶ 아이템 옆의 체크박스를 선택하면 상태가 완료로 변경되고 화면에서 사라진다.

function App() {
  
  // state 선언
  // 초기 값은 알 수 없으므로 빈 값
  const [inputValue, setInputValue] = useState('')

  // 아이템을 모아두는 배열
  const [todoList, setTodoList] = useState([])

  // 아이템 추가 버튼을 누르면 호출되는 함수
  const addItem = () => {
    console.log("im hererere!!!, inputValue")

    // 아이템 추가
    // 기존 아이템은 유지하고 새로 추가
    setTodoList([...todoList,inputValue])
  }

  return (
    <main>
      <h1>TODO LIST</h1>
      <h3>다솜님, 안녕하세요!</h3>

      <input value={inputValue}type="text" onChange={(event)=>setInputValue(event.target.value)}></input>
      <button onClick={addItem}>+</button>

      <TodoBoard todoList={todoList}></TodoBoard>
    </main>
  );

 
}

export default App;
import React, { useState, useEffect } from 'react';
import './App.css';
import customAxios from './customAxios';

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
  

  return (
    <div className="App">
      <header className="App-header">
        이 기기의 IP주소는 {ip} 오잉? 입니다.
      </header>
    </div>
  );
}

export default App;
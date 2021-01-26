import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';
import _api from "../lib/API";

function TimelineMemo() {

  const [lists, setLists] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    getValues();
  }, []);

  // DB 데이터를 가져온다
  const getValues = () => {

    _api.request({url:'values'})
      .then(data => {
        setLists(data);
      });
  }

  const changeHandler = (event) => {
    setValue(event.currentTarget.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    _api.request({ url: 'value', method: 'post', data: { value: value } })
      .then(data => {
        if (data) {
          setLists([...lists, data]);
          setValue("");
        } else {
          alert("값을 DB에 넣기 실패");
        }
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="container">
          {lists && lists.map((list, index) => (
            <li key={index}>{list.value}</li>
          ))}
          <form className="example" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="내용을 입력해주세요..."
              onChange={changeHandler}
              value={value}
            />
            <button type="submit">Go</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default TimelineMemo;

import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid,setIsValid]=useState(true)

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    // 입력값 유효성 체크
    if(enteredValue.trim().length ===0){
      // 사용자 피드백을 위한 어떠한 스타일링 필요
      setIsValid(false)
      return ;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        {/* style 속성 중 color 프로퍼티에 들어가는 값을 동적으로 설정 */}
        <label style={{color:!isValid?"red":"black"}}>Course Goal</label>
        <input style={{borderColor:!isValid?"red":"black"}} type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

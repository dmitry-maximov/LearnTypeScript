import React, { FC, useRef, useState } from 'react';

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  // e - это синтетикevent содержит множество значений
  // чтобы конкретизировать и получить необходимые значения задаем нужный тип для конкретного события
  // т к под target может подразумеваться все что угодно конкретизируем дженерик элемента

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert(value);
  };

  const clickHandlerRef = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert(inputRef.current?.value);
  };

  return (
    <div>
      <input
        value={value}
        onChange={changeHandler}
        type="text"
        placeholder="Управляемый"
      />
      <button onClick={clickHandler}>кнопка</button>
      <br />
      <input ref={inputRef} type="text" placeholder="Неуправляемый" />
      <button onClick={clickHandlerRef}>кнопка</button>
    </div>
  );
};

export default EventsExample;

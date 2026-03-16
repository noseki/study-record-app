import { useState } from 'react'
import './index.css'
import { InputRecord } from './components/InputRecord';
import { ShowRecords } from './components/ShowRecords';

export function StudyRecord() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState(0);
  const [records, setRecords] = useState([]);
  const [error, setError] = useState("");
  const [totalTime, setTotalTime] = useState(0);

  const onChangeTitle = (event) => setTitle(event.target.value);
  const onChangeTime = (event) => setTime(parseInt(event.target.value, 10));

  const onClickAdd = () => {
    if (!title || !time) {
      setError("入力されていない項目があります");
      return;
    }
    const newRecords = [...records, { title, time }];
    setRecords(newRecords);

    // 合計時間の算出
    setTotalTime(newRecords.reduce((accumulator, record) => accumulator + record.time, 0));

    // 値の初期化
    setTitle("");
    setTime(0);
    setError("");
  };

  return (
    <>
      <h1>学習記録一覧</h1>
      <InputRecord title={title} time={time} onChangeTitle={onChangeTitle} onChangeTime={onChangeTime} />
      <ShowRecords records={records} />
      <button onClick={onClickAdd}>登録</button>
      <p style={{ color: 'red' }}>{error}</p>
      <p>合計時間：{totalTime} / 1000 (h)</p>
    </>
  )
}

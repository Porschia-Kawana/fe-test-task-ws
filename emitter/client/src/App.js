import "./App.scss";
import React, { useState } from "react";
import { Slider } from '@mui/material';
import LeadershipTable from "./components/table/LeadershipTable";
import Tabs from "./components/tabs";
const marks = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 20,
    label: '20',
  }
];

function App() {
  const [limit, setLimit] = useState(10)

  const handleChange = (e) => {
    e.preventDefault();
    setLimit(e.target.value);
  }

  return (
    <section className="App">
      <Tabs tabs={[{ label: "Leaderboard", active: true }, { label: "Settings" }]}>
        <LeadershipTable limit={limit} />
        <div className="Slider">
          <strong>Limit</strong>
          <Slider
            data-cy="LeadershipTable__Slider"
            aria-label="Table size limit"
            defaultValue={limit}
            step={1}
            marks={marks}
            min={1}
            max={20}
            valueLabelDisplay="auto"
            onChange={e => handleChange(e)}
          />
        </div>
      </Tabs>
    </section>
  );
}

export default App;

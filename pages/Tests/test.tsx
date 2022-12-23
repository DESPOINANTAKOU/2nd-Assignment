import {useState} from 'react';

const App = () => {
  // 👇️ const employees: {salary: number;name: string;}[]
  const [employees, setEmployees] = useState<{salary: number; name: string}[]>(
    [],
  );

  return (
    <div>
      <button
        onClick={() =>
          setEmployees(prevEmployees => [
            ...prevEmployees,
            {salary: 100, name: 'Bob'},
          ])
        }
      >
        Add employee
      </button>

      {employees.map((employee, index) => {
        return (
          <div key={index}>
            <h2>
              salary: {employee.salary} / name: {employee.name}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default App;

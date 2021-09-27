import React, {useEffect, useState} from 'react';
import axios from "axios";
import Inputel from "./Components/Input";

const App = () => {
    const [employers, setEmployers] = useState([])
    const [isCheckedAll, setIsCheckedAll] = useState(false)
    const [selected,setSelected] = useState([])

    const handleCheck = (id,status) => {
        // setSelected(status && selected.filter(el=>el.id!==id)? [...selected,employers.find(el=>el.id===id )]:
        //     selected.filter((item) => item.id !== id && [...selected]))
        setSelected([...selected,employers.find(el=>el.id===id)])
    }

    useEffect(() => {
        axios("https://614dc32de3cf1f001712d2ff.mockapi.io/table")
            .then(result => setEmployers(result.data))
    }, [employers])

    return (
        <div className="row mt-5">
            <div className="col-6 offset-3">
                <table className="table table-primary">
                   <thead>
                      <tr>
                       <th><input type="checkbox"
                                  onChange={(e)=>setIsCheckedAll(e.target.checked)}/></th>
                       <th>Имя</th>
                       <th>Фамилия</th>
                       <th>Возраст</th>
                      </tr>
                   </thead>
                    <tbody>
                    {
                        employers.map(el=>
                            <Inputel key={el.id} el={el}
                                       isCheckedAll={isCheckedAll}
                                       handleCheck={handleCheck}
                            />
                        )
                    }
                    </tbody>
                </table>
                <p>Пользователи: {
                    selected.map(el=>
                        <span>{el.name}<br/></span>
                    )
                }</p>
            </div>
        </div>
    );
};

export default App;

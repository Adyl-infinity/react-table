import React, {useEffect, useState} from 'react';

const Inputel = ({el, isCheckedAll,handleCheck}) => {

    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        setIsChecked(isCheckedAll)
    }, [isCheckedAll])

    return (

        <tr className="table__row">
            <td className="text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    <input type="checkbox"
                           checked={isChecked}
                           onChange={(e) => {
                               setIsChecked(e.target.checked)
                               handleCheck(el.id,e.target.checked)
                           }}

                    />
                </p>
            </td>
            <td className="text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {el.name}
                </p>
            </td>
            <td className="text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {el.surname}
                </p>
            </td>
            <td className="text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {el.age}
                </p>
            </td>
        </tr>

    );
};

export default Inputel;
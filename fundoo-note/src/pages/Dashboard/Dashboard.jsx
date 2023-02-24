import { green } from '@mui/material/colors';
import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import TakeNote1 from '../../components/TakeNote1/TakeNote1';
import TakeNote2 from '../../components/TakeNote2/TakeNote2';
import TakeNote3 from '../../components/TakeNote3/TakeNote3';
import { getListApi } from '../../services/DataService';

function Dashboard() {

    const [toggle, setToggle] = useState(true);
    const [DataList, setDataList] = useState([])


    const openNote = () => {
        setToggle(false)
    }

    const closeNote = () => {
        setToggle(true)
    }

    const getListMethod = () => {
        getListApi()
            .then(response => {
                console.log(response)
                setDataList(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const autoRefresh = () => {
        getListMethod()
    }

    useEffect(() => {
        getListMethod()
    }, [])
    console.log(DataList)


    return (

        <div>
            <Header />
            {
                toggle ? <TakeNote1 openNote={openNote} /> : <TakeNote2 closeNote={closeNote}  autoRefresh={autoRefresh}/>
            }

            <div style={{ position: 'relative', top:'60px', left: '210px' , width: '72vw', height: '100%', display: 'flex', flexWrap: 'wrap', gap:'15px',}}>
                {
                    DataList.map(note => (
                        <TakeNote3 note={note} autoRefresh={autoRefresh} />
                    ))
                }
            </div>

        </div>

    )
}

export default Dashboard
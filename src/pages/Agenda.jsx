
import React, {useState} from "react"
import SearchBar from '../components/SearchBar/SearchBar';
import Workshop from "../components/Workshop/Workshop";
import { data_agenda } from '../data/data-agenda.jsx'


const Agenda = () => {
    // const workshops = useMany<{key,title,}>({resource, ids}).data?.data
    const [inputValue, setInputValue] = useState("");

    return (
        <div id='agenda-section' className='app-section'>
            <div>
                    <h1 className='titol-agenda'>Agenda</h1>
                    <p>Aquí ve una mica d'explicació. Quins dies, quines temàtiques, quins nivells.</p>
            </div>
            <div className='agenda'>
                <SearchBar
                    onChange = {(e) => setInputValue(e.target.value)} 
                />
                {data_agenda
                .filter((item) => {

// AQUÍ TAMBÉ ESTEM FILTRANT SEGONS LA DESCRIPCIÓ                    
                    return inputValue.toLowerCase() === "" ? item : (item.title.toLowerCase().includes(inputValue) || item.description.toLowerCase().includes(inputValue));
                }).map((item) => (
                    <Workshop
                        title={item.title}
                        level={item.title}
                        kind={item.kind}
                        description={item.description}
                        date={item.date}
                        time={item.time} 
                        place={item.place}
                    />
                ))}
            </div>
        </div>
    )
  };
  
  export default Agenda;
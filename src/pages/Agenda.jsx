
import { useState } from "react";
import SearchBar from '../components/SearchBar/SearchBar';
import Filter from '../components/Filter/Filter';
import Workshop from "../components/Workshop/Workshop";
import { data_agenda } from '../data/data-agenda.jsx';


const Agenda = () => {
    // const workshops = useMany<{key,title,}>({resource, ids}).data?.data
    const [inputValue, setInputValue] = useState("");
    const [activeFilter, setActiveFilter] = useState("");
    const levels = ["Beginner", "Advanced"];

    const [activeFilter2, setActiveFilter2] = useState("");
    const days = ["11 de maig", "12 de maig"];

    return (
        <div id='agenda-section' className='app-section'>
            <div style={{ paddingBottom: "20px" }}>
                <h1 className='titol-agenda'>Agenda</h1>
                <p>Al llarg de l&apos;11 i 12 de maig tindran llocs els Data Days, oferint un conjunt ric i divers de xerrades, tallers i activitats. <br></br>
                    Data Days ofereix dos possibles tracks: &quot;Beginner Friendly&quot; i &quot;Advanced&quot;. Dins el primer s&apos;inscriuen les xerrades i tallers
                    que poden seguir-se activament amb coneixements bàsics o nuls, per introduir-te al món de la ciència de dades. El segon inclou
                    continguts que requereixen de coneixements previs i s&apos;endinsen en temàtiques més concretes i avançades. Tanmateix, si és un tema que
                    realment t&apos;interessa, que no et tiri enrere!</p>
            </div>
            <div className='agenda'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="container">
                                <h6>Filtre per track</h6>
                                <div className="row">
                                    {
                                        levels.map((level) => {
                                            return (
                                                <Filter
                                                    key={`filter-${level}`}
                                                    level={level}
                                                    isActive={level === activeFilter}
                                                    onClick={(e) => {
                                                        const el = e.target;
                                                        el.textContent !== activeFilter
                                                            ? setActiveFilter(level)
                                                            : setActiveFilter("");
                                                    }}
                                                />
                                            );
                                        })}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="container">
                                <h6>Filtre per data</h6>
                                <div className="row">
                                    {
                                        days.map((day) => {
                                            return (
                                                <Filter
                                                    key={`filter-${day}`}
                                                    level={day}
                                                    isActive={day === activeFilter2}
                                                    onClick={(e) => {
                                                        const el = e.target;
                                                        el.textContent !== activeFilter2
                                                            ? setActiveFilter2(day)
                                                            : setActiveFilter2("");
                                                    }}
                                                />
                                            );
                                        })}

                                </div>
                            </div>
                        </div>
                    </div>
                    <SearchBar onChange={(e) => setInputValue(e.target.value)} />
                </div>

                {data_agenda
                    .filter((item) => {
                        // AQUÍ TAMBÉ ESTEM FILTRANT SEGONS LA DESCRIPCIÓ                    
                        return inputValue.toLowerCase() === "" ? item : (item.title.toLowerCase().includes(inputValue.toLowerCase()) || item.description.toLowerCase().includes(inputValue.toLowerCase()));
                    })
                    .filter((item) => {
                        return item.level.includes(activeFilter);
                    })
                    .filter((item) => {
                        return item.date.includes(activeFilter2);
                    })
                    .map((item, idx) => (
                        <Workshop
                            key={`workshop-${idx}`}
                            title={item.title}
                            level={item.level}
                            kind={item.kind}
                            small_description={item.small_description}
                            description={item.description}
                            date={item.date}
                            time={item.time}
                            place={item.place}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Agenda;
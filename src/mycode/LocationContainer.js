import {useState, useEffect} from 'react';
import LocationInfo from './LocationInfo'

const LocationContainer = (props) => {
    const [location, setLocation] = useState(false)
    const [nameLoc, setNameLoc] = useState("");
    const [typeLoc, setTypeLoc] = useState("");
    const [dimension, setDimension] = useState("");
    const [residents, setResidents] = useState("");
    const randomLocation = Math.floor(Math.random() * 108);
    
    const getDimesions = () => {
        fetch(`https://rickandmortyapi.com/api/location/${randomLocation}`)
            .then((response) => response.json())
            .then((data) => {
                setLocation(true)
                setNameLoc(data.name)
                setTypeLoc(data.type)
                setDimension(data.dimension)
                setResidents(data.residents)
                console.log(data)
            })
    }

    useEffect( () => {
        getDimesions();
    }, []
    )

    return(
        <div>
            {location &&
                <LocationInfo name={nameLoc} type={typeLoc} dimension={dimension} residents={residents}/>
            }
        </div>
    )
}

export default LocationContainer;
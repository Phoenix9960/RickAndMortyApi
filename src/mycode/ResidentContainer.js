import {useState, useEffect} from 'react';
import ResidentInfo from './ResidentInfo';
import axios from 'axios';

const ResidentContainer = (props) => {
    const [characters, setCharacters] = useState(props.residentsUrl);
    const [temp, setTemp] = useState()

    const requestInfoCharacter = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                //console.log(data);
                setTemp(data)
            })
    }

    useEffect(() => {
        if(characters.length > 10){
            console.log("muchos residentes")
            setCharacters(characters.splice(10,characters.length));
        }
        characters.map((character) => {
            requestInfoCharacter(character)
        })
    }, [temp])

    return(
        <div>
        </div>
    )
}

export default ResidentContainer;
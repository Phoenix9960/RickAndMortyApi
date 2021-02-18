import ResidentContainer from './ResidentContainer';

const LocationInfo = (props) => {
    const localPeople = props.residents;

    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h3>Type: {props.type}</h3>
            <p>
                Dimension: {props.dimension}
            </p>
            <p>
                Residents: {localPeople.length}
            </p>
            {localPeople.length > 0 &&
                <ResidentContainer residentsUrl={localPeople}/>
            }
        </div>
    )
}

export default LocationInfo;
import Dropdown from 'react-bootstrap/Dropdown';
import stateData from '../data/index.js'

function DropDownButton(){

    const getStates = () => {
        let states = []
        for(let i = 0; i < stateData.length; i++) {
          states.push(<Dropdown.Item id={`${i}`} key={`${i}`}>{stateData[i].name}</Dropdown.Item>)
        }
        return states
      }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                States
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {getStates()}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default DropDownButton
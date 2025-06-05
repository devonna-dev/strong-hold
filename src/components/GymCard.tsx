import styled from "styled-components";
import type GymType from "../types/GymType";


const GymCard = ({ gymDatum }: { gymDatum: GymType }) => {
    return (
        <StyledGymCardDiv id={gymDatum.name}>
            <header>
                <h2>{gymDatum.name}</h2>
            </header>
            <div className={'content'}>
                <p>
                    {gymDatum.description}
                </p>
                <p>
                    {gymDatum.address.lineOne}
                </p>
                <p>
                    {gymDatum.address.lineTwo && gymDatum.address.lineTwo}
                </p>
                <p>
                    {gymDatum.address.city}
                </p>
                <p>
                    {gymDatum.address.state}
                </p>
                <p>
                    {gymDatum.address.zip}
                </p>
            </div>
        </StyledGymCardDiv>
    )
}

const StyledGymCardDiv = styled.div`
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 350px;
    width: 50%;
    box-shadow: 0px 7px 14px 0px hsl(0deg 0% 0% / 0.47);
    border-radius: 25px;
    
    display: flex;
    flex-direction: column;
`
// box - shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
export default GymCard;
import styled from "styled-components";
import type GymType from "../types/GymType";


const GymCard = ({ gymDatum }: { gymDatum: GymType }) => {
    return (
        <StyledGymCardDiv id={gymDatum.name}>
            {gymDatum.name}
        </StyledGymCardDiv>
    )
}

const StyledGymCardDiv = styled.div`
    margin: auto;
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 250px;
    width: 50%;
    box-shadow: 0px 7px 14px 0px hsl(0deg 0% 0% / 0.47);
    border-radius: 25px;

`
// box - shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
export default GymCard;
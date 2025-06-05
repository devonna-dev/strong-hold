import type GymType from "../types/GymType";


const GymCard = ({ gymDatum }: { gymDatum: GymType }) => {
    return (
        <div id={gymDatum.name}>
            {gymDatum.name}
        </div>
    )
}



export default GymCard;
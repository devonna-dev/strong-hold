import { Button } from "react-aria-components"
import styled from "styled-components"


interface AccountButtonProps {
    backgroundColor?: string;
    textColor?: string;
    buttonText: string;
    onClick: () => void;
}

const AccountButton = ({ backgroundColor = '#FFFFFF', textColor = '#0e2148', buttonText, onClick }: AccountButtonProps) => {
    return (
        <StyledButton backgroundColor={backgroundColor} textColor={textColor} onPress={onClick}>{buttonText}</StyledButton>
    )
}



const StyledButton = styled(Button) <{ backgroundColor: string, textColor: string }>`
  margin-right: 1rem;
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  border-radius: 20px;
  border-width: 1px;
  width: 6rem;
  height: 3rem;
`

export default AccountButton;
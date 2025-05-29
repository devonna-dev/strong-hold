import { Button } from "react-aria-components"
import styled from "styled-components"

const NavBar = () => {
    return (
        <StyledNavDiv>
            <img src={'src/assets/logoipsum357.svg'} alt='Stronghold shield logo' height="25" width="25" />
            <div>
                <StyledLoginButton onPress={() => { console.log('Pressed login') }}>Login</StyledLoginButton>
                <StyledSignupButton onPress={() => { console.log('Press sign up') }}>Sign up</StyledSignupButton>
            </div>
        </StyledNavDiv>
    )
}

const StyledNavDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 6rem;
  justify-content: space-between;
  background-color: #EAEFEF;
  align-items: center;
`
const StyledLoginButton = styled(Button)`
  margin-right: 1rem;
  background: #FFFFFF;
  border-radius: 15px;
  border-width: 1px;
  width: 5rem;
  height: 2rem;
`

const StyledSignupButton = styled(Button)`
  margin-right: 1rem;
  background: #FFFFFF;
  border-radius: 15px;
  border-width: 1px;
  width: 5rem;
  height: 2rem;
`

export default NavBar;
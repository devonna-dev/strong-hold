import { Button } from "react-aria-components"
import styled from "styled-components"

const NavBar = () => {
  return (
    <StyledNavDiv>
      <StyledImage src={'src/assets/logoipsum357.svg'} alt='Stronghold shield logo' height="50" width="50" />
      <div>
        <StyledLoginButton onPress={() => { console.log('Pressed login') }}>Login</StyledLoginButton>
        <StyledSignupButton onPress={() => { console.log('Press sign up') }}>Sign up</StyledSignupButton>
      </div>
    </StyledNavDiv>
  )
}

const StyledImage = styled.img`
  margin-left: 1rem;
`

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
  border-radius: 20px;
  border-width: 1px;
  width: 6rem;
  height: 3rem;
`

const StyledSignupButton = styled(Button)`
  margin-right: 1rem;
  background: #483AA0;
  color: white;
  border-radius: 20px;
  border-width: 1px;
  width: 6rem;
  height: 3rem;
`

export default NavBar;
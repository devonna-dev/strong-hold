import styled from "styled-components"
import AccountButton from "./AccountButton"

const NavBar = () => {
  return (
    <StyledNavDiv>
      <StyledImage src={'src/assets/logoipsum357.svg'} alt='Stronghold shield logo' height="50" width="50" />
      <div>
        <AccountButton onClick={() => { console.log('Pressed login') }} buttonText={"Login"} />
        <AccountButton backgroundColor={' #483AA0'} textColor={'#FFFFFF'} onClick={() => { console.log('Pressed signup') }} buttonText={'Signup'} />
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

export default NavBar;
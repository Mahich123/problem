import React from 'react'
import styled  from 'styled-components'
import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    return (
      <Container>
          <LeftSection>
              <img src='/punch.png' className="image" alt=''/>
          </LeftSection>
          <Border>

          </Border>
          <Vlogo>
          <img src='/oip2.png' className="image" alt=''/>
          </Vlogo>
          <GameText>
              GAME INFO
          </GameText>
          <MiddleSection>
              <NavList>
                  <h2>MEDIA</h2>
                  <h2>NEWS</h2>
                  <h2>LEADERBOARDS</h2>
                  <h2>ESPORTS</h2>
                  <h2>MORE</h2>
              </NavList>
          </MiddleSection>
          <RightSection>
            <Globe>
              <LanguageIcon />
            </Globe>
            <Button>
                PLAY NOW
                <MenuIcon />
            </Button>
          </RightSection>
      </Container>
    )
}

export default Header
const Container = styled.div`
    // max-width: 100%;
    height: 76px;
    background: black;
    display: flex;
    align-items: center;
    vertical-align: middle; 
`
const LeftSection = styled.div`
    // display: flex;
   .image {
       width: 48px;
       height: 48px;
       border-radius: 50%;
       margin: 5px 0 0 24px;
   }
`
const Border = styled.div`
    border-left: 2px solid #7e7e7e;
    display: inline-block;
    font-size: 14px;
    height: 30px;
    margin: 4px 0 0 17px;
    vertical-align: top;
    opacity: .4;
`
const Vlogo = styled.div`
.image {
    width: 81px;
    height: 75px;
}
@media only screen and (max-width: 768px) {
    .image {
        display: none;
    }
}
`
const GameText = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    font-weight: 800;
    font-size: 12px;
    : hover {
        color: #D54C4C;
    }
    @media only screen and (max-width: 768px) {
        display: none;
    } 
`
const MiddleSection = styled.div`
    display: flex;
    padding-left: 7.5rem;
    height: 73px;

    @media only screen and (max-width: 768px) {
        // background: url('/valor.jpg');
        background-repeat: no-repeat;
        // display: none;
    }
`

const NavList = styled.div`
    display: flex;
    color: #fff;
    align-items: center;
    h2 {
        font-size: 12px;
        font-weight: 800;
        padding: 2.5rem;
        height: -webkit-fill-available;
        padding-top: 23px;
    }   
    h2:hover {
        color: #D54C4C;
    }

    @media only screen and (max-width: 768px) {
        h2 {
            display: none;
        }
    }
`
const Globe = styled.div`
    width: 32px;
    height: 32px;
    color: #fff;
    border-radius: 16px;
    background-color: #212121;
    display : flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    margin-top: 6px;

    @media only screen and (max-width: 768px) {
        margin-left: 4rem;
    }
`
const RightSection = styled.div `
   display: flex;
   margin: 0 0 0 8rem;
`
const Button = styled.div`
    color: #fff;
    background: rgb(255, 70, 85);
    min-width: 129px;
    max-width: 220px;
    padding: 12px 0;
    text-align: center;
    border-radius: 2px;
    font-weight: 800;
    > .MuiSvgIcon-root {
        display: none;
    }
    @media only screen and (max-width: 768px) {
       display: none;
       > .MuiSvgIcon-root {
        display: inline-block;
    }
    }
`
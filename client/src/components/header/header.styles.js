import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px 5px;
    margin-bottom: 20px;
  }
`
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 12px 25px;
  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`
export const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 20px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    width: 80%;
    font-size: 18px;
  }
`
export const OptionsLink = styled(Link)`
  padding: 10px 25px;
  @media screen and (max-width: 800px) {
    padding: 10px 5px;
  }
`





// Style your elements here
import styled from 'styled-components'

export const UnlockLockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  min-height: 100vh;
`

export const ImageAndTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Image = styled.img`
  width: 96px;
`

export const Text = styled.p`
  color: #e2e8f0;
  font-family: 'Roboto';
  font-size: 15px;
  margin-top: 25px;
  margin-bottom: 90px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 25px;
    margin-bottom: 70px;
    line-height: 1.5;
  }
`

export const Button = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  background-color: #06b6d4;
  border: none;
  border-radius: 12px;
  margin-top: 90px;
  padding: 12px 24px;
  cursor: pointer;
  outline: none;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    margin-top: 70px;
  }
`

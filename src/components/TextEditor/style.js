import styled from 'styled-components'

export const Heading = styled.h1`
  color: '#ffffff';
  font-family: 'Roboto';
  text-align: center;
  font-size: 20px;
`
export const Button = styled.button`
  background-color: transparent;
  color: ${props => props.color};
`

export const UnderlineButton = styled.button`
  background-color: transparent;
  color: ${props => props.color};
`
export const ItalicButton = styled.button`
  background-color: transparent;
  color: ${props => props.color};
`
export const Image = styled.img`
  height: 20px;
  width: 200px;
`
export const ImageElement = styled.div`
  display: flex;
  flex-direction: row;
  align-item: center;
  justify-content: center;
  min-height: 40vh;
`
export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #25262c;
  min-heiht: 40vh;
  min-width: 23vw;
`
export const HrElememt = styled.hr`
  color: #cbd5e31;
  widtg: 100px;
`
export const ButtonContainer = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 0px;
  margin: 10px;
`
export const TextAreaElement = styled.textarea`
  background-color: transparent;
  margin: 20px;
  color: #f1f5f9;
  font-size: 13px;
  font-style: ${props => props.fontStyle};
  font-weight: ${props => props.fontWeight};
  font-decoration:${props =>props.textDecoration}
`
export default Heading

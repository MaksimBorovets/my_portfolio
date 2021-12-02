import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;



export const ImgAvatar = styled.img`
  width:50%;
  height:50%;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.md} {
  width:40%;
  height:40%;
  border-radius: 25%;
  object-fit: cover;
  overflow: hidden;
  }
`

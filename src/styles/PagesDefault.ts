import { styled } from 'styled-components';

export const IconTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    font-size: 16px;
    color: ${(props) => props.theme['base-subtitle']};
  }

  img {
    width: 1.23rem;
    height: 1.23rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const PageDefaultContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 13rem;
  width: 100vw;
  align-items: center;
`;

export const InfoDefaultContainer = styled.div`
  display: flex;
  width: 54rem;
  background-color: ${(props) => props.theme['base-main']};
  border-radius: 10px;
  padding: 2rem;
`;

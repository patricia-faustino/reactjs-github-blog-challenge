import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 18.5rem;
  background-color: ${(props) => props.theme['base-profile']};
  position: relative;

  /* &::before, &::after {
        content: '';
        position: absolute;
        width: 200%;
        height: 200%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: radial-gradient(circle, ${(props) =>
    props.theme['blue']}  0%, ${(props) => props.theme['blue']}  70%);
        pointer-events: none; 
    }

    &::before {
        background: radial-gradient(circle, ${(props) =>
    props.theme['blue']}  0%, r${(props) => props.theme['blue']}  70%);
        transform: translate(-50%, -50%) scale(1.5);
    }

    &::after {
        background: radial-gradient(circle, rgba${(props) =>
    props.theme['blue']} 0%, rgba(255, 255, 255, 0) 70%);
        transform: translate(-50%, -50%) scale(1);
    } */
`;

export const EffectLeft = styled.img`
  position: absolute;
  top: 70px;
  left: 0;
  height: 11.75rem;
  width: 25.56rem;
`;

export const EffectRight = styled.img`
  position: absolute;
  top: 30px;
  right: 0;
  height: 14.75rem;
  width: 23.19rem;
`;

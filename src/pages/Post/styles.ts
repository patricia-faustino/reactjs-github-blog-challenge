import styled from 'styled-components';
import { InfoDefaultContainer, PageDefaultContainer } from '../../styles/PagesDefault';

export const PostContainer = styled(PageDefaultContainer)``;

export const InfoPostContainer = styled(InfoDefaultContainer)`
  flex-direction: column;
  height: 10.5rem;
`;

export const PostTitlteStyle = styled.div`
  padding: 8px 0 20px;

  h1 {
    font-size: 24px;
    color: ${(props) => props.theme['base-title']};
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;

  color: ${(props) => props.theme['blue']};

  a {
    display: flex;
    gap: 0.5rem;
    font-size: 12px;
    font-weight: bold;
  }
`;

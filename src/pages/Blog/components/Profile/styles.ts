import { styled } from 'styled-components';
import { InfoDefaultContainer } from '../../../../styles/PagesDefault';

export const ProfileContainer = styled(InfoDefaultContainer)`
  height: 13.25rem;
  gap: 2rem;
  color: ${(props) => props.theme['text-primary']};
`;

export const AvatarProfile = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
`;

export const TitleGithub = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 38.25rem;

  h1 {
    font-size: 24px;
    color: ${(props) => props.theme['base-title']};
  }

  a {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['blue']};
    gap: 0.5rem;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme['blue']};
    }

    span {
      font-size: 12px;
    }

    img {
      height: 0.75rem;
      width: 0.75rem;
    }
  }
`;

export const DescriptionProfile = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme['base-text']};
  margin: 8px 0px 24px;
  min-height: 4.25rem;
`;

export const ContentPostContainer = styled.div`
  padding: 2.5rem 2rem;
  width: 54rem;

  color: ${(props) => props.theme['base-text']};

  img {
    width: 100%;
  }
`;

import {
  AvatarProfile,
  DescriptionProfile,
  ProfileContainer,
  TitleGithub,
} from './styles';
import githubIcon from '../../../../assets/github-brands.svg';
import companyIcon from '../../../../assets/building-solid.svg';
import followersIcom from '../../../../assets/user-group-solid.svg';
import arrowUpIcon from '../../../../assets/arrow-up-right-from-square-solid.svg';
import {
  InfoContainer,
  IconTitleContainer,
} from '../../../../styles/PagesDefault';
import { IssuesContext } from '../../../../context/IssuesContext';
import { useContextSelector } from 'use-context-selector';

export interface ProfileApiResponse {
  name: string;
  avatar_url: string;
  bio: string;
  company: string;
  followers: number;
  login: string;
  html_url: string;
}

export interface Profile {
  name: string;
  avatarUrl: string;
  descriptionBio: string;
  company: string;
  followers: number;
  login: string;
  perfilUrl: string;
}

export function Profile() {
  const user = useContextSelector(IssuesContext, (context) => context.user);

  return (
    <ProfileContainer>
      <AvatarProfile src={user?.avatarUrl} />
      <div>
        <TitleGithub>
          <h1>{user?.name}</h1>

          <a href={user?.perfilUrl}>
            <span>GITHUB</span>
            <img src={arrowUpIcon} />
          </a>
        </TitleGithub>

        <DescriptionProfile>{user?.descriptionBio}</DescriptionProfile>

        <InfoContainer>
          <IconTitleContainer>
            <img src={githubIcon} />
            <p>{user?.login}</p>
          </IconTitleContainer>

          <IconTitleContainer>
            <img src={companyIcon} />
            <p>{user?.company}</p>
          </IconTitleContainer>

          <IconTitleContainer>
            <img src={followersIcom} />
            <p>{user?.followers} seguidores</p>
          </IconTitleContainer>
        </InfoContainer>
      </div>
    </ProfileContainer>
  );
}

import { useCallback, useEffect, useState } from 'react';
import {
  Issue,
  IssuesApiResponse,
  IssuesContext,
} from '../../context/IssuesContext';
import { InfoContainer, IconTitleContainer } from '../../styles/PagesDefault';
import githubIcon from '../../assets/github-brands.svg';
import chevronLeftIcon from '../../assets/chevron-left-solid.svg';
import arrowUpIcon from '../../assets/arrow-up-right-from-square-solid.svg';
import calendarIcon from '../../assets/calendar-day-solid.svg';
import commentIcon from '../../assets/comment-solid.svg';
import {
  LinkContainer,
  InfoPostContainer,
  PostContainer,
  PostTitlteStyle,
} from './styles';
import { useParams } from 'react-router-dom';
import { api } from '../../lib/axios';
import { mapApiResponseToIssue } from '../../utils/MapperIssue';
import { NavLink } from 'react-router-dom';
import { ContentPostContainer } from '../Blog/components/Profile/styles';
import Markdown from 'react-markdown';
import { useContextSelector } from 'use-context-selector';

export function Post() {
  let params = useParams();
  const username = useContextSelector(
    IssuesContext,
    (context) => context.user?.login,
  );
  const [selectedIssue, setSelectedIssue] = useState<Issue>();

  const fetchIssue = useCallback(async () => {
    const response = await api.get<IssuesApiResponse>(
      `/repos/patricia-faustino/reactjs-github-blog-challenge/issues/${params.id}`,
    );
    return mapApiResponseToIssue(response.data);
  }, []);

  useEffect(() => {
    fetchIssue().then((issue) => setSelectedIssue(issue));
  }, [params.id]);

  return (
    <PostContainer>
      <InfoPostContainer>
        <LinkContainer>
          <NavLink to="/">
            <img src={chevronLeftIcon} />
            <span>VOLTAR</span>
          </NavLink>
          <a href={selectedIssue?.url}>
            <span>VER NO GITHUB</span>
            <img src={arrowUpIcon} />
          </a>
        </LinkContainer>

        <PostTitlteStyle>
          <h1>{selectedIssue?.title}</h1>
        </PostTitlteStyle>
        <InfoContainer>
          <IconTitleContainer>
            <img src={githubIcon} />
            <p>{username}</p>
          </IconTitleContainer>

          <IconTitleContainer>
            <img src={calendarIcon} />
            <p>Há {selectedIssue?.differenceCreatedAtAndDateNow} dias</p>
          </IconTitleContainer>

          <IconTitleContainer>
            <img src={commentIcon} />
            <p>{selectedIssue?.comments} comentários</p>
          </IconTitleContainer>
        </InfoContainer>
      </InfoPostContainer>

      <ContentPostContainer>
        <Markdown>{selectedIssue?.body}</Markdown>
      </ContentPostContainer>
    </PostContainer>
  );
}

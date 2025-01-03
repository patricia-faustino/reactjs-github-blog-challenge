import { IssuesApiResponse, Issue } from '../context/IssuesContext';
import { ProfileApiResponse, Profile } from '../pages/Blog/components/Profile';
import { calculateDifferenceInDays } from './DateUtils';

export const mapApiResponseToIssues = (
  issuesResponse: IssuesApiResponse[],
): Issue[] => {
  let issues = [];
  for (const issue of issuesResponse) {
    issues.push({
      differenceCreatedAtAndDateNow: calculateDifferenceInDays(
        issue.created_at,
      ),
      title: issue.title,
      body: issue.body,
      url: issue.html_url,
      createdAt: issue.created_at,
      number: issue.number,
      comments: issue.comments,
    });
  }
  return issues;
};

export const mapApiResponseToIssue = (
  issueResponse: IssuesApiResponse,
): Issue => {
  let issues = {
    differenceCreatedAtAndDateNow: calculateDifferenceInDays(
      issueResponse.created_at,
    ),
    title: issueResponse.title,
    body: issueResponse.body,
    url: issueResponse.html_url,
    createdAt: issueResponse.created_at,
    number: issueResponse.number,
    comments: issueResponse.comments,
  };

  return issues;
};

export const mapApiResponseToProfile = (
  apiResponse: ProfileApiResponse,
): Profile => {
  return {
    avatarUrl: apiResponse.avatar_url,
    name: apiResponse.name,
    descriptionBio: apiResponse.bio,
    company: apiResponse.company,
    followers: apiResponse.followers,
    login: apiResponse.login,
    perfilUrl: apiResponse.html_url,
  };
};

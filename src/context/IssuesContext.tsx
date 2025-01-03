import { ReactNode, useCallback, useEffect, useState } from 'react';
import { api } from '../lib/axios';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import {
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from 'react-hook-form';
import {
  mapApiResponseToIssues,
  mapApiResponseToProfile,
} from '../utils/MapperIssue';
import { Profile, ProfileApiResponse } from '../pages/Blog/components/Profile';
import { createContext } from 'use-context-selector';

export interface IssuesApiResponse {
  created_at: string;
  title: string;
  body: string;
  html_url: string;
  number: number;
  comments: number;
}

export interface Issue {
  differenceCreatedAtAndDateNow: number;
  title: string;
  body: string;
  url: string;
  createdAt: string;
  number: number;
  comments: number;
}

interface IssusesContextType {
  issues: Issue[];
  selectedIssue: Issue | undefined;
  user: Profile | undefined;
  handleSubmit: UseFormHandleSubmit<{ searchIssue: string }, undefined>;
  register: UseFormRegister<{ searchIssue: string }>;
  handleSetSearchIssue: (searchIssueInput: string) => void;
  handleSetSelectedIssue: (issue: Issue) => void;
}

const newSearchIssue = zod.object({
  searchIssue: zod.string(),
});

export type NewSearchFormInputs = zod.infer<typeof newSearchIssue>;

interface IssuesContextProviderProps {
  children: ReactNode;
}

export const IssuesContext = createContext({} as IssusesContextType);

export function IssuesContextProvider({
  children,
}: IssuesContextProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [user, setUser] = useState<Profile>();
  const [searchIssue, setSearchIssue] = useState<string>('');
  const [selectedIssue, setSelectedIssue] = useState<Issue>();

  const newSearchForm = useForm<NewSearchFormInputs>({
    resolver: zodResolver(newSearchIssue),
    defaultValues: {
      searchIssue: '',
    },
  });

  const { handleSubmit, register, reset } = newSearchForm;
  const username = 'patricia-faustino';
  const repo = 'reactjs-github-blog-challenge';

  const fetchIssues = useCallback(async (): Promise<Issue[]> => {
    const response = await api.get<{ items: IssuesApiResponse[] }>(
      `/search/issues?q=${searchIssue}%20repo:${username}/${repo}`,
      {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    );
    return mapApiResponseToIssues(response.data.items);
  }, [searchIssue]);

  const fetchUser = useCallback(async (): Promise<Profile> => {
    const response = await api.get<ProfileApiResponse>(`/users/${username}`, {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });

    return mapApiResponseToProfile(response.data);
  }, [username]);

  function handleSetSearchIssue(searchIssueInput: string) {
    setSearchIssue(searchIssueInput);
  }

  function handleSetSelectedIssue(issue: Issue) {
    setSelectedIssue(issue);
    setSearchIssue('');
    reset();
  }

  useEffect(() => {
    fetchUser().then((user) => setUser(user));
  }, [username]);

  useEffect(() => {
    fetchIssues().then((issues) => setIssues(issues));
  }, [searchIssue]);

  return (
    <IssuesContext.Provider
      value={{
        issues,
        selectedIssue,
        user,
        handleSubmit,
        register,
        handleSetSearchIssue,
        handleSetSelectedIssue,
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
}

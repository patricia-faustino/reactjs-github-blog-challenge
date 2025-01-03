import {
  FormStyle,
  IssuesContainer,
  MarkdownStyle,
  PostContainer,
  PostStyle,
  PublicationsInfoStyle,
  TitleAndCreatedAtStyle,
} from './styles';
import {
  IssuesContext,
  NewSearchFormInputs,
} from '../../../../context/IssuesContext';
import { useContextSelector } from 'use-context-selector';

export function Issues() {
  const {
    register,
    handleSubmit,
    issues,
    handleSetSearchIssue,
    handleSetSelectedIssue,
  } = useContextSelector(IssuesContext, (context) => ({
    register: context.register,
    handleSubmit: context.handleSubmit,
    issues: context.issues,
    handleSetSearchIssue: context.handleSetSearchIssue,
    handleSetSelectedIssue: context.handleSetSelectedIssue,
  }));
  const countIssues = issues.length;

  function handleSearchIssue(data: NewSearchFormInputs) {
    handleSetSearchIssue(data.searchIssue);
  }

  return (
    <IssuesContainer>
      <PublicationsInfoStyle>
        <h3>Publicações</h3>
        <span>{countIssues} publicações</span>
      </PublicationsInfoStyle>

      <FormStyle onSubmit={handleSubmit(handleSearchIssue)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('searchIssue')}
        />
      </FormStyle>
      <PostContainer>
        {issues.map((issue) => (
          <PostStyle
            key={issue.createdAt}
            to={`/post/${issue.number}`}
            onClick={() => handleSetSelectedIssue(issue)}
          >
            <TitleAndCreatedAtStyle>
              <div className="titlePost">
                <p>{issue.title}</p>
              </div>
              <span>
                Há {issue.differenceCreatedAtAndDateNow}{' '}
                {issue.differenceCreatedAtAndDateNow > 1 ? 'dias' : 'dia'}
              </span>
            </TitleAndCreatedAtStyle>
            <MarkdownStyle
              components={{
                a: ({ node, ...props }) => <span {...props} />, // Renderiza links como spans para evitar aninhamento
              }}
            >
              {issue.body}
            </MarkdownStyle>
          </PostStyle>
        ))}
      </PostContainer>
    </IssuesContainer>
  );
}

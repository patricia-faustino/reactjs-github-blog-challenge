import ReactMarkdown from 'react-markdown';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const IssuesContainer = styled.div``;

export const PublicationsInfoStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.75rem;

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 14px;
  }
`;

export const FormStyle = styled.form`
  input {
    width: 54rem;
    height: 3.13rem;
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    background: ${(props) => props.theme['base-input']};
    padding: 0.75rem 1rem;
    font-size: 16px;
    color: ${(props) => props.theme['base-text']};
    transition: brackground-color 0.2s;

    &:hover {
      border-color: ${(props) => props.theme['blue']};
    }
  }
`;

export const PostContainer = styled.div`
  display: grid;
  grid-template-columns: 26rem 26rem;
  gap: 2rem;
  padding: 3rem 0;
`;

export const PostStyle = styled(NavLink)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;

  background-color: ${(props) => props.theme['base-post']};

  border-radius: 10px;
  width: 26rem;
  height: 16.25rem;

  p {
    font-size: 16px;
    color: ${(props) => props.theme['base-text']};
  }
`;

export const MarkdownStyle = styled(ReactMarkdown)`
  font-size: 16px;
  color: ${(props) => props.theme['base-text']};
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TitleAndCreatedAtStyle = styled.div`
  display: flex;
  justify-content: space-between;

  .titlePost {
    padding-right: 1rem;
    width: 15rem;

    p {
      font-size: 20px;
      font-weight: bold;
      color: ${(props) => props.theme['base-title']};
    }
  }

  span {
    font-size: 14px;
    color: ${(props) => props.theme['base-span']};
  }
`;

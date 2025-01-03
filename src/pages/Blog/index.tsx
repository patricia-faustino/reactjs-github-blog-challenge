import { Profile } from './components/Profile';
import { Issues } from './components/Issues';
import { BlogContainer } from './styles';

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <Issues />
    </BlogContainer>
  );
}

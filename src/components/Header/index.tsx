import logoImg from '../../assets/Logo.svg';
import effectLeft from '../../assets/effectHeaderLeft.svg';
import effectRight from '../../assets/effectHeaderRight.svg';

import { EffectLeft, EffectRight, HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <EffectLeft src={effectLeft} />
      <img src={logoImg} />
      <EffectRight src={effectRight} />
    </HeaderContainer>
  );
}

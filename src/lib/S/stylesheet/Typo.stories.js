import styled from '@emotion/styled';
import { css } from '@emotion/css';
import s from 'S';
import { MD } from '@utils';

const Section = styled.div`
  ${s.baseSection()}

  h2 {
    ${s.mb2}
    ${s.h22}
    ${s.bold}
    ${s.textCenter}
  }

  p {
    ${s.mb2}
  }
`;

export const Typo = () => (
  <div>
    <Section>
      <MD>
        {`
        // from lib/S : static CSS declaration
        
        ex)
        import * as S from 'S'
        
        const StyledComponnet = styled.div\`
          \${s.h12}
          \${s.bold}
          \${s.textCenter}
        \``}
      </MD>
    </Section>
    <Section>
      <h2>Heading</h2>
      {[10, 12, 14, 16, 18, 22, 32].map((size) => (
        <p
          css={css`
            ${s['h' + size]}
          `}
        >{`h${size}`}</p>
      ))}
    </Section>
  </div>
);

export default {
  title: 'lib/S',
  component: Typo,
};

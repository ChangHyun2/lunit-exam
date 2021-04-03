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

const sortedZIndex = Object.entries(s.ZINDEX).sort((a, b) => b[1] - a[1]);

export const ZIndex = () => (
  <div>
    <Section>
      <MD>
        {`
        // from lib/S : static CSS declaration
        // reference : z-index in bootstrap

        ex)
        import * as S from 'S'
        
        const StyledComponnet = styled.div\`
          \${s.zIndex.backdrop}
          \${s.zIndex.dropdown}
          \${s.zIndex.fixed}
          \${s.zIndex.modal}
          \${s.zIndex.popover}
          \${s.zIndex.stickey}
          \${s.zIndex.tooltip}
        \``}
      </MD>
    </Section>
    <Section>
      <h2>z-index</h2>
      {sortedZIndex.map(([key], i) => {
        i++;

        return (
          <p
            css={css`
              position: absolute;
              line-height: ${i * 12};
              color: #fff;
              width: ${i * 50}px;
              height: ${i * 100}px;
              background-color: #${[i, i, i].join('')};
              ${s.zIndex[key]}
            `}
          >{`zIndex.${key}`}</p>
        );
      })}
    </Section>
  </div>
);

export default {
  title: 'lib/S',
  component: ZIndex,
};

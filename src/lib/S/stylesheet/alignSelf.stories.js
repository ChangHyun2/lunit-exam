import styled from '@emotion/styled';
import Section from '@UI/Section';
import { MD } from '@utils';

export const AlignSelf = () => (
  <div>
    <Section>
      <MD>
        {`
        // from lib/S : static CSS declaration
        // refer Container Component
        
        ex)
        import * as S from 'S'
        
        const StyledComponnet = styled.div\`
          \${s.absolute}
          \${s.fluid}
          \${s.grid}
          \${s.grid1}
             ...
          \${s.grid12}
          \${s.mb1}
          \${s.mb2}
             ...
          \${s.mb8}
        \``}
      </MD>
    </Section>
  </div>
);

export default {
  title: 'lib/S',
  component: AlignSelf,
};

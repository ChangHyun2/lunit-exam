import styled from '@emotion/styled';
import Section from '@UI/Section';
import { MD } from '@utils';

export const AlignChild = () => (
  <div>
    <Section>
      <MD>
        {`
        // from lib/S : static CSS declaration
        // refer Container Component
        
        ex)
        import * as S from 'S'
        
        const StyledComponnet = styled.div\`
          \${s.flex}
          \${s.row}
          \${s.rowCenter}
          \${s.rowSpaceBetween}
          \${s.rowEnd}
          \${s.col}
          \${s.colCenter}
          \${s.colSpaceBetween}
          \${s.relative}          
        \``}
      </MD>
    </Section>
  </div>
);

export default {
  title: 'lib/S',
  component: AlignChild,
};

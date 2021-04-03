import { alignSelf } from 'S';
import styled from '@emotion/styled';
import s from 'S';

const BaseComponents = styled.div``;

const BaseSection = styled.div`
  border: 1px solid;
  ${s.baseSection()}
`;
const BaseContainer = styled.div`
  border: 1px solid;
  ${s.baseContainer()}
`;
const Section = styled.div`
  ${s.baseSection()}
`;
const BaseButton = styled.button`
  ${s.baseButton}
`;
const BaseLink = styled.a`
  ${s.baseLink}
`;

const BaseCard = styled.div`
  width: 200px;
  height: 100px;
  ${s.baseCard('sm')}
`;

const BaseImageWrapper = styled.div`
  ${s.baseImageWrapper}
`;

export const BaseComponent = (props) => (
  <BaseComponents>
    <BaseContainer>
      <h2>base Container</h2>
    </BaseContainer>
    <BaseSection>
      <p>base Section : base Container with s.m3</p>
    </BaseSection>
    <Section>
      <BaseButton>base button</BaseButton>
    </Section>
    <Section>
      <BaseLink href="#">base link</BaseLink>
    </Section>
    <Section>
      <BaseCard>base card [sm]</BaseCard>
    </Section>
  </BaseComponents>
);

export default {
  title: 'lib/S/baseComponent',
  component: BaseComponent,
  parameters: {
    options: {
      displayName: 'baseComponent',
    },
  },
};

import { NavLinkStyled, Section, Title } from 'components/CommonStyle';

export default function Home() {
  return (
    <Section>
      <Title>Welcome to Phonebook!</Title>
      <NavLinkStyled to="/login" title="let's start">
        Let's start!
      </NavLinkStyled>
    </Section>
  );
}

import { Wrapper, EmailWrapper, IconWrapper } from './footer.styles';
import GitHubIcon from '../../assets/icons/Github.svg';
import LinkedInIcon from '../../assets/icons/LinkedIn.svg';

export default function Footer() {
  return (
    <Wrapper>
      <EmailWrapper>
        <h2>
          <a href="mailto:jakub.gryzinski@gmail.com">jakub.gryzinski@gamil.com</a>
        </h2>
      </EmailWrapper>
      <IconWrapper>
        <a
          target="_blank"
          aria-label="Link to my LinkedIn"
          href="https://www.linkedin.com/in/jakub-gryzi%C5%84ski-b00296264/"
        >
          <LinkedInIcon />
        </a>
      </IconWrapper>
      <IconWrapper>
        <a target="_blank" aria-label="Link to my GitHub" href="https://github.com/JayCodeGitHub">
          <GitHubIcon />
        </a>
      </IconWrapper>
    </Wrapper>
  );
}

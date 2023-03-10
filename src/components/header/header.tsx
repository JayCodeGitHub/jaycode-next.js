import { Wrapper } from './header.styles';
import { Button } from '../button/button.styles';
import Link from 'next/link';

export interface HeaderProps {
  secondary?: boolean;
  title: string;
  description?: string;
  firstButton?: string;
  firstButtonHref?: string;
  secondButton?: string;
  secondButtonHref?: string;
}

export default function Header({
  secondary,
  title,
  description,
  firstButton,
  firstButtonHref,
  secondButton,
  secondButtonHref,
}: HeaderProps) {
  return (
    <Wrapper secondary={secondary}>
      <h1>{title}</h1>
      {!secondary ? (
        <>
          <p>{description}</p>
          <span>
            <a href={firstButtonHref} target="_blank">
              <Button>{firstButton}</Button>
            </a>
            <Link href={secondButtonHref ? secondButtonHref : ''}>
              <Button>{secondButton}</Button>
            </Link>
          </span>
        </>
      ) : null}
    </Wrapper>
  );
}

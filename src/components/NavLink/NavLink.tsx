import Link from "next/link";
import { useRouter } from "next/router";
import { StyledLink } from "./NavLink.styles";

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const router = useRouter();
  return (
    <StyledLink href={href} className={router.pathname == href ? "active" : ""}>
      {children}
    </StyledLink>
  );
};

export default NavLink;

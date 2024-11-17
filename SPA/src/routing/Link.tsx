type Props = {
  to: string;
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

export function Link({ children, to, ...rest }: Props) {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    window.history.pushState(null, '', to);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

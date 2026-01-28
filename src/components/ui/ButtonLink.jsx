export default function ButtonLink({ href, className, children }) {
  return (
    <a href={href} className={className} target="_blank">
      {children}
    </a>
  );
}

export function RepositoryItem(props) {
  return (
    <li>
      <h3>{props.repository.name}</h3>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url}>
        Acessar repositório
      </a>
    </li>
  );
}

const RepoCard = ({
  name,
  description,
  homepage,
  repoURL,
  language,
  stargazersCount,
  watchersCount,
}) => (
  <section>
    <h2>{name}</h2>
    <p>{description}</p>
    {homepage ? <a href={homepage}>Homepage</a> : null}
    {repoURL ? <a href={repoURL}>Repo URL</a> : null}
    <p>{language}</p>
    <p>Stars count: {stargazersCount}</p>
    <p>Watchers count: {watchersCount}</p>
  </section>
);

export default RepoCard;

import './repoCard.css';

const RepoCard = ({
  name,
  description,
  homepage,
  repoURL,
  stargazersCount,
  watchersCount,
}) => (
  <section className='section'>
    <h2>{name}</h2>
    <p>{description}</p>
    <p>Stars count: {stargazersCount}</p>
    <p>Watchers count: {watchersCount}</p>
    {homepage ? <a href={homepage}>Homepage</a> : null}
    {repoURL ? <a href={repoURL}>Repo URL</a> : null}
  </section>
);

export default RepoCard;

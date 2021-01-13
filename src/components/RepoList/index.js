import RepoCard from '../RepoCard';
import './repoList.css';

const RepoList = ({ repositories }) => {
  return (
    <div className='repositories'>
      {repositories
        ? repositories.map((item) => {
            return (
              <RepoCard
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                repoURL={item.html_url}
                homepage={item.homepage}
                stargazersCount={item.stargazers_count}
                watchersCount={item.watchers_count}
              />
            );
          })
        : null}
    </div>
  );
};

export default RepoList;

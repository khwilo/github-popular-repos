import RepoCard from '../RepoCard';
import './repoList.css';

const RepoList = ({ response, loading, error }) => {
  return (
    <div>
      {loading ? <div>Loading...</div> : null}
      {error ? <div>Error fetching data</div> : null}
      <div className='repositories'>
        {response
          ? response.items.map((item) => {
              return (
                <RepoCard
                  key={item.id}
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
    </div>
  );
};

export default RepoList;

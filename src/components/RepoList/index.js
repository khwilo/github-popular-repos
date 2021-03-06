import RepoCard from '../RepoCard';
import './repoList.css';

const RepoList = ({ repositories, loading }) => {
  return (
    <>
      <h1 className='header-title'>
        GitHub Popular Repositories sorted by Star count
      </h1>
       {loading ? <div>Loading...</div> : null}
      <div className='repositories'>
        {repositories
          ? repositories.map((item) => {
              return <RepoCard key={item.id} item={item} />;
            })
          : null}
      </div>
    </>
  );
};

export default RepoList;

import { useParams } from 'react-router-dom';

const RepoDetail = () => {
  let { id } = useParams();

  return <h1>RepoDetail works!</h1>;
};

export default RepoDetail;

import styles from './Search.module.css';

import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';
import PostDetail from '../../components/PostDetail';
import { Link, useNavigate } from 'react-router-dom';
const Search = () => {
  const query = useQuery();
  const search = query.get('q');
  const navigate = useNavigate();
  const { documents: posts } = useFetchDocuments('posts', search);

  return (
    <div className={styles.search_container}>
      <h2>Resultado da busca</h2>
      <div>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foi encontrado nenhum post a partir da sua busca...</p>
            <Link to="/">
              <button className="btn">Voltar</button>
            </Link>
          </div>
        )}
        {posts &&
          posts.map((post) => (
            <>
              <PostDetail key={post.id} post={post} />
              <Link
                to={'..'}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(-1);
                }}
              >
                <button className="btn">Voltar</button>
              </Link>
            </>
          ))}
      </div>
    </div>
  );
};

export default Search;

import styles from './Dashboard.module.css';
import { useAuthValue } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useDeleteDocument } from '../../hooks/useDeleteDocument';
const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: posts, loading } = useFetchDocuments('posts', null, uid);

  const { deleteDocument } = useDeleteDocument('posts');

  if (loading) {
    return <p>Carregando...</p>;
  }
  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Posts não encontrados :(</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro post!
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.post_header}>
            <span>Título</span>
            <span>Ações</span>
          </div>
          {posts &&
            posts.map((post) => (
              <div key={post.id} className={styles.post_row}>
                <p>{post.title}</p>
                <div>
                  <Link to={`/posts/${post.id}`}>
                    <button className="btn">Ver</button>
                  </Link>
                  <Link to={`/posts/edit/${post.id}`}>
                    <button className="btn">Editar</button>
                  </Link>
                  <button
                    onClick={() => {
                      if (window.confirm('Deseja realmente deletar esse post?'))
                        deleteDocument(post.id);
                    }}
                    className="btn"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Dashboard;

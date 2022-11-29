import styles from './CreatePost.module.css';

import { useState } from 'react';
import { useInsertDocument } from '../../hooks/useInsertDocument';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../contexts/AuthContext';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState('');
  const [formError, setFormError] = useState('');
  const { insertDocument, response } = useInsertDocument('posts');
  const { user } = useAuthValue();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    // validate image url
    try {
      new URL(image);
    } catch (error) {
      setFormError('A imagem precisa ser uma URL.');
    }

    // criar o array de tags

    const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase());

    // check all values
    if (!title || !image || !tags || !body) {
      setFormError('Por favor, preencha todos os campos 😀');
    }
    if (formError) return;

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // redirect to home page
    navigate('/');
  };
  return (
    <div className={styles.create_post}>
      <h2>Criar Post</h2>
      <p>Crie um post e compartilhe seus assuntos favoritos!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="title"
            required
            placeholder="Pense em um bom título..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira a URL da imagem que represente o seu post"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea
            name="body"
            required
            placeholder="Insira o texto do seu post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgula"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        {!response.loading && <button className="btn">Criar Post</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default CreatePost;

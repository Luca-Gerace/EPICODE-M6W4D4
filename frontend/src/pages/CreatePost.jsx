import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../services/api";
import "./CreatePost.css";

export default function CreatePost() {
  const [post, setPost] = useState({
    title: "",
    category: "",
    content: "",
    cover: "",
    readTime: { value: 0, unit: "minutes" },
    author: "",
  });

  const navigate = useNavigate();

  // Gestore per i cambiamenti nei campi del form
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "readTimeValue") {
      // Gestiamo il "readTime" del post
      setPost({
        ...post,
        readTime: { ...post.readTime, value: parseInt(value) },
      });
    } else {
      // Aggiornamento generale per gli altri campi
      setPost({ ...post, [name]: value });
    }
  };

  // Gestore per l'invio del form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Invia i dati del post al backend
      await createPost(post);
      // Naviga alla rotta della home dopo la creazione del post
      navigate("/");
    } catch (error) {
      console.error("Errore nella creazione del post:", error);
    }
  };

  // Template del componente
  return (
    <div className="container">
      <h1>Crea un nuovo post</h1>
      <form onSubmit={handleSubmit} className="create-post-form">
        <div className="form-group">
          <label>Titolo</label>
          <input
            type="text"
            id="title"
            name="title"
            value={post.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Categoria</label>
          <input
            type="text"
            id="category"
            name="category"
            value={post.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Contenuto</label>
          <textarea
            id="content"
            name="content"
            value={post.content}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>URL Immagine</label>
          <input
            type="text"
            id="cover"
            name="cover"
            value={post.cover}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Tempo di lettura (minuti)</label>
          <input
            type="number"
            id="readTimeValue"
            name="readTimeValue"
            value={post.readTime.value}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email autore</label>
          <input
            type="email"
            id="author"
            name="author"
            value={post.author}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Crea il post
        </button>
      </form>
    </div>
  );
}

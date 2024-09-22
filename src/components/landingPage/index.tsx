import { useEffect, useState } from 'react';

const LandingPage = () => {
  const [content, setContent] = useState({ title: '', body: '', image: '' });

  useEffect(() => {
    fetch('/content/landing_page.json') // Caminho para o arquivo JSON gerado pelo CMS
      .then((response) => response.json())
      .then((data) => setContent(data));
  }, []);

  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.body}</p>
      <img src={content.image} alt="Landing page visual" />
    </div>
  );
};

export default LandingPage;

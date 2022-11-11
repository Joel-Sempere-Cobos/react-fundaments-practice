import Layout from '../layout/Layout.js';

const NewAdvertPage = ({ onLogout }) => {
  return (
    <div>
      <Layout onLogout={onLogout}>
        <h1>Crea tu anuncio</h1>
      </Layout>
    </div>
  );
};

export default NewAdvertPage;

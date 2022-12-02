import './styles.css';

function Sidebar() {
  return (
    <>
      <div className="navbar-menu my-4 ">
        <a href="#home">Home</a>
        <a href="#home">Dashboard</a>
        <div className="menudown-main">
          <p className="dropbtn">
            Cadastro / Consulta
            <i className="fa fa-caret-down"></i>
          </p>
          <div className="menudown-content">
            <a href="#">Aluno</a>
            <a href="#">Funcionario</a>
            <a href="#">Modalidades</a>
            <a href="#">Planos</a>
          </div>
        </div>
        <div className="menudown-main">
          <p className="dropbtn">
            Treino
            <i className="fa fa-caret-down"></i>
          </p>
          <div className="menudown-content">
            <a href="#">Fichas de treino</a>
            <a href="#">Avaliação fisica </a>
          </div>
        </div>
        <div className="menudown-main">
          <p className="dropbtn">
            Relatorios
            <i className="fa fa-caret-down"></i>
          </p>
          <div className="menudown-content">
            <a href="#">Relatórios financeiros</a>
            <a href="#">Frequência</a>
          </div>
        </div>
        </div>
    </>
  );
}

export default Sidebar;

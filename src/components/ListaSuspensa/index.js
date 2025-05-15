import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    const aoSelecionar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select required={props.obrigatorio}
                onChange={aoSelecionar}
                value={props.valor}
      >
        {props.itens.map((item, index) => (
          <option key={index}>{item}</option>
                ))}
            </select>
        </div>
    );
};

export default ListaSuspensa;



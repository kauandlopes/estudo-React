import './TextCamp.css';

const TextCamp = (props) => {
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="text-camp">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextCamp;

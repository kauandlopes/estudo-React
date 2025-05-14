import './Form.css';
import TextCamp from '../TextCamp/TextCamp.js'; 
import ListaSuspensa from '../ListaSuspensa/index.js';

const Form = () => {
    const times = ['Aluno', 'Graduado', 'Instrutor'];

    return (
        <section className='form'>
            <form>
                <h1>Preencha os dados do colaborador:</h1>
                <TextCamp label="Nome" placeholder="Digite seu nome" />
                <TextCamp label="Idade" placeholder="Digite sua idade" />
                <TextCamp label="Imagem" placeholder="Digite a URL da imagem" />
                <ListaSuspensa label="Função" itens={times} />
            </form>
        </section>
    );
};

export default Form;
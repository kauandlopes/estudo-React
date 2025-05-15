import './Form.css'
import { useState } from 'react'
import TextCamp from '../TextCamp/TextCamp.js'
import ListaSuspensa from '../ListaSuspensa/index.js'
import Botao from '../Botao/index.js'

const Form = () => {
  const locais = ['Escolha o local do evento...', 'Fatec', 'Fema', 'Fomenta', 'outro...']

  const [nome, setNome] = useState('')
  const [data, setData] = useState('')
  const [descricao, setDescricao] = useState('')
  const [imagem, setImagem] = useState('')
  const [local, setLocal] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    PaymentResponse.aoColaboradorCadastrado({
        nome: nome,
        data: data,
        descricao: descricao,
        imagem: imagem,
        local:local
    })
  }

  return (
    <section className='form'>
      <form onSubmit={aoSalvar}>
        <h1>Preencha os dados do colaborador:</h1>

        <TextCamp
          obrigatorio={true}
          label="Nome do evento"
          placeholder="Digite o nome do evento..."
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />

        <TextCamp
          obrigatorio={true}
          label="Data do evento"
          placeholder="Digite a data do evento..."
          valor={data}
          aoAlterado={valor => setData(valor)}
        />

        <TextCamp
          obrigatorio={true}
          label="Descrição do evento"
          placeholder="Digite a descrição abreviada"
          valor={descricao}
          aoAlterado={valor => setDescricao(valor)}
        />

        <TextCamp
          obrigatorio={true}
          label="Imagem do evento"
          placeholder="Digite a URL da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />

        <ListaSuspensa
          obrigatorio={true}
          label="Local"
          itens={locais}
          valor={local}
          aoAlterado={valor => setLocal(valor)}
        />

        <Botao texto="Criar evento" />
      </form>
    </section>
  )
}

export default Form
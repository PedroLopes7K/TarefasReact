import React, { useState } from 'react'
import './ListaTarefas.css'
import RenderizarTarefas from './RenderizarTarefas'

function ListaTarefas() {
  let [tarefa, setTarefa] = useState([])
  let [novaTarefa, setNovaTarefa] = useState('')
  const campoInserirTarefa = document.getElementById('inputTarefa')

  function formSubmit(e) {
    e.preventDefault()
    campoInserirTarefa.focus()
    if (!tarefa.includes(novaTarefa)) {
      setTarefa([...tarefa, novaTarefa])
      setNovaTarefa('')
    } else {
      alert('Já existe a tarefa ' + novaTarefa + ' na lista')
      setNovaTarefa('')
    }
  }

  return (
    <>
      <header>
        <h1>Lista de Tarefas</h1>
      </header>
      <form onSubmit={formSubmit}>
        <label htmlFor="titulo">Insira uma Tarefa:</label>
        <input
          id="inputTarefa"
          type="text"
          value={novaTarefa}
          onChange={e => setNovaTarefa(e.target.value)}
          required
        />
        <button type="submit" id="salvar">
          Salvar
        </button>
      </form>

      <RenderizarTarefas tarefas={tarefa} setTarefas={setTarefa} />
    </>
  )
}

export default ListaTarefas

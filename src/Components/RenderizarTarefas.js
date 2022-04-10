import React from 'react'

function RenderizarTarefas({ tarefas, setTarefas }) {
  function removerTarefa(tarefa) {
    if (window.confirm(`Deseja excluir ${tarefa} da lista de tarefas?`)) {
      const removeTarefa = tarefas.filter(l => l !== tarefa)
      setTarefas(removeTarefa)
      return
    }
    // else {
    //   console.log('livro não removido')
    //   return
    // }
  }

  return (
    <>
      {tarefas.map(tarefa => (
        <div key={tarefa} className="container" id={tarefa}>
          {tarefa}

          {/* <button onClick={() => removerTarefa(tarefa)} className="remover">
            X
          </button> */}

          {/* se tarefa existe, adiciona o botao de remover */}
          {tarefa ? (
            <button
              data-testid="remover"
              onClick={() => removerTarefa(tarefa)}
              className="remover"
            >
              X
            </button>
          ) : (
            ''
          )}
        </div>
      ))}
    </>
  )
}
export default RenderizarTarefas

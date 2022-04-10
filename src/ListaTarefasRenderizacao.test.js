import { render, screen } from '@testing-library/react'
import ListaTarefas from './Components/ListaTarefas'

// Inserção dos testes propostos
describe('Testes de renderização', () => {
  test('texto Lista de Tarefas', () => {
    render(<ListaTarefas />)
    const linkElement = screen.getByText(/Lista de Tarefas/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('input para o título da tarefa', () => {
    render(<ListaTarefas />)
    const elInput = screen.getByLabelText('Insira uma Tarefa:', {
      selector: 'input'
    })
    expect(elInput).toBeInTheDocument()
  })
})

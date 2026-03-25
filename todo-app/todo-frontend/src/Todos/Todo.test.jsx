import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test("renders content", () => {
    const todo = {
        text: "This is a test todo",
        done: false
    }

    const del = () => {
        console.log("delete")
    }

    const complete = () => {
        console.log("complete")
    }

    render(<Todo todo={todo} deleteTodo={del} completeTodo={complete}/>)

    const element = screen.getByText('This is a test todo')
    expect(element).toBeDefined()
})
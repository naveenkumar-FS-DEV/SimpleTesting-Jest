import { render,screen } from "@testing-library/react"
import Login from "../Components/Login"

test('checking component Loaded', () => {
  render(<Login />)
  expect(screen.getByText(/Login/)).toBeInTheDocument()
})

test('checking email & password fields are empty', ()=>{
  render(<Login />)
  expect(screen.queryByPlaceholderText('Email')).toHaveValue("")
  expect(screen.queryByPlaceholderText('password')).toHaveValue("")

})
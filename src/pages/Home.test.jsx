import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home'

function renderWithRouter(ui) {
  return render(<BrowserRouter>{ui}</BrowserRouter>)
}

describe('Home', () => {
  it('renders clinic name', () => {
    renderWithRouter(<Home />)
    expect(screen.getByText(/Sri Tirumala Diagnostic Center/i)).toBeInTheDocument()
  })

  it('has Call Now and WhatsApp buttons', () => {
    renderWithRouter(<Home />)
    expect(screen.getByRole('link', { name: /call now/i })).toHaveAttribute('href', 'tel:8978196941')
    expect(screen.getByRole('link', { name: /whatsapp/i })).toHaveAttribute('href', expect.stringContaining('wa.me'))
  })

  it('renders Our Services section', () => {
    renderWithRouter(<Home />)
    expect(screen.getByText(/Our Services/i)).toBeInTheDocument()
  })
})

import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import BookTest from './BookTest'

function renderWithRouter(ui) {
  return render(<BrowserRouter>{ui}</BrowserRouter>)
}

describe('BookTest', () => {
  it('renders booking form', () => {
    renderWithRouter(<BookTest />)
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send via whatsapp/i })).toBeInTheDocument()
  })

  it('opens WhatsApp on submit with filled form data', async () => {
    const user = userEvent.setup()
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null)
    renderWithRouter(<BookTest />)

    await user.type(screen.getByLabelText(/full name/i), 'Test User')
    await user.type(screen.getByLabelText(/phone number/i), '9876543210')
    await user.type(screen.getByLabelText(/email/i), 'test@example.com')
    await user.type(screen.getByLabelText(/^Address$/i), '123 Test St')
    await user.selectOptions(screen.getByLabelText(/test type/i), 'biochemistry')
    await user.type(screen.getByLabelText(/preferred date/i), '2025-12-31')
    await user.click(screen.getByRole('button', { name: /send via whatsapp/i }))

    expect(openSpy).toHaveBeenCalledWith(
      expect.stringContaining('wa.me/918978196941'),
      '_blank'
    )
    expect(decodeURIComponent(openSpy.mock.calls[0][0])).toContain('Test User')
    openSpy.mockRestore()
  })
})

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import EmptyState from '../components/EmptyState';

describe('EmptyState component', () => {
  it('displays no entities found title and shows query details', () => {
    render(
      <EmptyState
        searchTerm="Glapflap"
        statusFilter="Alive"
        showFavoritesOnly={false}
      />
    );

    expect(screen.getByText('No Entities Found')).toBeInTheDocument();
    expect(screen.getByText(/Glapflap/)).toBeInTheDocument();
    expect(screen.getByText(/Alive/)).toBeInTheDocument();
  });

  it('triggers onReset callback when clicking reset filters button', () => {
    const handleReset = vi.fn();
    render(<EmptyState searchTerm="NoMatch" onReset={handleReset} />);

    const resetButton = screen.getByRole('button', { name: /reset filters/i });
    fireEvent.click(resetButton);

    expect(handleReset).toHaveBeenCalledTimes(1);
  });
});


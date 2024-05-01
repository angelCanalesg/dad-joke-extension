import {act} from 'react';
import useJoke from './useJoke';
import {renderHook, waitFor} from "@testing-library/react";

// Mock fetch
global.fetch = () =>
  Promise.resolve({
    json: () => Promise.resolve({ joke: 'Test joke' })
  }) as any;


describe('useJoke hook', () => {
  it('fetches a joke', async () => {
    const { result } = renderHook(() => useJoke());

    await act(() => result.current.getJoke());

    await waitFor(() => {
      expect(result.current.joke).toEqual('Test joke');
    });
  });

  it('handles error', async () => {
    global.fetch = jest.fn(() => Promise.reject('API is down'));

    const { result } = renderHook(() => useJoke());

    await act(() => result.current.getJoke());

    await waitFor(() => {
      expect(result.current.joke).toEqual('Failed to fetch joke');
    });
  });
});
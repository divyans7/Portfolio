import React from 'react';
import ReactDOM from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

let container;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
});
afterEach(() => {
  act(() => { ReactDOM.unmountComponentAtNode(container); });
  container.remove();
  jest.restoreAllMocks();
});
function renderPage(path = '/') {
  act(() => { ReactDOM.render(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>, container); });
}

it.each([
  ['/', 'Turning complex'],
  ['/projects', 'Work that moves'],
  ['/aboutMe', 'Curious by nature'],
  ['/resume', 'Divyansh Chaudhary'],
  ['/contact', 'Good products start'],
  ['/missing', 'A fresh direction']
])('renders %s with one main heading', (path, heading) => {
  renderPage(path);
  expect(container.querySelectorAll('h1')).toHaveLength(1);
  expect(container.querySelector('h1').textContent).toContain(heading);
  expect(container.querySelector('main')).not.toBeNull();
});

it('filters products by domain and restores all products', () => {
  renderPage('/projects');
  expect(container.querySelectorAll('.product-card')).toHaveLength(5);
  const filters = container.querySelectorAll('.filter');
  act(() => { Simulate.click(filters[3]); });
  expect(container.querySelectorAll('.product-card')).toHaveLength(2);
  expect(filters[3].getAttribute('aria-pressed')).toBe('true');
  expect(container.querySelector('.results-count').textContent).toBe('2 products');
  act(() => { Simulate.click(filters[0]); });
  expect(container.querySelectorAll('.product-card')).toHaveLength(5);
});

it('closes mobile navigation on Escape and returns focus', () => {
  renderPage();
  const toggle = container.querySelector('.menu-toggle');
  act(() => { Simulate.click(toggle); });
  expect(toggle.getAttribute('aria-expanded')).toBe('true');
  act(() => { Simulate.keyDown(toggle, { key: 'Escape' }); });
  expect(toggle.getAttribute('aria-expanded')).toBe('false');
  expect(document.activeElement).toBe(toggle);
});

it('navigates to selected work and focuses main content', () => {
  renderPage();
  const link = container.querySelector('nav a[href="/projects"]');
  act(() => { Simulate.click(link, { button: 0 }); });
  expect(container.querySelector('h1').textContent).toContain('Work that moves');
  expect(document.activeElement).toBe(container.querySelector('main'));
  expect(document.title).toBe('Divyansh Chaudhary | Selected Work');
});

it('opens the print dialog for the résumé', () => {
  const print = jest.spyOn(window, 'print').mockImplementation(() => {});
  renderPage('/resume');
  act(() => { Simulate.click(container.querySelector('.print-button')); });
  expect(print).toHaveBeenCalledTimes(1);
  expect(container.querySelectorAll('.timeline-item')).toHaveLength(6);
});

it('reports clipboard failure without losing the contact address', async () => {
  const originalClipboard = Object.getOwnPropertyDescriptor(navigator, 'clipboard');
  Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: jest.fn().mockRejectedValue(new Error('Unavailable')) } });
  try {
    renderPage('/contact');
    await act(async () => { Simulate.click(container.querySelector('.email-card button')); });
    expect(container.querySelector('.copy-status').textContent).toContain('Unable to copy automatically');
    expect(container.querySelector('a[href="mailto:divi.v@outlook.com"]')).not.toBeNull();
  } finally {
    if (originalClipboard) Object.defineProperty(navigator, 'clipboard', originalClipboard);
    else delete navigator.clipboard;
  }
});

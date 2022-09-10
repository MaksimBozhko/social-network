import { render, screen } from '@testing-library/react';
import App from './App';
import profileReducer, {updateNewPostTextAC} from "./Redux/profileReducer";

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

it('newPostText', () => {
  let action = updateNewPostTextAC('it-kamas')
  let state = {
    newPostText: 'kama',
  }
  let newState = profileReducer(state, action)

  expect(newState.newPostText).toBe('it-kamas')
})


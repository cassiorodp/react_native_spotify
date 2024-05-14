import { render } from '@/utils/test-utils';
import AlbumItem from './AlbumItem';
import { format } from 'date-fns';

describe('AlbumItem', () => {
  const mockItem = {
    name: 'Test Album',
    images: [{ url: 'https://example.com/image.jpg' }],
    release_date: '2022-01-01',
  };

  it('renders the CustomItem component with correct imageSrc prop', () => {
    const { getByTestId } = render(<AlbumItem item={mockItem} />);
    const customItem = getByTestId('custom-item');
    expect(customItem.props.imageSrc).toEqual(mockItem.images[0].url);
  });

  it('renders the CustomItem component with correct title prop', () => {
    const { getByTestId } = render(<AlbumItem item={mockItem} />);
    const customItem = getByTestId('custom-item');
    expect(customItem.props.title).toEqual(mockItem.name);
  });

  it('renders the CustomItem component with correct subtitle prop', () => {
    const { getByTestId } = render(<AlbumItem item={mockItem} />);
    const customItem = getByTestId('custom-item');
    const formattedDate = format(new Date(mockItem.release_date), 'dd/MM/yyyy');
    expect(customItem.props.subtitle).toEqual(formattedDate);
  });
});

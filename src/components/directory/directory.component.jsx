import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'Hats',
    imageUrl:
      'https://i.postimg.cc/W3jnCSb4/joshua-coleman-y-VRLC75-Ma8-unsplash.jpg',
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'Jackets',
    imageUrl:
      'https://i.postimg.cc/KjVktv1M/markus-spiske-jddw6i-A31s-E-unsplash.jpg',
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'Sneakers',
    imageUrl: 'https://i.postimg.cc/rm5gs3zc/school-aden-gca6783ba0-640.jpg',
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'Mens',
    imageUrl: 'https://i.postimg.cc/MpRYdgbB/rayul-M6gy9o-Hg-II-unsplash.jpg',
    route: 'shop/mens',
  },
  {
    id: 5,
    title: 'Womens',
    imageUrl:
      'https://i.postimg.cc/Bvjm9NF5/averie-woodard-4nulm-JUYFo-unsplash.jpg',
    route: 'shop/womens',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;

import Directory from './components/directory/directory.component';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl:
        'https://i.postimg.cc/W3jnCSb4/joshua-coleman-y-VRLC75-Ma8-unsplash.jpg',
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl:
        'https://i.postimg.cc/KjVktv1M/markus-spiske-jddw6i-A31s-E-unsplash.jpg',
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://i.postimg.cc/rm5gs3zc/school-aden-gca6783ba0-640.jpg',
    },
    {
      id: 4,
      title: 'Men',
      imageUrl: 'https://i.postimg.cc/MpRYdgbB/rayul-M6gy9o-Hg-II-unsplash.jpg',
    },
    {
      id: 5,
      title: 'Women',
      imageUrl:
        'https://i.postimg.cc/Bvjm9NF5/averie-woodard-4nulm-JUYFo-unsplash.jpg',
    },
  ];

  return <Directory categories={categories} />;
};

export default App;

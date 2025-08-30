
interface CardProps {
  img: string;
  title?: string;
  text: string;
  description: string;
}


export const cardsData: CardProps[] = [
  {
    img: 'https://picsum.photos/300/200?random=1',
    title: 'Card 1',
    text: 'This is the first card',
    description: 'Description for the first card goes here.',
  },
  {
    img: 'https://picsum.photos/300/200?random=2',
    title: 'Card 2',
    text: 'This is the second card',
    description: 'Description for the second card goes here.',
  },
  {
    img: 'https://picsum.photos/300/200?random=3',
    title: 'Card 3',
    text: 'This is the third card',
    description: 'Description for the third card goes here.',
  },
  {
    img: 'https://picsum.photos/300/200?random=4',
    title: 'Card 4',
    text: 'This is the fourth card',
    description: 'Description for the fourth card goes here.',
  },
];

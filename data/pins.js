// data/pins.js
const categories = [
  "Nature", "Travel", "Food", "Fashion", "Home Decor", "Art", "Animals", "Technology"
];
const adjectives = ["Beautiful", "Stunning", "Amazing", "Cozy", "Modern", "Vintage", "Elegant", "Rustic"];
const nouns = ["Mountain", "Beach", "Dish", "Outfit", "Room", "Painting", "Puppy", "Gadget", "Garden", "Sunset"];

function generatePin(id) {
  const cat = categories[Math.floor(Math.random() * categories.length)];
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const width = 600 + Math.floor(Math.random() * 100);
  const height = 400 + Math.floor(Math.random() * 600); // variable height for masonry
  const imageUrl = `https://picsum.photos/${width}/${height}?random=${id}`;
  const title = `${adj} ${noun} ${cat}`;
  const description = `A ${adj.toLowerCase()} ${noun.toLowerCase()} related to ${cat.toLowerCase()}. Perfect for your board.`;
  const author = `User${Math.floor(Math.random() * 1000)}`;
  const authorAvatar = `https://i.pravatar.cc/40?img=${(id % 70)}`; // some avatars
  return { id, imageUrl, title, description, author, authorAvatar };
}

export const defaultPins = Array.from({ length: 100 }, (_, i) => generatePin(i + 1));

export const boards = [
  { id: 'b1', name: 'Home Decor', cover: 'https://picsum.photos/200?random=99' },
  { id: 'b2', name: 'Recipes', cover: 'https://picsum.photos/200?random=88' },
  { id: 'b3', name: 'Fashion', cover: 'https://picsum.photos/200?random=77' },
  { id: 'b4', name: 'Travel', cover: 'https://picsum.photos/200?random=66' },
];
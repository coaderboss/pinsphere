// data/pins.js
const categories = [
  "Nature", "Travel", "Food", "Fashion", "Home Decor", "Art", "Animals", "Technology"
];
const adjectives = ["Beautiful", "Stunning", "Amazing", "Cozy", "Modern", "Vintage", "Elegant", "Rustic"];
const nouns = ["Mountain", "Beach", "Dish", "Outfit", "Room", "Painting", "Puppy", "Gadget", "Garden", "Sunset"];

function generatePin(id) {
  // Math.random() hata kar id ke base par deterministic logic lagaya hai
  const cat = categories[id % categories.length];
  const adj = adjectives[(id + 2) % adjectives.length]; // +2 thoda mix karne ke liye
  const noun = nouns[(id + 5) % nouns.length];
  
  const width = 600 + (id % 50) * 2;
  const height = 400 + (id % 100) * 4; 
  
  const imageUrl = `https://picsum.photos/${width}/${height}?random=${id}`;
  const title = `${adj} ${noun} ${cat}`;
  const description = `A ${adj.toLowerCase()} ${noun.toLowerCase()} related to ${cat.toLowerCase()}. Perfect for your board.`;
  const author = `User${id * 10}`;
  const authorAvatar = `https://i.pravatar.cc/40?img=${(id % 70)}`; 
  
  return { id, imageUrl, title, description, author, authorAvatar };
}

export const defaultPins = Array.from({ length: 100 }, (_, i) => generatePin(i + 1));

export const boards = [
  { id: 'b1', name: 'Home Decor', cover: 'https://picsum.photos/200?random=99' },
  { id: 'b2', name: 'Recipes', cover: 'https://picsum.photos/200?random=88' },
  { id: 'b3', name: 'Fashion', cover: 'https://picsum.photos/200?random=77' },
  { id: 'b4', name: 'Travel', cover: 'https://picsum.photos/200?random=66' },
];
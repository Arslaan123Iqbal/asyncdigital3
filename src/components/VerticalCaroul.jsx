import React from 'react';

const ProductAndEmojiList = () => {
  const emojis = [
    ["🐳", "spouting whale", "U+1F433"],
    ["🐋", "whale", "U+1F40B"],
    ["🐬", "dolphin", "U+1F42C"],
    ["🐟", "fish", "U+1F41F"],
    ["🐠", "tropical fish", "U+1F420"],
    ["🐡", "blowfish", "U+1F421"],
    ["🦈", "shark", "U+1F988"],
    ["🐙", "octopus", "U+1F419"],
    ["🐚", "spiral shell", "U+1F41A"]
  ];

  return (
    <div className="flex justify-between items-start max-w-6xl mx-auto py-16">
      <div className="w-1/2">
        <ul className="space-y-4">
          {emojis.map((emoji, index) => (
            <li key={index} className="flex items-center">
              <span className="text-4xl mr-4">{emoji[0]}</span>
              <div>
                <p className="font-semibold">{emoji[1]}</p>
                <p className="text-sm text-gray-600">Unicode: {emoji[2]}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2 pl-16">
        <h2 className="text-blue-600 text-lg font-semibold mb-2">Our Products</h2>
        <h1 className="text-4xl font-bold mb-4">Accelerate your growth with</h1>
        <p className="text-gray-600">
          Unlock the power of innovation and propel your journey towards success with our revolutionary apps.
        </p>
      </div>
    </div>
  );
};

export default ProductAndEmojiList;
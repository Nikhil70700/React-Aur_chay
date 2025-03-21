React Project with Tailwind CSS and Props
Overview
This project is a simple React application where I learned and implemented the following concepts:

Tailwind CSS for styling
Props for passing data to components
Component-based architecture in React
What I Learned
✅ 1. Setting Up Tailwind CSS in React (Vite)
I installed and configured Tailwind CSS in my React project using Vite. The steps include:

Installing Tailwind CSS, PostCSS, and Autoprefixer
Initializing Tailwind with npx tailwindcss init -p
Adding Tailwind directives to the CSS file (index.css)
Configuring the tailwind.config.js file
✅ 2. Using Props in React
Props allow passing data from a parent component to a child component. In this project, I used props to:

Pass a username
Pass button text
Pass an image URL
Example:

jsx
Copy
Edit
<Card username="Nikhil" btnText="Click Me" btnUrl="https://example.com/image.jpg" />
✅ 3. Creating a Reusable Component
I built a Card component that accepts username, btnText, and btnUrl as props. This makes the component reusable with different data.

Example of the Card Component:

jsx
Copy
Edit
import React from 'react';

const Card = ({ username, btnText, btnUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4">
      <img className="w-full object-cover h-48" src={btnUrl} alt={username} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{username}</div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Card;
✅ 4. Using Tailwind CSS for Styling
I used Tailwind CSS to style the Card component. Key classes include:

max-w-sm → Sets maximum width
rounded → Adds rounded corners
shadow-lg → Adds a shadow effect
w-full → Makes the image take full width
bg-blue-500 hover:bg-blue-700 → Button styling with hover effect
Conclusion
This project helped me understand the fundamentals of Tailwind CSS, how to use props effectively, and how to create reusable components in React. 🚀


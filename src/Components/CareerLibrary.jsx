import React from 'react';
import Underline from './Underline';


import BookOne from '../assets/Books/Book-1.pdf';
import BookTwo from '../assets/Books/Book-2.pdf';
import BookThree from '../assets/Books/Book-3.pdf';
import BookFour from '../assets/Books/Book-4.pdf';
import BookFive from '../assets/Books/Book-5.pdf';
import BookSix from '../assets/Books/Book-6.pdf';
import BookSeven from '../assets/Books/Book-7.pdf';
import BookEight from '../assets/Books/Book-8.pdf';
import BookNine from '../assets/Books/Book-9.pdf';
import BookTen from '../assets/Books/Book-10.pdf';
import BookEleven from '../assets/Books/Book-11.pdf';
import BookTwelve from '../assets/Books/Book-12.pdf';
import BookThirteen from '../assets/Books/Book-13.pdf';
import BookFourteen from '../assets/Books/Book-14.pdf';
import BookFifteen from '../assets/Books/Book-15.pdf';
import BookSixteen from '../assets/Books/Book-16.pdf';
import BookSeventeen from '../assets/Books/Book-17.pdf';
import BookEighteen from '../assets/Books/Book-18.pdf';
import BookNineteen from '../assets/Books/Book-19.pdf';
import BookTwenty from '../assets/Books/Book-20.pdf';

// Sample PDF data (replace URLs with your actual PDFs)
const pdfBooks = [
  { id: 1, title: 'Career Growth Strategies', url: BookOne },
  { id: 2, title: 'Effective Networking', url: BookTwo },
  { id: 3, title: 'Job Interview Guide', url: BookThree },
  { id: 4, title: 'Resume Writing Tips', url: BookFour },
  { id: 5, title: 'Time Management Skills', url: BookFive },
  { id: 6, title: 'Leadership Essentials', url: BookSix },
  { id: 7, title: 'Team Collaboration', url: BookSeven },
  { id: 8, title: 'Personal Branding', url: BookEight },
  { id: 9, title: 'Negotiation Skills', url: BookNine },
  { id: 10, title: 'Communication Mastery', url: BookTen },
  { id: 11, title: 'Problem Solving Techniques', url: BookEleven },
  { id: 12, title: 'Emotional Intelligence', url: BookTwelve },
  { id: 13, title: 'Career Planning', url: BookThirteen },
  { id: 14, title: 'Productivity Hacks', url: BookFourteen },
  { id: 15, title: 'Interview Preparation', url: BookFifteen },
  { id: 16, title: 'Project Management', url: BookSixteen },
  { id: 17, title: 'Critical Thinking', url: BookSeventeen },
  { id: 18, title: 'Remote Work Strategies', url: BookEighteen },
  { id: 19, title: 'Career Transitions', url: BookNineteen },
  { id: 20, title: 'Entrepreneurship Basics', url: BookTwenty },
];

const CareerLibrary = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
        <Underline title="Career Books Library" className="my-[clamp(2rem,5vw,5rem)]"></Underline>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {pdfBooks.map(book => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow p-4 flex flex-col hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-gray-800 mb-2 truncate">{book.title}</h2>
            
            <div className="flex-1 border rounded overflow-hidden mb-2">
              <iframe
                src={book.url}
                title={book.title}
                className="w-full h-80"
              ></iframe>
            </div>

            <a
              href={book.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-center"
            >
              Open in New Tab
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerLibrary;

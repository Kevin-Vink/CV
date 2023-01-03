import React from 'react';
import { Star } from 'react-feather';

const testimonials = [
  {
    name: 'Jeffrey Winters',
    role: 'CEO of Winters Co.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nunc vel mauris. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nunc vel mauris.',
    image: 'https://images.pexels.com/photos/4750165/pexels-photo-4750165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    stars: 3,
  },
  {
    name: 'John Doe',
    role: 'CEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nunc vel mauris. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nunc vel mauris.',
    image: 'https://images.pexels.com/photos/4750165/pexels-photo-4750165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    stars: 5,
  },
];

function Testimonials() {
  return (
    <div className="flex flex-col gap-y-3 pt-10 pb-20">
      <h2 className="text-white font-bold text-2xl pb-4">Testimonials</h2>
      <div className="grid xl:grid-cols-3 gap-16">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="w-full h-full bg-accent-300 px-6 py-4 flex flex-col gap-y-4 relative">
            <div className="flex gap-x-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 object-cover rounded-full"
              />
              <h3 className="text-white font-bold pt-4">{testimonial.name}</h3>
              <p className="absolute bg-sky-400/75 w-fit text-white px-2 py-1 rounded-md -top-4 right-4 shadow-lg">{testimonial.role}</p>
            </div>
            <p className="text-neutral-400">{testimonial.description}</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-accent-600 w-fit text-center text-white px-2 py-1 rounded-md flex gap-x-1">
                {/* Show the amount of stars given up to 5 */}
                {testimonial.stars === 5 ? (
                  Array.from({ length: testimonial.stars }, (_, i) => (
                    <Star key={i} className="fill-yellow-500 stroke-none" />
                  ))) : (
                  Array.from({ length: testimonial.stars }, (_, i) => (
                    <Star key={i} className="fill-yellow-500 stroke-none" />
                  )).concat(Array.from({ length: 5 - testimonial.stars }, (_, i) => (
                    <Star key={i + 4} className="fill-neutral-400 stroke-none" />
                  )))
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
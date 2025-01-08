import React from 'react';

const Documentation: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <br />
        <br />
        <br />
      <p className='text-yellow-500 font-bold text-2xl mb-2'>Site Documentation</p>

    <section style={{ marginBottom: '20px' }}>
      <p className='text-yellow-500 font-bold text-m mb-2'>Overview</p>
      <p>
        This website was designed as part of FBLA Website Design to showcase Lafayette High School's new public gymnasium.
      </p>
      <p>
        It features responsive design, modern UI components, and accessibility considerations.
      </p>
    </section>

      <section style={{ marginBottom: '20px' }}>
        <p className='text-yellow-500 font-bold text-m mb-2'>Technologies Used</p>
        <ul>
          <li>Frontend Framework: Next.js with TypeScript</li>
          <li>Styling: Tailwind CSS and styled components</li>
          <li>Hosting Platform: Firebase Hosting</li>
          <li>Version Control: GitHub</li>
        </ul>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <p className='text-yellow-500 font-bold text-lg mb-2'>Copyright Compliance</p>
        <section style={{ marginBottom: '10px' }}>
          <p className='text-yellow-500 font-bold text-m mb-2'>Images and Media</p>
          <ul>
            <li>All images sourced from royalty-free platforms such as Unsplash, Pexels, or Pixabay.</li>
            <li>Custom graphics designed using Canva and Figma.</li>
            <li>Icons provided by FontAwesome and Material Icons under open-source licenses.</li>
          </ul>
        </section>
        <section style={{ marginBottom: '10px' }}>
          <p className='text-yellow-500 font-bold text-m mb-2'>Code Libraries</p>
          <ul>
            <li>React and related dependencies are licensed under MIT.</li>
            <li>Any additional libraries are cited in the package.json file.</li>
          </ul>
        </section>
        <section>
          <p className='text-yellow-500 font-bold text-m mb-2'>Content</p>
          <p>
            All written content is original or used with permission. References and citations are provided where necessary.
          </p>
        </section>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <p className='text-yellow-500 font-bold text-m mb-2'>Testing and Validation</p>
        <ul>
          <li>Validated HTML and CSS using W3C validators.</li>
          <li>Checked accessibility compliance with Lighthouse and Wave tools.</li>
        </ul>
      </section>

      <section>
        <p className='text-yellow-500 font-bold text-m mb-2'>Contact Information</p>
        <p>Created by: Rohan G and Pardhu K</p>
        <p>Juniors at Lafayette High School</p>
      </section>
    </div>
  );
};

export default Documentation;
export const metadata = {
  title: 'Site Documentation',
  description: 'Documentation and copyright compliance for the website design competition.'
};

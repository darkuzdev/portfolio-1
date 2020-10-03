import React from 'react';

// Components
import Layout from '../containers/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <main className="container mx-auto mb-auto py-6 lg:py-10 px-8 lg:px-0">
        <section className="mb-10">
          <h1 className="text-4xl font-semibold">About Me</h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            cumque veritatis. Porro ullam nulla doloremque voluptatem
            dignissimos maiores, ab corporis reprehenderit molestiae natus
            aliquid odit veritatis architecto nobis dicta facere.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-4xl font-semibold">Skills</h2>
          <p className="mt-2">
            All of my learning has been self-taught, with the help of
            documentation and online course that I've taken. These are some of
            the main technologies that I use.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-4xl font-semibold">Experience</h2>
          <p className="mt-2">List of my experience...</p>
        </section>
      </main>
    </Layout>
  );
};

export default AboutPage;
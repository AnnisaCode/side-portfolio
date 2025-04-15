import React, { useState } from 'react';
import { Github, Linkedin, ExternalLink, X } from 'lucide-react';
import ProjectCarousel from './components/ProjectCarousel';
import Modal from './components/Modal';
import { Project } from './types';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const closeModal = () => setSelectedProject(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-8 md:py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-6 animate-fade-in">
          Hi, I'm Annisa <span className="inline-block animate-wave">👩🏻‍💻</span>
        </h1>
        <p className="text-xl md:text-2xl text-purple-600 mb-8">
          I build fun, clean, and responsive websites that (hopefully) make you smile 😄
        </p>
        <div className="flex gap-4">
          <a
            href="https://linkedin.com/in/annisa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://github.com/annisacode"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
          >
            <Github size={20} /> GitHub
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">About Me</h2>
          <p className="text-lg text-purple-600 mb-4">
            I turn coffee into beautiful code ☕💻
          </p>
          <p className="text-lg text-purple-600">
            As a front-end developer, I'm passionate about creating web experiences that are not just functional,
            but also bring joy to users. When I'm not coding, you'll find me hunting for the perfect GIF or
            adding unnecessary (but cute) animations to everything! 🎨✨
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-12 text-center">
          My Projects 🚀
        </h2>
        <ProjectCarousel onProjectSelect={setSelectedProject} />
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-purple-600">
        <p className="mb-2">Made with love (and snacks) by Annisa 🍪</p>
        <p className="text-sm">© 2025 Annisa – Still adding cool things here, come back later!</p>
      </footer>

      {/* Modal */}
      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
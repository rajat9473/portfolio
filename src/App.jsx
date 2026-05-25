export default function Portfolio() {

  const projects = [
    {
      title: "Pneumonia Detector Using CNN",
      tech: "Python • CNN • Deep Learning",
      desc: "Developed a deep learning model for pneumonia detection using Convolutional Neural Networks and medical image datasets."
    },
    {
      title: "IEAS Project",
      tech: "JavaScript • Full Stack Development",
      desc: "Built a responsive application focused on backend integration and efficient user interaction."
    },
    {
      title: "Weather Forecaster",
      tech: "HTML • CSS • JavaScript • APIs",
      desc: "Created a weather forecasting application using APIs to display real-time weather updates."
    }
  ];

  const skills = [
    "Java",
    "Python",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Spring Boot",
    "REST APIs",
    "Machine Learning",
    "SQL",
    "Git & GitHub"
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 md:px-20 py-6 border-b border-cyan-500/10">

        <div className="flex items-center gap-4">
          <div className="text-4xl font-extrabold text-cyan-400">
            RC
          </div>

          <h1 className="text-2xl font-bold">
            Rajat Chitransh
          </h1>
        </div>

        <div className="hidden md:flex gap-10 text-lg font-medium items-center">

          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition font-semibold shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          >
            Resume ↓
          </a>

        </div>

      </nav>

      {/* Hero Section */}
      <section className="px-8 md:px-20 py-24 grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <p className="text-cyan-400 uppercase tracking-[5px] mb-5">
            Computer Science Graduate
          </p>

          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-8">
            Building Modern
            <span className="text-cyan-400"> AI & Web </span>
            Solutions
          </h1>

          <p className="text-slate-300 text-xl leading-10 mb-10">
            Passionate Full Stack Developer focused on building scalable web applications, AI-powered systems, and modern user experiences.
          </p>

          <div className="flex gap-5 flex-wrap">

            <a
              href="https://github.com"
              target="_blank"
              className="bg-cyan-400 hover:bg-cyan-300 transition text-black px-8 py-4 rounded-2xl font-bold text-lg"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition px-8 py-4 rounded-2xl font-bold text-lg"
            >
              LinkedIn
            </a>

          </div>

        </div>

        {/* Hero Right */}
        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 bg-cyan-400 blur-[120px] opacity-30 rounded-full"></div>

            <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-cyan-400 to-blue-700 flex items-center justify-center text-8xl font-extrabold shadow-[0_0_80px_rgba(6,182,212,0.5)]">
              RC
            </div>

          </div>

        </div>

      </section>

      {/* About */}
      <section id="about" className="px-8 md:px-20 py-24">

        <div className="bg-[#071120] border border-cyan-500/20 rounded-[40px] p-10 md:p-16 shadow-[0_0_60px_rgba(6,182,212,0.15)]">

          <div className="mb-14">

            <p className="text-cyan-400 uppercase tracking-[6px] text-sm mb-4">
              Get To Know Me
            </p>

            <h2 className="text-5xl md:text-7xl font-bold">
              About <span className="text-cyan-400">Me</span>
            </h2>

          </div>

          <div className="grid lg:grid-cols-3 gap-10">

            {/* Left */}
            <div className="lg:col-span-2 bg-[#0b1324] border border-cyan-500/10 rounded-[35px] p-10">

              <p className="text-slate-300 text-xl leading-[42px]">
                I am a Computer Science graduate with hands-on experience in Full Stack Development, Artificial Intelligence, and backend engineering. Passionate about building scalable and user-centric applications, I enjoy solving real-world problems through modern technologies and AI-driven solutions.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

                <div className="bg-[#111827] rounded-3xl p-6 border border-slate-800 text-center">
                  <h4 className="text-4xl font-bold text-cyan-400 mb-2">
                    2026
                  </h4>

                  <p className="text-slate-400">
                    Graduate
                  </p>
                </div>

                <div className="bg-[#111827] rounded-3xl p-6 border border-slate-800 text-center">
                  <h4 className="text-4xl font-bold text-cyan-400 mb-2">
                    B.Tech
                  </h4>

                  <p className="text-slate-400">
                    CSE
                  </p>
                </div>

                <div className="bg-[#111827] rounded-3xl p-6 border border-slate-800 text-center">
                  <h4 className="text-4xl font-bold text-cyan-400 mb-2">
                    3+
                  </h4>

                  <p className="text-slate-400">
                    Projects
                  </p>
                </div>

                <div className="bg-[#111827] rounded-3xl p-6 border border-slate-800 text-center">
                  <h4 className="text-4xl font-bold text-cyan-400 mb-2">
                    AI
                  </h4>

                  <p className="text-slate-400">
                    Enthusiast
                  </p>
                </div>

              </div>

            </div>

            {/* Right */}
            <div className="bg-gradient-to-br from-cyan-500 to-blue-700 rounded-[35px] p-10 text-black">

              <h3 className="text-4xl font-bold mb-8">
                What Drives Me
              </h3>

              <div className="space-y-8">

                <div>
                  <h4 className="text-2xl font-bold mb-2">
                    Problem Solver
                  </h4>

                  <p className="text-lg">
                    I enjoy solving complex problems and building impactful digital solutions.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-2">
                    Lifelong Learner
                  </h4>

                  <p className="text-lg">
                    Constantly exploring new technologies and improving my development skills.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-2">
                    Team Player
                  </h4>

                  <p className="text-lg">
                    I believe in collaboration, communication, and continuous growth.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Education */}
      <section id="education" className="px-8 md:px-20 py-24">

        <div className="bg-[#071120] border border-cyan-500/20 rounded-[35px] p-10 shadow-[0_0_50px_rgba(6,182,212,0.1)]">

          <div className="mb-14">

            <p className="text-cyan-400 uppercase tracking-[6px] text-sm mb-4">
              Education Overview
            </p>

            <h2 className="text-5xl md:text-6xl font-bold">
              Edu<span className="text-cyan-400">cation</span>
            </h2>

          </div>

          <div className="bg-[#0b1324] border border-cyan-500/10 rounded-[30px] p-10 flex flex-col lg:flex-row justify-between gap-10">

            <div className="flex gap-6">

              <div className="min-w-[90px] h-[90px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-700 flex items-center justify-center text-4xl shadow-[0_0_40px_rgba(6,182,212,0.5)]">
                🎓
              </div>

              <div>

                <h3 className="text-3xl font-bold mb-3">
                  B.Tech in Computer Science and Engineering
                </h3>

                <p className="text-cyan-400 text-xl font-semibold mb-3">
                  CSE Graduate
                </p>

                <p className="text-slate-400 text-lg mb-5">
                  2022 - 2026
                </p>

                <p className="text-slate-300 text-lg leading-9 max-w-3xl">
                  Relevant coursework: Data Structures, Algorithms, DBMS, OOPs, Operating Systems, Computer Networks, Artificial Intelligence, Machine Learning, and Web Development.
                </p>

              </div>

            </div>

            <div className="border-l border-cyan-500/20 pl-10 flex items-center">

              <div>

                <div className="w-20 h-20 rounded-2xl bg-[#111827] flex items-center justify-center text-4xl mb-5 border border-cyan-500/20">
                  🏛️
                </div>

                <h4 className="text-cyan-400 text-2xl font-bold mb-2">
                  University
                </h4>

                <p className="text-slate-300 text-xl">
                  AKTU, Lucknow
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Skills */}
      <section id="skills" className="px-8 md:px-20 py-24">

        <h2 className="text-5xl font-bold text-center mb-16">
          Technical <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="bg-[#0f172a] border border-slate-800 hover:border-cyan-400 hover:-translate-y-2 transition rounded-3xl p-8 text-center text-xl font-semibold"
            >
              {skill}
            </div>

          ))}

        </div>

      </section>

      {/* Projects */}
      <section id="projects" className="px-8 md:px-20 py-24">

        <h2 className="text-5xl font-bold text-center mb-16">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-[#0f172a] border border-slate-800 hover:border-cyan-400 transition rounded-[35px] p-10"
            >

              <h3 className="text-3xl font-bold mb-5">
                {project.title}
              </h3>

              <p className="text-cyan-400 text-lg mb-5">
                {project.tech}
              </p>

              <p className="text-slate-300 text-lg leading-8">
                {project.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Contact */}
      <section id="contact" className="px-8 md:px-20 py-24">

        <div className="bg-gradient-to-r from-cyan-500 to-blue-700 rounded-[40px] p-16 text-center text-black">

          <h2 className="text-5xl font-bold mb-8">
            Let's Connect
          </h2>

          <p className="text-2xl font-medium mb-10">
            Open to Software Development, AI, and Full Stack opportunities.
          </p>

          <div className="flex flex-col gap-5 text-2xl font-bold">
            <p>📧 rajatchitransh02@gmail.com</p>
            <p>📱 +91-9559525595</p>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-slate-400 border-t border-slate-800">
        © 2026 Rajat Chitransh • Portfolio Website
      </footer>

    </div>
  );
}
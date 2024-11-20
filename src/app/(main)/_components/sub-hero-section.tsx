const SubHeroSection = () => {
  return (
    <div className="bg-secondaryBackground px-5 md:p-10 lg:p-20 xl:px-40 2xl:px-80 py-12 space-y-12 md:flex md:space-y-0 md:gap-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Front-end</h2>
        <p> As a Front End Developer, I specialize in building interactive, user-friendly interfaces using modern JavaScript libraries and frameworks, with a strong focus on React. I leverage React’s powerful hooks, such as <code>useState</code>, <code>useEffect</code>, and <code>useContext</code>, to efficiently manage component states, handle side effects, and share global state across components. <br></br> <br></br>I stay updated with the latest trends in Front End development, continuously refining my skills with new React features, tools, and libraries.</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Back-end</h2>
        <p>As a Back End Developer, I focus on building scalable, efficient, and secure server-side applications using Node.js. I leverage the power of JavaScript on the server, utilizing frameworks like Express.js to build robust APIs, handle routing, and manage middleware effectively. I am experienced in creating RESTful services, and I also work with Docker for Containerizing services . <br></br><br></br> I also focus on writing clean, modular code and implementing proper authentication and authorization strategies, such as JWT (JSON Web Tokens), to secure APIs.</p>
      </div>
    </div>
  );
}

export default SubHeroSection;
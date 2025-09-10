
const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: "Python", level: 85, color: "bg-blue-500" },
        { name: "Django", level: 80, color: "bg-green-500" },
        { name: "Django Templates", level: 85, color: "bg-emerald-500" },
        { name: "SQL/Database", level: 75, color: "bg-purple-500" }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
  { name: "JavaScript", level: 50, color: "bg-yellow-500" },
        { name: "HTML/CSS", level: 85, color: "bg-orange-500" },
  { name: "React", level: 50, color: "bg-blue-400" },
        { name: "Responsive Design", level: 80, color: "bg-pink-500" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 80, color: "bg-gray-600" },
  { name: "Linux", level: 20, color: "bg-indigo-500" },
        { name: "API Development", level: 75, color: "bg-teal-500" },
        { name: "Deployment", level: 70, color: "bg-red-500" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My technical skills and proficiency levels across different technologies
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-3">
                        <div 
                          className={`${skill.color} rounded-full h-3 transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
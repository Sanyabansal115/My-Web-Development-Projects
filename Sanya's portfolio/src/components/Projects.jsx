import React, { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Salary Data Analysis",
      description:
        "Comprehensive salary analysis using Python and Jupyter Notebook. Analyzed salary distributions, career progression patterns, and compensation trends. Applied statistical methods and created professional visualizations using Matplotlib and Seaborn.",
      icon: "💰",
      image: "/images/salary-project.png",
      tags: ["Python", "Jupyter", "Pandas", "Data Analysis"],
      type: "python",
      notebookLink: "/projects/data-science/Project 1/project_ 1-Salary.ipynb",
      slidesLink:
        "/projects/data-science/Project 1/project_ 1-Salary.slides.html",
      datasetLink: "/projects/data-science/Project 1/003 salaries-by-college-major.csv",
    },
    {
      id: 2,
      title: "Lego Dataset Analysis",
      description:
        "Analyzed Lego datasets for coursework using Jupyter Notebook. Explored product categories, pricing trends, and popularity patterns. Applied data cleaning, transformation, and visualization techniques to derive insights.",
      icon: "🧱",
      image: "/images/lego-project.png",
      tags: ["Python", "Jupyter", "Pandas", "Data Visualization"],
      type: "python",
      notebookLink:
        "/projects/data-science/Project 4/Project-4-Lego_Analysis_for_Course.ipynb",
      slidesLink:
        "/projects/data-science/Project 4/Project-4-Lego_Analysis_for_Course.slides.html",
    },
    {
      id: 3,
      title: "Programming Languages Study Analysis",
      description:
        "Comparative study of programming languages using statistical analysis. Examined language popularity, usage trends, and performance metrics. Created comprehensive visualizations and detailed reports.",
      icon: "💻",
      image: "/images/programming-languages.png",
      tags: ["Python", "Jupyter", "Statistics", "Research"],
      type: "python",
      notebookLink:
        "/projects/data-science/Project 2/Project-2_Programming_Languages_(start).ipynb",
      slidesLink:
        "/projects/data-science/Project 2/Project-2_Programming_Languages_(start).slides.html",
      datasetLink: "/projects/data-science/Project 2/002 QueryResults.csv",
    },
    {
      id: 4,
      title: "Seaborn & Linear Regression Analysis",
      description:
        "Advanced statistical analysis utilizing Seaborn and linear regression models. Explored variable relationships, performed correlation analysis, and built predictive models with high accuracy.",
      icon: "📈",
      image: "/images/regression-project.png",
      tags: ["Python", "Seaborn", "Linear Regression", "Machine Learning"],
      type: "python",
      notebookLink:
        "/projects/data-science/Project 3/Project-3_Seaborn_and_Linear_Regression.ipynb",
      slidesLink:
        "/projects/data-science/Project 3/Project-3_Seaborn_and_Linear_Regression.slides.html",
      datasetLink: "/projects/data-science/Project 3/cost_revenue_dirty.csv",
    },
    {
      id: 5,
      title: "Customer Churn Prediction",
      description:
        "Advanced machine learning project predicting customer churn using telecommunications data. Implemented multiple ML algorithms including Logistic Regression and Decision Trees. Applied feature engineering, data preprocessing, and model evaluation to identify high-risk customers for targeted retention strategies.",
      icon: "🤖",
      image: "/images/churn-prediction.png",
      tags: [
        "Machine Learning",
        "Python",
        "Scikit-learn",
        "Predictive Analytics",
        "Classification",
      ],
      type: "ai-ml",
      notebookLink:
        "/projects/ai-machine_learning/Project 1/Customer Churn Prediction.ipynb",
      slidesLink:
        "/projects/ai-machine_learning/Project 1/Customer Churn Prediction.slides.html",
      datasetLink:
        "/projects/ai-machine_learning/Project 1/Telco-Customer-Churn.csv",
    },
    {
      id: 6,
      title: "Varsity Volleyball",
      description:
        "Served as team captain for two seasons. Led team to regional championships through strategic planning and mentoring. Demonstrated leadership, teamwork, and athletic excellence.",
      icon: "🏐",
      image: "/images/volleyball-captain.jpg",
      tags: ["Team Captain", "Leadership", "Athletics"],
      type: "sports",
    },
    {
      id: 7,
      title: "Digital Art Portfolio",
      description:
        "Created diverse design, landscapes, and abstract art. Work featured in student exhibition.",
      icon: "🎨",
      image: "/images/digital-art.jpg",
      tags: ["Digital Art", "Illustration"],
      type: "art",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section className="projects-section">
      <h2 className="section-title">Projects & Achievements</h2>

      <div className="project-filters">
        <p
          style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            color: "var(--sage-dark)",
            fontSize: "1.1rem",
          }}
        >
          Python/Jupyter data analysis, web development, athletic achievements,
          and creative work
        </p>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All ({projects.length})
          </button>
          <button
            className={`filter-btn ${filter === "python" ? "active" : ""}`}
            onClick={() => setFilter("python")}
          >
            🐍 Python ({projects.filter((p) => p.type === "python").length})
          </button>
          <button
            className={`filter-btn ${filter === "webdev" ? "active" : ""}`}
            onClick={() => setFilter("webdev")}
          >
            💻 Web Dev ({projects.filter((p) => p.type === "webdev").length})
          </button>
          <button
            className={`filter-btn ${filter === "ai-ml" ? "active" : ""}`}
            onClick={() => setFilter("ai-ml")}
          >
            🤖 AI/ML ({projects.filter((p) => p.type === "ai-ml").length})
          </button>
          <button
            className={`filter-btn ${filter === "sports" ? "active" : ""}`}
            onClick={() => setFilter("sports")}
          >
            🏐 Sports ({projects.filter((p) => p.type === "sports").length})
          </button>
          <button
            className={`filter-btn ${filter === "art" ? "active" : ""}`}
            onClick={() => setFilter("art")}
          >
            🎨 Art ({projects.filter((p) => p.type === "art").length})
          </button>
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <span style={{ fontSize: "4rem" }}>{project.icon}</span>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.slidesLink && (
                  <a
                    href={project.slidesLink}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📊 View Slides
                  </a>
                )}
                {project.notebookLink && (
                  <a
                    href={project.notebookLink}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📓 Jupyter Notebook
                  </a>
                )}
                {project.datasetLink && (
                  <a
                    href={project.datasetLink}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📋 Dataset (CSV)
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

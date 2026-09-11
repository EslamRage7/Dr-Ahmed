import { useTranslation } from "react-i18next";
import "../styles/Blog.css";

export default function Blog() {
  const { t } = useTranslation();

  const articles = [
    {
      id: 1,
      title: t("blog.article1Title"),
      description: t("blog.article1Desc"),
      image:
        "https://images.unsplash.com/photo-1606811841121-d595dc3456c1?w=500&h=300&fit=crop",
      author: "Dr. Ali",
    },
    {
      id: 2,
      title: t("blog.article2Title"),
      description: t("blog.article2Desc"),
      image:
        "https://images.unsplash.com/photo-1607613814075-e51df1bdc82f?w=500&h=300&fit=crop",
      author: "Dr. Fatima",
    },
    {
      id: 3,
      title: t("blog.article3Title"),
      description: t("blog.article3Desc"),
      image:
        "https://images.unsplash.com/photo-1631217205283-3a3a20afc0b0?w=500&h=300&fit=crop",
      author: "Dr. Mohamed",
    },
    {
      id: 4,
      title: t("blog.article4Title"),
      description: t("blog.article4Desc"),
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop",
      author: "Dr. Sara",
    },
    {
      id: 5,
      title: t("blog.article5Title"),
      description: t("blog.article5Desc"),
      image:
        "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=500&h=300&fit=crop",
      author: "Dr. Ahmed",
    },
    {
      id: 6,
      title: t("blog.article6Title"),
      description: t("blog.article6Desc"),
      image:
        "https://images.unsplash.com/photo-1606811841121-d595dc3456c1?w=500&h=300&fit=crop",
      author: "Dr. Ali",
    },
  ];

  const getDate = () => new Date().toISOString().split("T")[0];

  return (
    <section className="blog">
      <div className="blog-container">
        <h2 className="section-title">{t("blog.title")}</h2>
        <p className="section-subtitle">{t("blog.subtitle")}</p>

        <div className="blog-grid">
          {articles.map((article, idx) => (
            <div
              key={article.id}
              className="blog-card"
              data-aos="fade-up"
              data-aos-delay={idx * 100}>
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="blog-image"
                />
              )}
              <div className="blog-content">
                <h3>{article.title}</h3>
                <p className="blog-excerpt">
                  {article.description.substring(0, 150)}...
                </p>
                <div className="blog-meta">
                  <span>✍️ {article.author}</span>
                  <span>📅 {getDate()}</span>
                </div>
                <button className="read-more">{t("blog.readMore")}</button>
              </div>
            </div>
          ))}
        </div>

        <div className="newsletter">
          <h3>{t("blog.newsletter")}</h3>
          <p>{t("blog.subscribeText")}</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder={t("blog.emailPlaceholder")}
              required
            />
            <button type="submit">{t("blog.subscribe")}</button>
          </form>
        </div>
      </div>
    </section>
  );
}

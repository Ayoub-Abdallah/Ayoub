const { person, about, social } = require('./src/app/resources/content.js');
const baseURL = "localhost";
try {
  const obj = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
    description: about.description,
    url: `https://${baseURL}/about`,
    image: `${baseURL}/images/${person.avatar}`,
    sameAs: social
      .filter((item) => item.link && !item.link.startsWith("mailto:")) // Filter out empty links and email links
      .map((item) => item.link),
    worksFor: {
      "@type": "Organization",
      name: about.work.experiences[0].company || "",
    },
  };
  console.log(JSON.stringify(obj));
} catch (e) {
  console.error("Error:", e);
}

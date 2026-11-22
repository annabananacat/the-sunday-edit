
// ========================================
// 1. Editorial Content
// ========================================

const articles = {

  kyoto: {
    title: "The Art of Getting Lost in Kyoto",
    category: "Travel",
    description: "Beyond the crowded temples and familiar tourist routes, a quieter Kyoto reveals itself to those willing to wander.",
    author: "The Editors",
    readTime: "8 min read",
    image: "images/kyoto.jpg",
    alt: "A quiet traditional street in Kyoto, Japan",

    content: `
      <p>There is a certain magic in exploring a city without a destination. Kyoto, with its narrow streets, traditional architecture, and hidden gardens, invites visitors to discover something beyond the familiar.</p>

      <p>While its famous temples and historic landmarks deserve attention, the city's quieter corners offer a different kind of experience.</p>

      <h2>Beyond the Guidebook</h2>

      <p>Step away from the main streets and you may discover small neighborhood shrines, independent shops, and traditional wooden houses that reveal the character of the city.</p>

      <p>These spaces remind us that travel is not always about collecting experiences. Sometimes, it is about being present enough to notice them.</p>

      <blockquote>
        Sometimes the most meaningful discoveries happen when we stop looking for something specific.
      </blockquote>

      <h2>Finding Beauty in the Everyday</h2>

      <p>The changing light, the texture of weathered wood, and the quiet rhythm of neighborhood life offer opportunities to appreciate the ordinary.</p>

      <p>Kyoto encourages a slower approach to travel, one that values observation over accomplishment.</p>

      <h2>A Different Way to Explore</h2>

      <p>Leave room in your itinerary for unexpected discoveries. Explore respectfully, support local businesses, and remember that these neighborhoods are also places where people live and work.</p>

      <p>Perhaps the greatest souvenir is not something you bring home, but a different way of seeing the world.</p>
    `
  },

  architecture: {
    title: "Finding Beauty in Simplicity",
    category: "Design",
    description: "Why thoughtful architecture reminds us that less can sometimes mean so much more.",
    author: "The Editors",
    readTime: "5 min read",
    image: "images/architecture.jpg",
    alt: "Minimalist architecture with geometric concrete forms",

    content: `
      <p>Architecture shapes the way we experience the world. From the spaces we inhabit to the buildings we pass each day, design influences how we move, feel, and interact.</p>

      <h2>The Power of Restraint</h2>

      <p>Minimalist architecture often emphasizes materials, proportions, natural light, and the relationship between a building and its surroundings.</p>

      <p>By removing unnecessary elements, designers create opportunities for the essential details to become more meaningful.</p>

      <blockquote>
        Simplicity is not an absence of thought. It is the result of thoughtful decisions.
      </blockquote>

      <h2>Designing for Human Experience</h2>

      <p>A successful space is more than visually appealing. It considers accessibility, comfort, movement, and the needs of the people who use it.</p>

      <p>Perhaps the most powerful lesson of minimalist design is that every element should have a purpose.</p>
    `
  },

  art: {
    title: "The Quiet Language of Art",
    category: "Art",
    description: "Exploring the powerful connections between creativity, emotion, and human experience.",
    author: "The Editors",
    readTime: "6 min read",
    image: "images/art.jpg",
    alt: "Paintings displayed inside a contemporary art gallery",

    content: `
      <p>Art offers a way to communicate ideas and emotions that can be difficult to express through language alone.</p>

      <p>A painting, sculpture, or photograph can invite us to reconsider familiar ideas and discover perspectives different from our own.</p>

      <h2>Learning to Look</h2>

      <p>Visiting a gallery does not require an extensive knowledge of art history. Curiosity is often the most useful starting point.</p>

      <p>Consider the colors, textures, composition, and feelings that emerge as you spend time with a work.</p>

      <blockquote>
        Art invites us to pay attention to what we might otherwise overlook.
      </blockquote>

      <h2>Making Space for Creativity</h2>

      <p>Creative experiences encourage reflection and provide opportunities to connect with ourselves and others.</p>

      <p>Sometimes, the most interesting question is not what an artwork means, but what it makes us notice.</p>
    `
  },

  coffee: {
    title: "In Praise of Slow Mornings",
    category: "Culture",
    description: "Rediscovering the small rituals that give everyday life a deeper sense of meaning.",
    author: "The Editors",
    readTime: "4 min read",
    image: "images/coffee.jpg",
    alt: "A cup of coffee on a wooden cafe table",

    content: `
      <p>There is something comforting about the first moments of the morning. Before the demands of the day begin, familiar rituals offer a sense of continuity.</p>

      <h2>The Value of Small Rituals</h2>

      <p>Making coffee, opening a window, or reading a few pages of a book can create moments of intentionality within a busy schedule.</p>

      <p>These activities do not need to be elaborate. Their value often comes from the attention we give them.</p>

      <blockquote>
        An ordinary moment can become meaningful simply because we choose to notice it.
      </blockquote>

      <h2>Creating Room for Yourself</h2>

      <p>Not everyone has the luxury of an unhurried morning. Even a few quiet minutes, however, can provide an opportunity to begin the day with intention.</p>

      <p>Slow living is not about doing everything slowly. It is about deciding what deserves our attention.</p>
    `
  },

  mountains: {
    title: "Where the Mountains Meet the Sky",
    category: "Travel",
    description: "A journey into the wilderness and the unexpected clarity that comes from disconnecting.",
    author: "The Editors",
    readTime: "7 min read",
    image: "images/mountains.jpg",
    alt: "A winding hiking trail through a mountain landscape",

    content: `
      <p>There are few experiences quite like standing beneath a vast mountain landscape. The scale of the natural world offers a perspective that can be difficult to find in everyday life.</p>

      <h2>The Rhythm of the Trail</h2>

      <p>Hiking encourages us to experience distance differently. Progress becomes a collection of small steps, changing landscapes, and moments of rest.</p>

      <p>Without the constant distractions of everyday routines, familiar thoughts may begin to feel different.</p>

      <blockquote>
        The journey is often more memorable than the summit.
      </blockquote>

      <h2>Traveling Responsibly</h2>

      <p>Exploring natural environments comes with responsibilities. Stay on designated trails, respect wildlife, prepare for changing conditions, and leave the landscape as you found it.</p>

      <h2>Returning with Perspective</h2>

      <p>Time outdoors can remind us of the value of simplicity, patience, and observation.</p>

      <p>The mountains will remain long after our visit. What we carry home is the experience of having spent time among them.</p>
    `
  },

  books: {
    title: "Objects That Tell Stories",
    category: "Design",
    description: "How everyday objects become meaningful through craftsmanship, design, and memory.",
    author: "The Editors",
    readTime: "5 min read",
    image: "images/books.jpg",
    alt: "A collection of thoughtfully designed books",

    content: `
      <p>The objects we surround ourselves with often reveal something about our lives. A favorite book, handmade ceramic bowl, or inherited piece of furniture can hold meaning beyond its practical purpose.</p>

      <h2>More Than an Object</h2>

      <p>Thoughtful design considers how materials, textures, proportions, and functionality contribute to an experience.</p>

      <p>Over time, the objects we use become connected to memories, relationships, and personal histories.</p>

      <blockquote>
        The things we keep often tell stories about the lives we have lived.
      </blockquote>

      <h2>Choosing with Intention</h2>

      <p>Paying attention to craftsmanship encourages us to consider where things come from, how they are made, and how long they might last.</p>

      <p>Meaningful design does not always demand attention. Sometimes, its greatest achievement is becoming an essential part of everyday life.</p>
    `
  },

  market: {
    title: "A Seat at the Local Table",
    category: "Culture",
    description: "Discovering how food brings people together across languages, cultures, and borders.",
    author: "The Editors",
    readTime: "6 min read",
    image: "images/market.jpg",
    alt: "Colorful produce displayed at a local market",

    content: `
      <p>Food is one of the most immediate ways to explore a culture. Local markets, family recipes, and neighborhood restaurants offer insights into regional traditions and everyday life.</p>

      <h2>Exploring Through Taste</h2>

      <p>A visit to a local market reveals seasonal ingredients, familiar routines, and the relationships between communities and the food they produce.</p>

      <p>Asking questions and trying unfamiliar dishes can create opportunities for meaningful cultural exchange.</p>

      <blockquote>
        Sharing a meal is an invitation to learn something about another person's world.
      </blockquote>

      <h2>Preserving Traditions</h2>

      <p>Recipes often carry generations of knowledge. Ingredients and cooking techniques reflect geography, history, migration, and changing cultural influences.</p>

      <p>By approaching food with curiosity and respect, we can discover stories that extend far beyond the dinner table.</p>
    `
  }

};

// ========================================
// 2. Identify Requested Article
// ========================================

const articleParams = new URLSearchParams(
  window.location.search
);

const storyId = articleParams.get("story") || "kyoto";

const selectedArticle =
  Object.prototype.hasOwnProperty.call(articles, storyId)
    ? articles[storyId]
    : null;

// ========================================
// 3. Article Elements
// ========================================

const articleDetail = document.getElementById("articleDetail");
const articleError = document.getElementById("articleError");

// ========================================
// 4. Calculate Reading Time
// ========================================

function calculateReadingTime(content) {
  const temporaryElement = document.createElement("div");

  temporaryElement.innerHTML = content;

  const words = temporaryElement.textContent
    .trim()
    .split(/\s+/)
    .length;

  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min read`;
}

// ========================================
// 5. Render Article
// ========================================

function renderArticle(article) {

  document.title = `${article.title} | The Sunday Edit`;

  const metaDescription = document.querySelector(
    'meta[name="description"]'
  );

  if (metaDescription) {
    metaDescription.setAttribute(
      "content",
      article.description
    );
  }

  document.getElementById("articleTitle").textContent =
    article.title;

  document.getElementById("articleCategory").textContent =
    article.category;

  document.getElementById("articleDescription").textContent =
    article.description;

  document.getElementById("articleAuthor").textContent =
    `By ${article.author}`;

  document.getElementById("articleReadTime").textContent =
    calculateReadingTime(article.content);

  const articleImage = document.getElementById("articleImage");

  articleImage.src = article.image;
  articleImage.alt = article.alt;

  // Only render trusted, locally authored editorial HTML.

  document.getElementById("articleBody").innerHTML =
    article.content;

  articleDetail.hidden = false;
  articleError.hidden = true;
}

// ========================================
// 6. Handle Missing Articles
// ========================================

if (articleDetail && articleError) {

  if (selectedArticle) {

    renderArticle(selectedArticle);

  } else {

    document.title = "Story Not Found | The Sunday Edit";

    articleDetail.hidden = true;
    articleError.hidden = false;

  }

}

// ========================================
// 7. Synchronize Homepage Reading Times
// ========================================

document.querySelectorAll(
  '.article-card, .featured-section'
).forEach(card => {

  const link = card.querySelector(
    'a[href*="story="]'
  );

  if (!link) return;

  const url = new URL(link.href);

  const id = url.searchParams.get("story");

  if (!Object.prototype.hasOwnProperty.call(articles, id)) {
    return;
  }

  const article = articles[id];

  const readTime = card.classList.contains("featured-section")
    ? card.querySelector(".article-meta span:last-child")
    : card.querySelector(".card-footer > span");

  if (readTime) {
    readTime.textContent =
      calculateReadingTime(article.content);
  }

});
export type SearchItem = {
  title: string;
  excerpt: string;
  href: string;
  type: "page" | "blog";
  image?: string;
  keywords?:string[];
};

export const searchData: SearchItem[] = [
  {
    title: "Home",
    excerpt: "Therapy for anxiety, trauma, burnout, and emotional overwhelm in Santa Monica.....",
    keywords: ["home","homepage","base"],
    href: "/",
    type: "page",
  },
  {
    title: "Contact",
    excerpt: "Reach out to schedule a consultation or ask questions about working together.",
    keywords:["maya","dr maya","contact","address"],
    href: "/contact",
    type: "page",
  },
  {
    title: "Blog",
    excerpt:"Thoughtful reflections and practical insights on anxiety, healing, and emotional wellbeing.",
    keywords:["posts","social","writings"],
    href: "/blog",
    type: "page",
  },

  {
    title: "When Anxiety Doesn’t Look Like Anxiety",
    excerpt: "Explore the quieter forms of anxiety that often go unnoticed — including perfectionism, overthinking, and chronic tension.",
    keywords:["anxiety","overthinking","tension","blog"],
    href: "/blog/blog-post-one",
    image:"/blog-1.jpg",
    type: "blog",
  },
  {
    title: "Understanding Burnout Before It Consumes You",
    excerpt: "Learn to recognize the early signs of burnout and how therapy can help restore balance.",
    keywords:["burnout", "stress", "work stress", "exhaustion","blog"],
    href: "/blog/blog-post-two",
    image:"/blog-2.jpg",
    type: "blog",
  },
  {
    title: "When Functioning Isn’t the Same as Thriving",
    excerpt: "You may be managing life successfully on the outside while feeling depleted within — here’s why that matters.",
    keywords:["work stress","exhaustion","blog"],
    href: "/blog/blog-post-three",
    image: "/blog-3.jpg",
    type: "blog",
  },
  {
    title: "Learning to Feel Safe Again",
    excerpt: "Understand how therapy supports nervous system regulation and helps rebuild a lasting sense of safety.",
    keywords:["trauma","past","fear","safety","blog"],
    href: "/blog/blog-post-four",
    image:"/blog-4.jpg",
    type: "blog",
  }
];
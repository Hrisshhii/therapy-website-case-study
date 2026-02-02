export type SearchItem = {
  title: string;
  excerpt: string;
  href: string;
  type: "page" | "blog";
  image?: string;
};

export const searchData: SearchItem[] = [
  {
    title: "Home",
    excerpt: "Welcome to the Lilac Template homepage..........",
    href: "/",
    type: "page",
  },
  {
    title: "Contact",
    excerpt: "Contact... Contact me to book your first session...........",
    href: "/contact",
    type: "page",
  },
  {
    title: "Blog",
    excerpt:
      "Blog... My tiny corner of the internet where I talk about healing............",
    href: "/blog",
    type: "page",
  },

  {
    title: "Blog Post One",
    excerpt: "Blog Post One ...",
    href: "/blog/blog-post-one",
    image:"/hero-2.jpg",
    type: "blog",
  },
  {
    title: "Blog Post Two",
    excerpt: "Blog Post Two ...",
    href: "/blog/blog-post-two",
    image:"/hero-3.jpg",
    type: "blog",
  },
  {
    title: "Blog Post Three",
    excerpt: "Blog Post Four ...",
    href: "/blog/blog-post-four",
    image: "/about-circle.jpg",
    type: "blog",
  },
  {
    title: "Blog Post Four",
    excerpt: "Blog Post Four ...",
    href: "/blog/blog-post-four",
    image:"/about-main.jpg",
    type: "blog",
  }
];

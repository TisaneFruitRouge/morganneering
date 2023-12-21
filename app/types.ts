export type Poem = {
    content: {text: string};
    createdAt: string;
    id: string;
    magazine: string;
    published: string | null;
    publishedAt: string;
    title: string;
    updatedAt: string;
    url: string | null;
}
interface BlogPostProps {
  title: string;
  content: string;
}

export function BlogPost({ title, content }: BlogPostProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}
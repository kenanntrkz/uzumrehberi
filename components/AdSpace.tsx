interface AdSpaceProps {
  title: string;
  description: string;
}

export function AdSpace({ title, description }: AdSpaceProps) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
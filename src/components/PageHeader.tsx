interface PageHeaderProps {
  title: string;
  highlight: string;
  description: string;
}

export function PageHeader({ title, highlight, description }: PageHeaderProps) {
  return (
    <header className="text-left mb-12 max-w-3xl">
      <h1 className="font-rubik text-3xl md:text-4xl font-extrabold mb-4 text-portal-purple-dark">
        <span className="text-portal-purple">{highlight}</span> {title}
      </h1>
      <p className="text-portal-gray font-nunito text-lg leading-relaxed">{description}</p>
    </header>
  );
}

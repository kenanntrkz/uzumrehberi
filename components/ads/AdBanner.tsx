interface AdBannerProps {
  position: 'top' | 'sidebar' | 'content';
  className?: string;
}

export function AdBanner({ position, className = '' }: AdBannerProps) {
  return (
    <div className={`bg-gray-100 p-4 rounded-lg ${className}`}>
      <div className="text-center text-gray-500 text-sm">
        {position === 'top' && 'Header Reklam Alanı'}
        {position === 'sidebar' && 'Yan Reklam Alanı'}
        {position === 'content' && 'İçerik Reklam Alanı'}
      </div>
    </div>
  );
}
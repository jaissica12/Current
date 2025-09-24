interface RoktLogoProps {
  className?: string;
}

export default function RoktLogo({ className = "h-8" }: RoktLogoProps) {
  return (
    <div className={`flex items-center ${className}`} data-testid="logo-rokt">
      <svg 
        viewBox="0 0 80 32" 
        className="w-auto h-full"
        fill="currentColor"
      >
        {/* Rokt text logo following brand guidelines - monochromatic */}
        <text 
          x="0" 
          y="24" 
          fontFamily="Archivo, sans-serif" 
          fontSize="20" 
          fontWeight="600"
          className="select-none"
        >
          Rokt
        </text>
      </svg>
    </div>
  );
}
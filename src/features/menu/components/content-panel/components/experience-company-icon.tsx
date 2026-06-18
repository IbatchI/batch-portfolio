interface ExperienceCompanyIconProps {
  logo?: string;
  icon: string;
  company: string;
  className: string;
}

export function ExperienceCompanyIcon({
  logo,
  icon,
  company,
  className,
}: ExperienceCompanyIconProps) {
  return (
    <div className={className}>
      {logo ? (
        <img
          src={logo}
          alt={`${company} logo`}
          className="w-full h-full object-contain p-1"
        />
      ) : (
        icon
      )}
    </div>
  );
}

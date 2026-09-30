interface IconProps {
  name: string;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`/img/sprite_v6.svg#${name}`} />
    </svg>
  );
}

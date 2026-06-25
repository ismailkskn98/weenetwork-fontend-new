import Image from "next/image";

const SCREEN_IMAGES = [
  {
    src: "/images/weemenu/howitworks/menu-product-settings.webp",
    alt: "WeeMenu menu product settings preview",
  },
  {
    src: "/images/weemenu/howitworks/menus.webp",
    alt: "WeeMenu menu preview",
  },
  {
    src: "/images/weemenu/howitworks/templates.webp",
    alt: "WeeMenu template preview",
  },
  {
    src: "/images/weemenu/howitworks/colors.webp",
    alt: "WeeMenu color preview",
  },
];

export default function PhoneScreenCarousel() {
  return (
    <div className="phone-screen-fade relative h-full w-full">
      {SCREEN_IMAGES.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 75vw, 300px"
          className={`phone-screen-fade__slide phone-screen-fade__slide--${index + 1} object-contain object-center`}
          priority={index === 0}
        />
      ))}
    </div>
  );
}

"use client";
import styles from "./Carousel.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import { DataExcursion } from "./ExcursionData";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ongletFont } from "../../../fonts";

export default function Carousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [dots, setDots] = useState<number[]>([]);
  
    // Initialisation des dots
    useEffect(() => {
      if (!emblaApi) return;
      const slideCount = emblaApi.slideNodes().length;
      setDots(Array.from({ length: slideCount }, (_, i) => i));
    }, [emblaApi]);
  
    // Mise à jour de l'index actif
    useEffect(() => {
      if (!emblaApi) return undefined;
      const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
      emblaApi.on("select", onSelect);
      return () => {
        emblaApi.off("select", onSelect);
      };
    }, [emblaApi]);

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          {DataExcursion.map((excursion, index) => (
            <div key={index} className={styles.embla__slide}>
              <Image
                src={excursion.image}
                alt={excursion.name}
                width={600}
                height={400}
                className={styles.carouselImage}
              />
              <div className={styles.carouselContent}>
                <h3 className={`${ongletFont.className} ${styles.carouselTitle}`}>
                    {excursion.name}
                </h3>
                <p className={styles.carouselDescription}>
                    {excursion.description}
                </p>
                <button><a href="">En savoir plus</a></button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Dots */}
      <div className={styles.dots}>
        {dots.map((dot, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === selectedIndex ? styles.activeDot : ""
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}

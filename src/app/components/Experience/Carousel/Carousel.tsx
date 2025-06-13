"use client";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Carousel.module.scss";
import { useCallback, useEffect, useState } from "react";
import { categories } from "./Categories";
import Image from "next/image";
import { ongletFont } from "../../../fonts";
import { motion } from "framer-motion";

export default function CarouselExperience() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dots, setDots] = useState<number[]>([]);
  const [modalImageIndex, setModalImageIndex] = useState<number | null>(null);

  // Gestion des dots et réinitialisation du carrousel
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
    const slideCount = emblaApi.slideNodes().length;
    setDots(Array.from({ length: slideCount }, (_, i) => i));
    emblaApi.scrollTo(0);
    setSelectedIndex(0);
  }, [emblaApi, selectedCategory]);

  // Mise à jour de l'index actif
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  // Ouvrir la modal avec l'image sélectionnée
  const openModal = (index: number) => {
    setModalImageIndex(index);
  };

  // Fermer la modal
  const closeModal = () => {
    setModalImageIndex(null);
  };

  // Naviguer vers l'image précédente
  const showPreviousImage = () => {
    if (modalImageIndex === null) return;
    setModalImageIndex((prevIndex) =>
      prevIndex !== null && prevIndex > 0
        ? prevIndex - 1
        : categories[selectedCategory].images.length - 1
    );
  };

  // Naviguer vers l'image suivante
  const showNextImage = () => {
    if (modalImageIndex === null) return;
    setModalImageIndex((prevIndex) =>
      prevIndex !== null &&
      prevIndex < categories[selectedCategory].images.length - 1
        ? prevIndex + 1
        : 0
    );
  };

  return (
    <div className={styles.carouselWrapper}>
      {/* Navigation des catégories */}
      <div className={`${styles.categories} ${ongletFont.className}`}>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`${styles.categoryButton} ${
              selectedCategory === index ? styles.active : ""
            }`}
            onClick={() => setSelectedCategory(index)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Carrousel des images */}
      <div className={styles.containerEmbla}>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla__container}>
            {categories[selectedCategory].images.map((image, index) => (
              <div className={styles.embla__slide} key={index}>
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  onClick={() => openModal(index)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description de la catégorie sélectionnée */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          drag={false}
          onPanEnd={(event, info) => {
            if (info.offset.x < -50 && selectedIndex < categories[selectedCategory].images.length - 1) {
              emblaApi?.scrollTo(selectedIndex + 1);
            } else if (info.offset.x > 50 && selectedIndex > 0) {
              emblaApi?.scrollTo(selectedIndex - 1);
            }
          }}
          style={{ cursor: 'pointer' }}
        >
          <div className={styles.categoryDescription}>
            <h3 className={ongletFont.className}>
              {categories[selectedCategory].name}
            </h3>
            <p>{categories[selectedCategory].description}</p>
          </div>
        </motion.div>
      </div>
      <div className={styles.categoryDescriptionSmall}>
        <h3 className={ongletFont.className}>
          {categories[selectedCategory].name}
        </h3>
        <p>{categories[selectedCategory].description}</p>
      </div>

      {/* Dots de navigation */}
      {dots.length > 1 && (
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
      )}

      {/* Modal pour afficher l'image en pleine taille */}
      {modalImageIndex !== null && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {dots.length > 1 && (
              <button
                className={styles.modalButton}
                onClick={showPreviousImage}
              >
                Précédent
              </button>
            )}
            <Image
              src={categories[selectedCategory].images[modalImageIndex]}
              alt="Image en pleine taille"
            />
            {dots.length > 1 && (
              <button className={styles.modalButton} onClick={showNextImage}>
                Suivant
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

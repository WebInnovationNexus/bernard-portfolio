import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import images
import bernardCampusLife from '@/assets/CampusLife.jpg';
import serenadersGroup from '@/assets/serenaders-group.jpg';
import schoolGathering from '@/assets/SchoolGathering0.jpg';
import trophy from '@/assets/trophy.jpg';

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryImages = [
    {
      src: serenadersGroup,
      title: 'NWU Serenaders Group',
      caption: 'Proud member of the NWU Serenaders choir - teamwork in action'
    },
    {
      src: bernardCampusLife,
      title: 'Campus Life',
      caption: 'Engaging with fellow students and building connections'
    },
    {
      src: schoolGathering,
      title: 'Education Outreach',
      caption: 'Offering advice and motivation to matric students about their academic journey'
    }
    ,
    {
      src: trophy,
      title: 'GACMA Achievement',
      caption: 'Gold Overall Position 1 at GACMA Eisteddfod 2022'
    }
  ];

  const openModal = (index: number) => {
    setCurrentImage(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:pl-80">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Moments that define my journey and commitment to community
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-campaign group-hover:shadow-lg transition-campaign">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-campaign"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-campaign">
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-campaign">
                    <h3 className="text-white font-semibold">{image.title}</h3>
                    <p className="text-white/80 text-sm">{image.caption}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <Button
                variant="outline"
                size="icon"
                className="absolute -top-12 right-0 bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={closeModal}
              >
                <X className="h-4 w-4" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {/* Image */}
              <motion.img
                key={currentImage}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={galleryImages[currentImage].src}
                alt={galleryImages[currentImage].title}
                className="w-full h-auto rounded-lg"
              />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {galleryImages[currentImage].title}
                </h3>
                <p className="text-white/80">{galleryImages[currentImage].caption}</p>
              </div>

              {/* Dots Indicator */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-campaign ${
                      index === currentImage ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
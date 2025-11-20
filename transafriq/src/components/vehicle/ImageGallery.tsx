import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

const ImageGallery = ({ images, alt }: ImageGalleryProps) => {
  return (
    <div className="w-full aspect-[4/3] bg-gray-200">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={0}
        slidesPerView={1}
        className="w-full h-full gallery-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`${alt} ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .gallery-swiper .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
        }
        .gallery-swiper .swiper-pagination-bullet-active {
          background: var(--primary);
          opacity: 1;
        }
        .gallery-swiper .swiper-button-next,
        .gallery-swiper .swiper-button-prev {
          color: white;
          background: rgba(0, 0, 0, 0.3);
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        .gallery-swiper .swiper-button-next:after,
        .gallery-swiper .swiper-button-prev:after {
          font-size: 20px;
        }
      `}</style>
    </div>
  );
};

export default ImageGallery;

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  return (
    <div className="w-full aspect-[4/3] bg-gray-100 relative">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={images.length > 1}
        spaceBetween={0}
        slidesPerView={1}
        className="h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`${alt} - Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Image counter */}
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium z-10">
        {images.length} photo{images.length > 1 ? 's' : ''}
      </div>
    </div>
  );
}

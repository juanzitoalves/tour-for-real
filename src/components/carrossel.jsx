import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import img1 from '../assets/image-carrossel1.png'

const imagens = [img1, img1, img1]

export default function Carrossel() {
  return (
    <>
      <p className='preMedia'>
        Explore a autêntica cultura da favela com nossos passeios guiados.
        Segurança, acolhimento e experiências inesquecíveis com quem realmente<br /> conhece o local.
      </p>

      <Swiper
        slidesPerView={1}
        className='mySwiper'
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {imagens.map((img, index) => (
          <SwiperSlide key={index}>
            <section className="slide-content">
              <img className="carrossel-image" src={img} alt={`Imagem ${index + 1}`} />
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

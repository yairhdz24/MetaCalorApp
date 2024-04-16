import yair from '../data/images/yair.jpg'
import isaac from '../data/images/isaac.jpg'
import natte from '../data/images/natte.jpg'
import andres from '../data/images/andres.jpg'
import { ItemTestimonial } from './ItemTestimonial'

export const Testimonials = () => {
  return (
    <section>
      <div className='container px-5 py-10 mx-auto'>
        <h1 className='text-4xl font-extrabold title-font text-gray-900 mb-12 text-center uppercase'>
          Testimonios
        </h1>
        <div className='flex flex-wrap -m-4'>
          <ItemTestimonial
            img={yair}
            text={
              ' MetaCalor ha transformado mi vida. Ahora puedo llevar un control preciso de mis calorías y recibir recomendaciones personalizadas. ¡Lamejor aplicación de salud!'
            }
            name={'Yair'}
          />
          <ItemTestimonial
            img={isaac}
            text={
              'MetaCalor es la mejor aplicación que he probado. Me ayuda a mantenerme en forma y llevar un estilo de vida saludable. ¡Altamente recomendada!'  
            }
            name={'Isaac'}
          />
          <ItemTestimonial
            img={andres}
            text={
              '¡Increíble! MetaCalor me ha ayudado a alcanzar mis objetivos de pérdida de peso de manera eficaz. La interfaz es fácil de usar y muy motivadora.'  
            }
            name={'Andres'}
          />

          <ItemTestimonial
            img={natte}
            text={' ¡Fantástico! MetaCalor es mi aliado en el camino hacia una vida más saludable. Ha hecho que mi viaje de acondicionamiento físico sea emocionante y alcanzable.'}
            name={'Anette'}
          />
        </div>
      </div>
    </section>
  )
}

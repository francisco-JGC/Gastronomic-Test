import './index.scss'
import { useForm } from '../../../../hook/useForm'
import { SectionPage } from '../../../../components/LayoutSectionPage'
import locationIcon from '../../../../assets/icons/location.svg'
import phoneIcon from '../../../../assets/icons/phone.svg'
import timeIcon from '../../../../assets/icons/time.svg'
import { ContentIconInfo } from '../ContentIconInfo'
import { Button } from '../../../../components/Button'
import { toast } from 'sonner'

export const ContactUs = () => {
  const initialState = {
    name: '',
    email: '',
    message: '',
  }

  const { values, handleInputChange, reset } = useForm(initialState)

  const handleSubmitForm = (e) => {
    e.preventDefault()

    if (
      values.name.trim() === '' ||
      values.email.trim() === '' ||
      values.message.trim() === ''
    ) {
      toast('Algo salio mal', {
        description: 'Todos los campos son requeridos.',
      })
      return
    }

    toast.success('!Gracias por tu mensaje', {
      description: `Hola ${values.name}, tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo lo antes posible.`,
    })

    reset()
  }

  return (
    <SectionPage className="contact-us">
      <div className="contact-us-content">
        <div className="info">
          <ContentIconInfo
            icon={phoneIcon}
            title="Llamanos Ahora"
            description="+1 234 567 890"
          />
          <ContentIconInfo
            icon={locationIcon}
            title="Ubicacion del Local"
            description="1234 Street Name, City Name, United States"
          />
          <ContentIconInfo
            icon={timeIcon}
            title="Horario de Atencion"
            description="Lunes - Viernes: 9:00 AM a 5:00 PM"
          />
        </div>
        <form className="form" onSubmit={handleSubmitForm}>
          <div className="title">
            <h2>Envianos un Mensaje</h2>
          </div>
          <input
            type="text"
            name="name"
            value={values.name}
            placeholder="Nombre Completo"
            onChange={(e) => handleInputChange(e.target)}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo Electronico"
            value={values.email}
            onChange={(e) => handleInputChange(e.target)}
          />
          <textarea
            name="message"
            value={values.message}
            onChange={(e) => handleInputChange(e.target)}
            placeholder="Mensaje"
          />
          <Button type="submit">Enviar Mensaje</Button>
        </form>
      </div>
    </SectionPage>
  )
}

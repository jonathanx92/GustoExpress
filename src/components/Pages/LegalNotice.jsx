import React from 'react';
import { Typography } from 'antd';
import '../../App.css'

const { Title, Paragraph } = Typography;

const LegalNotice = () => {
  return (
    <div className="legal-notice-container"> 
      <div className="legal-notice-content"> 
        <Title level={2}>Aviso Legal</Title>
        <Title level={4}>Titularidad del sitio web</Title>
        <Paragraph>
          El sitio web <a href="./">www.gustoexpress.com</a> es propiedad de JonathanDesing©, con domicilio social en Madrid, España.
          CIF/NIF: 49686767M. Teléfono: 693209966. Email de contacto: <a href="mailto:contactgustoexpress@gmail.com">contactgustoexpress@gmail.com</a>.
        </Paragraph>

        <Title level={4}>Condiciones de uso</Title>
        <Paragraph>
          La utilización del sitio web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal. El usuario se compromete a hacer un uso adecuado y lícito del sitio web, de conformidad con la legislación aplicable, la buena fe y el orden público.
        </Paragraph>

        <Title level={4}>Propiedad intelectual e industrial</Title>
        <Paragraph>
          Todos los derechos de propiedad intelectual e industrial del sitio web y su contenido (textos, imágenes, diseño, logotipos, etc.) son propiedad de [Nombre de la Empresa] o de terceros que han autorizado su uso. Se prohíbe la reproducción, distribución, comunicación pública, transformación o cualquier otra actividad que se pueda realizar con los contenidos del sitio web sin el consentimiento expreso de [Nombre de la Empresa].
        </Paragraph>

        <Title level={2}>Política de Privacidad</Title>
        <Title level={4}>Información recopilada</Title>
        <Paragraph>
          GustoExpress S.L recopila información personal proporcionada por los usuarios a través de formularios de contacto, registros de usuario, etc. La información recopilada puede incluir nombres, direcciones, direcciones de correo electrónico, números de teléfono, información de pago, etc.
        </Paragraph>
      </div>
    </div>
  );
};

export default LegalNotice;

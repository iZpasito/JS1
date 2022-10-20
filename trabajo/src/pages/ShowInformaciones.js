import React from "react";
import BarraNav from "../components/bnav";
import Rfooter from "../components/footer";
import Rhead from "../components/header";
import Ffooter from "../components/finfooter";
import '../styles/avisos.css'


export default function Aviso(){
    return(
        <div>
            <Rhead/>
            <BarraNav/>
            <div id='conten1'>
            <div class="post-right-content" >
				<div className="Container-text"><h3 class="Container-h3">Oferta de Trabajo PFalimentos</h3></div>
                <div className='Container-bod'>
                    <p><strong>El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, sin necesidad de una copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir los diseños y la forma del contenido antes de que el contenido se haya creado, dando al diseño y al proceso de producción más libertad.

Se cree ampliamente que la historia de Lorem Ipsum se origina con Cicerón en el siglo I aC y su texto De Finibus bonorum et malorum. Esta obra filosófica, también conocida como En los extremos del bien y del mal, se dividió en cinco libros. El Lorem Ipsum que conocemos hoy se deriva de partes del primer libro Liber Primus y su discusión sobre el hedonismo, cuyas palabras habían sido alteradas, añadidas y eliminadas para convertirlas en un latín sin sentido e impropio. No se sabe exactamente cuándo el texto recibió su forma tradicional actual. Sin embargo, las referencias a la frase "Lorem Ipsum" se pueden encontrar en la Edición de la Biblioteca Clásica Loeb de 1914 del De Finibus en las secciones 32 y 33. Fue en esta edición del De Finibus en la que H. Rackman tradujo el texto. El siguiente fragmento se selecciona de la sección 32:</strong></p>
                </div>
				</div>
                <hr className="hr1"/>
            </div>
            <Rfooter/>
            <Ffooter/>    
        </div>
    )
}
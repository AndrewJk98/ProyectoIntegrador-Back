import { Button } from "react-bootstrap";
import menu from "./hamburger.png";
import user from "./user-svgrepo-com.png"

function Noticias(){
    return (
        <div>
            <div style={{width: 1366, height: 768, position: 'relative', background: 'lightblue'}}>
                <div style={{width: 200, height: 61, left: 540, top: 13, position: 'absolute', color: 'black', fontSize: 48, fontFamily: 'Inter', fontWeight: '900', wordWrap: 'break-word'}}>Noticias</div>
                <img style={{width: 55, height: 45, left: 12, top: 21, position: 'absolute'}} src={menu} />
                <img style={{width: 57, height: 45, left: 1213, top: 21, position: 'absolute'}} src={user} />
                <div style={{width: 148, height: 348, left: 36, top: 106, position: 'absolute', background: '#D9D9D9'}} />
                <img style={{width: 1274, height: 130, left: 6, top: 590, position: 'absolute'}} src="https://via.placeholder.com/1274x130" />
                <div style={{width: 143, height: 267, left: 39, top: 165, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '900', wordWrap: 'break-word'}}>
                     <Button href="">Inicio</Button><br/><br/>
                     <Button href="/noticia/create">Noticias</Button><br/><br/>
                     <Button href="/noticia/create">Diagnosticos</Button><br/><br/>
                     <Button href="/noticia/create">Q & A</Button><br/><br/>
                     </div>
                <div style={{width: 949, height: 459, left: 235, top: 89, position: 'absolute', background: '#D9D9D9'}}>
                    <h1 className="text-center mt-5 mb-0 display-4 font-weight-bold text-uppercase ">¿Qué es el VIH/sida y cómo se trasmite? </h1>
                </div>
                <div style={{width: 226, height: 63, left: 1016, top: 527, position: 'absolute', background: '#D9D9D9'}} />
                </div>
        </div>
        
    );
}

export default Noticias;
import Picture from "../app/public/images.jpg"
import Header from "../components/header"
import Image  from "next/image"
export default function Home(){
  return(
     <div>
      <Header />
      <div className="info">
        <div className="photo">
           <Image src={Picture} alt="Photo" />
           </div> 
           <div className="name">
            <h1><b><i>ZIFRA FIRDOUS</i></b></h1>
           <p>I&apos;m a Frontend Developer</p>
           </div>
         <div className="resume">
           <button type="button">Resume</button>
        </div>
        <div className="skills">
        <button type="button">Skills</button>
        </div> 
       </div>  
     </div>
  )
}
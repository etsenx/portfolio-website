import Image from "next/image"

export default function SkillLogo(props: any) {  
  return (
    <div className="skill-logo-wrapper">
      <Image width={40} height={40} src={props.src} alt={props.alt}/>
    </div>
  )
}
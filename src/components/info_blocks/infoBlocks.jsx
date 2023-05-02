import './infoBlocks.css'
const InformationBlock = ({img,title,text,link, text2})=>{
    return(
        <div class="info_Blocks">
        <img src={img} height="75px" />
        <h3 className="h3Title">{title}</h3>
        <p>{text}
          <a href={link}> {text2}</a>
        </p>
      </div>
    )
}

export default InformationBlock

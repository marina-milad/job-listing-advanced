import "./jobitem.css"
import photosnap from "../assets/photosnap.svg"
function jobitem ({item}){
    const QualificationArray= [...item.languages,...item.tools];
    console.log(QualificationArray);
    return(
<div className="jobitem" style={item.new ==true ? {borderLeft:"solid 2px hsl(180, 29%, 50%)"}:null}>
    <img  id="photo" src={item.logo}/>
    <div className="jobinfo">
        <div className="firstrowinfo">
            <label className="companylabel">{item.company} </label>
            {item.new == true ?  <label className="newlabel">new</label>:null}
        {item.featured == true ? <label className="featuredlabel">featured</label>:null}
        </div>
        <p className="position">{item.position} </p>
        <div className="lastrowinfo">
        <label>{item.postedAt} </label>
        <hr></hr>
            <label>{item.contract} </label>
            <hr></hr>
            <label>{item.location} </label> 
        </div>
    </div>
    <div className="buttons">
        {QualificationArray.map((item)=>{
            return <button>{item}</button>
        })}
    </div>
</div>
    )
}
export default jobitem
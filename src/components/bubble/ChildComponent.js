import react from "react";

export default function ChildComponent({ item, setClick, goInner }) {
  return (
    <div
      className="childComponent"
      //style={{backgroundColor:`${item.color}`}}
      onClick={() => {
        setClick(item);
        goInner(true);
      }}
    >
     
      <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection: "column",
        transition: "opacity 0.1s ease 0s",
        opacity: 1,
        pointerEvents: "none",
        
      }} >
          
           <img 
            src={item.image} 
            alt="SOCIETE EQUATORIALE DES MINES LOGO PARTENAIRE" 
            style={{
              width: '130px',
              marginBottom: 10,
            
            }}
          />
      </div>
    </div>
  );
}

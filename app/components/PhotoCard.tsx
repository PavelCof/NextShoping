const  PhotoCard =({children}:{children:React.ReactNode})=>{
    const cardStyle ={
        padding:"10px",
        margin:"10px",
        boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",
        border:"1px solid #ccc",
        distlay:"flex",
        justyfyContent:"center",
        alignItems:"center",
        borderRadius:"15px"
    }

    return  <div style={cardStyle}>{children}</div>
}

export default PhotoCard
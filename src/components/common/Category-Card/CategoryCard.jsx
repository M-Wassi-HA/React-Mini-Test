import "./CategoryCard.css"

const CategoryCard = ({data}) => {
    console.log(data);
    
    return (

        <div className="Card-parent">
            <div className="card-child">
                <h1>{data.title}</h1>
                <h4>{data.subtitle}</h4> 
                <h5>{data.para}</h5>
                <p className="para">GO TO COLLECTION →</p>
                <img className="imgs" src={data.img} alt="" />
            </div>
        </div>
    )
}

export default CategoryCard

import AddToCartButton from "./AddToCartButton"
import Picture from './Picture'
import FormatMoney from './FormatMoney'

const Articles = ({ articles, addToCart }) => { 
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            { articles.map((article) => 
                <div className="p-4" key={article.id}>
                    <Picture src={article.img} alt={article.name}/>
                    <p className="w-full my-4 h-16 2xl:h-10 raleway-normal">{ article.name }</p>
                    <p className="w-full my-4 font-bold text-lg"><FormatMoney value={ article.price }/></p>
                    <AddToCartButton addToCart={() => addToCart(article)} text="Add To Cart" classes="p-2 text-base"/>
                </div>
            )}
        </div>
    )    
}

export default Articles
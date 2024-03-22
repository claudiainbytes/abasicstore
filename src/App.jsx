import { useState, useEffect } from 'react'
import articleService from './services/articles'
import Articles from './components/Articles'
import Cart from './components/Cart'
import CartModalButton from './components/CartModalButton'

const App = () => {

  const [articles, setArticles] = useState([])
  const [cart, setCart] = useState([])
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const articles_db_hook = () => {
    articleService
      .getAll()
      .then(allArticles => {
        setArticles(allArticles)
      })
  }
  useEffect(articles_db_hook, [])

  const addToCart = article => {
      const foundItem = cart.find((element) => element.id === article.id)
      if(foundItem === undefined){
        const newItem = {
          ...article,
          quantity: 1,
          pricexquantity: article.price * 1
        }
        setCart(cart.concat(newItem))
      } else {
        const updatedItem = {
          ...foundItem,
          quantity: foundItem.quantity + 1,
          pricexquantity: foundItem.price * (foundItem.quantity + 1)
        }
        setCart(cart.map((item) => item.id === foundItem.id ? updatedItem : item ))
      }
  }

  const removeFromCart = item => {
    const foundItem = cart.find((element) => element.id === item.id)
    if(foundItem.quantity > 1){
      const updatedItem = {
        ...foundItem,
        quantity: foundItem.quantity - 1,
        pricexquantity: foundItem.price * (foundItem.quantity - 1)
      }
      setCart(cart.map((item) => item.id === foundItem.id ? updatedItem : item ))
    } else {
      setCart(cart.filter((item) => item.id !== foundItem.id))
    }
  }  

  const toggleModal = () => {
    if(isCartModalOpen) {
      setIsCartModalOpen(false)
    } else {
      setIsCartModalOpen(true)
    } 
  }

  return (
      <div className="w-full p-4 xl:w-4/5">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-1">
          <div className="p-4 relative">
              <h2 className="text-xl lg:text-5xl font-bold bodoni-moda-bold">The D1 Wine Store</h2>
              <CartModalButton cart={cart} toggleModal={toggleModal} classes="absolute top-4 right-4 text-3xl"/>
          </div>
          <div className="p-4"><Articles articles={articles} addToCart={addToCart}/></div>
          <div id="cartModal" className={isCartModalOpen ? ``: `hide`} >
            <Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} toggleModal={toggleModal}/>
          </div>
        </div>
      </div>
  )
}

export default App



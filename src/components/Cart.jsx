/* eslint-disable react/prop-types */
import AddToCartButton from "./AddToCartButton"
import RemoveFromCartButton from "./RemoveFromCartButton"
import Picture from './Picture'
import FormatMoney from './FormatMoney'

const Cart = ({ cart, addToCart, removeFromCart, toggleModal}) => {
    const total = cart.reduce((sum, item) => sum + item.pricexquantity, 0)
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    return(
    <div className="w-full p-4 xl:w-4/5">
        <div className="w-full p-4 max-w-80 bg-white border-2 border-black float-right">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                <div className="p-0 relative">
                    <h2 className="text-xl lg:text-4xl font-bold bodoni-moda-bold m-0">Your Cart</h2>
                    <button className="cart-modal-close-btn" onClick={toggleModal}><i className="fa-solid fa-close"></i></button>
                </div>
                <div className="max-h-[22rem] xl:max-h-96 p-0 overflow-auto">
                { cart.map((item, index) => 
                    <div className="w-full flex flex-row flex-wrap mb-0" key={index}>
                        <div className="basis-1/4">
                            <div className="h-full flex items-center justify-center">
                                <Picture src={item.img} alt={item.name}/>
                            </div>
                        </div>
                        <div className="basis-3/4 p-2">
                            <div className="h-full flex items-top justify-center">
                                <div className="w-full grid grid-cols-1 gap-0">
                                    <div className="p-0">
                                        <p className="text-xs p-0 mb-2"><span className="font-bold">{ item.name }</span><br/>
                                        <span className="font-bold">Subtotal: &nbsp;</span>
                                            <FormatMoney value={item.pricexquantity}/><br/>
                                        <span className="font-bold">Quantity: &nbsp;</span>{item.quantity}
                                        </p>
                                    </div>
                                    <div className="p-0">
                                        <div className="flex">
                                            <div className="w-full w-1/2 pr-1">
                                                <div className="flex items-center justify-center">
                                                    <AddToCartButton addToCart={() => addToCart(item)} text="Add" classes="p-1 text-xs"/>
                                                </div>
                                            </div>
                                            <div className="w-full w-1/2 pl-1">
                                                <div className="flex items-center justify-center">
                                                    <RemoveFromCartButton removeFromCart={() => removeFromCart(item)} text="Remove" classes="p-1 text-xs"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                </div>
                <div className="p-0"><h3 className="w-full font-bold text-md lg:text-lg mb-2"><span className="bodoni-moda-bold">Total items: &nbsp;</span>{totalItems}</h3><hr/><h3 className="w-full font-bold text-md lg:text-lg my-2"><span className="bodoni-moda-bold">Total: &nbsp;</span><FormatMoney value={total}/></h3></div>
            </div>
        </div>
    </div>
    )
}

export default Cart
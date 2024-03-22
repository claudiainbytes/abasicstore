const RemoveFromCartButton = ({ removeFromCart, text, classes }) => <button className={`w-full rounded-lg bg-stone-600 hover:bg-red-600 text-white raleway-semibold ${classes}`}  onClick={removeFromCart}>{text}</button>

export default RemoveFromCartButton
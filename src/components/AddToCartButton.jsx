const AddToCartButton = ({ addToCart, text, classes }) => <button className={`w-full rounded-lg bg-rose-950 hover:bg-emerald-900 text-white raleway-semibold ${classes}`} onClick={addToCart}>{text}</button>

export default AddToCartButton
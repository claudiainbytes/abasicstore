const CartModalButton = ({ cart, toggleModal, classes }) => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    return(<button className={`cart-modal-btn ${classes}`} onClick={toggleModal}>
                <div className="btn-inner">
                    <span className="num-total">{ totalItems }</span><i className="fa-solid fa-cart-shopping"></i>
                </div>
           </button>)
}

export default CartModalButton
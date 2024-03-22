const FormatMoney = ({ value }) => {
    const COPCurrency = Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
    })
    const formattedValue = `${COPCurrency.format(value)} COP`
    return(<span>{ formattedValue }</span>)
}

export default FormatMoney
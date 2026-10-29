
type priceType ={
    priceItem:string |null | undefined
}
export default function Price(item:priceType) {
    return (
        < span className = "flex w-20 p-1 bg-gray-800 text-white" >
        R$ {item.priceItem }
        </span >
    )}
import "./total.css"
export default function Total({ num }) {

    return (
        <>
            <div className="register">
                <b>Total da compra</b>
                R$<span>{+num.toFixed(2)} </span>
            </div>
        </>
    )
}
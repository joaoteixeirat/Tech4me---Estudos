export default function Assistido(props) {

    return (
        <>
            <span>{
                props.assistido ? " ✅" : " 🚫"}
            </span>

            <br />

            <button onClick={props.mudar}>
                Mudar
            </button>
        </>
    )
}
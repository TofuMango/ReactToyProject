// const Hello = function (){
//     return <p>Hello</p>
// };
// export default Hello;

// const Hello = () => {
//     <p>Hello</p>
// };
// export default Hello;
import World from "./World";
export default function (){
    return(
        <div>
            <h1
                style={{
                    color: "#f00",
                    borderRight: "2px solid #000",
                    marginBottom: "30px",
                    opacity: 0.5
                }}
            >
            <p>Hello</p>
            </h1>
            <World/>
            <World/>
            <World/>
        </div>
    );
}

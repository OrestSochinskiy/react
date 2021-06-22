export default function Heading(props) {
    console.log(props);
    return (
        <div>
            <h1>{props.title}</h1>
            <p> {props.desc} </p>
        </div>
    );
}
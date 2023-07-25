import { Template } from "../models/template";
import '../styles/style.css?v=2';

export const Thumbnail = (props: { 
    template: Template;
    onclick: (template: Template) => void;
}) => {
    return (
    <a href="#" title={props.template.id} key={props.template.id} onClick={() => props.onclick(props.template)}>
        <img src={`assets/images/thumbnails/${props.template.thumbnail}`} alt={props.template.thumbnail.replace(".jpg", "")} width="145" height="121" />
        <span>{props.template.id}</span>
    </a>
    );
}
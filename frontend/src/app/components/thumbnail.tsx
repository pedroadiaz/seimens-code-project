import { Template } from "../models/template";

export const Thumbnail = (props: { template: Template}) => {
    return (
    <a href="#" title={props.template.id}>
        <img src={`assets/images/thumbnails/${props.template.thumbnail}`} alt={props.template.thumbnail.replace(".jpg", "")} width="145" height="121" />
        <span>{props.template.id}</span>
    </a>
    );
}
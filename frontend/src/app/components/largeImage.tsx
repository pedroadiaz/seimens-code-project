import { Template } from "../models/template";
import '../styles/style.css?v=2';

export const LargeImage = (props: { template: Template | undefined}) => {
    return (
    <div id="large">
        <div className="group">
            <img src={`assets/images/large/${props.template?.image}`} alt="Large Image" width="430" height="360" />
            <div className="details">
                <p><strong>Title</strong>{props.template?.title}</p>
                <p><strong>Description</strong>{props.template?.description}</p>
                <p><strong>Cost</strong>{props.template?.cost}</p>
                <p><strong>ID #</strong>{props.template?.id}</p>
                <p><strong>Thumbnail File</strong>{props.template?.thumbnail}</p>
                <p><strong>Large Image File</strong>{props.template?.image}</p>
            </div>
        </div>
    </div>
    )
}
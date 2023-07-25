import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Template } from '../models/template';
import { Thumbnail } from '../components/thumbnail';

export const HomePage = () => {
    const [templates, setTemplates] = useState<Template[]>([]);
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const url = `${process.env.NX_API_URL}/templates`;
    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then((json) => {
            const templates = json as Template[];
            setTemplates(templates);
        })
    }, []);

    return (
        <Carousel responsive={responsive}>
            {templates.map((template) => {
                <Thumbnail template={template} />
            })}
        </Carousel>
    )
}
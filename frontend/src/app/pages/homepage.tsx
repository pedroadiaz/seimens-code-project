import React, { useEffect, useState } from 'react';
import { Template } from '../models/template';
import { Thumbnail } from '../components/thumbnail';
import { LargeImage } from '../components/largeImage';
import '../styles/style.css?v=2';
import { Footer } from '../components/footer';
import { error } from 'console';

export const HomePage = () => {
    const [templates, setTemplates] = useState<Template[]>([]);
    const [displayedTemplates, setDisplayedTemplates] = useState<Template[]>([]);
    const [selectedTemplate, setSelectedTemplate] = useState<Template>();
    const [currentStart, setCurrentStart] = useState<number>(0);

    let start = currentStart;

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
            setDisplayedTemplates(templates.slice(0,4));
            setSelectedTemplate(templates[0]);
        })
        .catch(error => console.log("There was an error", error))
    }, []);

    const onClick = (template: Template) => {
        setSelectedTemplate(template);
    }

    const previousButtonClick = () => {
        if (currentStart > 0) {
            start = currentStart- 4;
            setCurrentStart(start);
        }
        
        setDisplayedTemplates(templates.slice(start, start + 4));
    }

    const nextButtonClick = () => {
        if (currentStart + 4 < templates.length - 1) {
            start = currentStart + 4;
            setCurrentStart(start);
            setDisplayedTemplates(templates.slice(start, start + 4));
        }
    }

    return (
        <>
            <div id="container">
                <header>
                    Code Development Project
                </header>
                <div id="main" role="main">
                    {templates && templates.length > 0 && (
                        <LargeImage template={selectedTemplate} />
                    )}
                    <div style={{ padding: "10px" }}>
                        <img key={1} style={{ padding: "10px" }} src="assets/images/previous.png" onClick={previousButtonClick}/>
                        <img key={2} style={{ padding: "10px" }} src="assets/images/next.png" onClick={nextButtonClick} />
                    </div>
                    {displayedTemplates?.map((t) => (
                        <Thumbnail template={t} onclick={onClick}/>
                    ))}
                </div>
                <Footer />
            </div> 
        </>
    )
}
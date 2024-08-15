import { dividerClasses } from '@mui/material';
import React, { useState } from 'react';
import '../../static/css/content.css';

const Content = () => {
    const [showContents, setShowContents] = useState({
        content1: false,
        content2: false,
        content3: false,
        content4: false,
        content5: false,
    });

    const handleToggleContent = (content) => {
        setShowContents((prevShowContents) => ({
          ...prevShowContents,
            [content]:!prevShowContents[content],
        }));
    };

    return (
        <div className="container">
            <h1>Language Lessons</h1>
            {Object.keys(showContents).map((content, index) => (
                <div key={index} className="button-content-group">
                    <div className="centered">
                        <button onClick={() => handleToggleContent(content)} className="button">
                            {showContents[content]? `Close ${content}` : `Access ${content}`}
                        </button>
                        {showContents[content] && (
                            <div className="content">
                                {/* Add your information here */}
                                <p>This is the {content} that was hidden.</p>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Content;
